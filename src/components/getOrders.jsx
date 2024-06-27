import { createAvatar } from '@dicebear/core';
import { pixelArt } from '@dicebear/collection';
import classNames from '../utils/classNames';
import { orderStatus } from '../utils/orderStatus';
import { Link } from 'react-router-dom';
export default function GetOrders({ orders }) {
  const avatar = createAvatar(pixelArt, {
    seed: '12142',
    radius: 50,
  });
  const svg = avatar.toString();
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {orders.map((order) => (
        <tr key={order.id}>
          <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
            <div className="flex items-center">
              <div className="h-11 w-11 flex-shrink-0">
                <div dangerouslySetInnerHTML={{ __html: svg }} />
              </div>
            </div>
          </td>
          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
            <div className="font-medium text-gray-900">
              {order.customer.name}
            </div>
            <div className="mt-1 text-gray-500">#{order._id.slice(-8)}</div>

            <div className="text-gray-900">{order.title}</div>
            <div className="mt-1 text-gray-500">{order.department}</div>
          </td>
          <td className="whitespace-normal px-3 py-5 text-sm text-gray-500">
            <div className="font-medium text-gray-900">
              {order.customer.address.street}
            </div>
            <div className="mt-1 text-gray-500">
              {order.customer.address.street2}
            </div>{' '}
            <div className="mt-1 text-gray-500">
              {order.customer.address.city}, {order.customer.address.state},{' '}
              {order.customer.address.district}
            </div>
            <div className="mt-1 text-gray-500">
              {order.customer.address.postalCode},{' '}
              {order.customer.address.country}
            </div>
            <div className="mt-1 text-gray-500">{order.customer.phone}</div>
          </td>
          <td className="whitespace-normal px-3 py-5 text-sm text-gray-500">
            {order.payment.cardProvider === 'sinpe' && (
              <img
                src="https://imagedelivery.net/-Kv3q_Rw64dJAsVUQLtKJw/f769b002-b84f-4b8b-db90-43b5f7833d00/emails"
                alt="Sinpe"
                className="h-6 w-auto"
              />
            )}
            {order.payment.cardProvider === 'visa' && (
              <>
                <img
                  src="https://imagedelivery.net/-Kv3q_Rw64dJAsVUQLtKJw/2dd62e18-7ba1-4d4b-40ae-d279558ab300/public"
                  alt="visa"
                  className="h-2 w-auto"
                />
                <div className="font-medium text-gray-900">
                  Termina en: {order.payment.lastFour}
                </div>
                <div className="font-medium text-gray-900">
                  Expira: {order.payment.expMonth}/{order.payment.expYear}
                </div>
                <div className="font-medium text-gray-900">
                  {order.payment.holderName}
                </div>
              </>
            )}
            {order.payment.cardProvider === 'mastercard' && (
              <>
                <img
                  src="https://imagedelivery.net/-Kv3q_Rw64dJAsVUQLtKJw/3db18c42-fdb4-4de1-208a-706749321200/public"
                  alt="mc"
                  className="h-5 w-auto"
                />
                <div className="font-medium text-gray-900">
                  Termina en: {order.payment.lastFour}
                </div>
                <div className="font-medium text-gray-900">
                  Expira: {order.payment.expMonth}/{order.payment.expYear}
                </div>
                <div className="font-medium text-gray-900">
                  {order.payment.holderName}
                </div>
              </>
            )}
            {order.payment.cardProvider === 'american-express' && (
              <>
                <img
                  src="https://imagedelivery.net/-Kv3q_Rw64dJAsVUQLtKJw/da722f65-1ffa-4cb7-00dd-1f49f3225f00/public"
                  alt="amex"
                  className="h-5 w-auto"
                />
                <div className="font-medium text-gray-900">
                  Termina en: {order.payment.lastFour}
                </div>
                <div className="font-medium text-gray-900">
                  Expira: {order.payment.expMonth}/{order.payment.expYear}
                </div>
                <div className="font-medium text-gray-900">
                  {order.payment.holderName}
                </div>
              </>
            )}
          </td>
          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 text-center">
            <div
              className={classNames(
                orderStatus[order.orderDetails.status],
                'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
              )}
            >
              {order.orderDetails.status}
            </div>
          </td>
          <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
            <Link
              to={`/order/${order._id}`}
              className="text-brandPurple hover:text-brandPurple/80"
            >
              Edit<span className="sr-only">, {order._id}</span>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
