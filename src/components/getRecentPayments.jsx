import { Fragment, useEffect, useState } from 'react';
import classNames from '../utils/classNames';
import { statuses } from '../utils/statuses';
import axios from '../api/axiosInstance';
import Cookies from 'js-cookie';
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
} from '@heroicons/react/20/solid';

const convertPaymentIntentsToDays = (paymentIntents) => {
  const groupedByDate = {};

  paymentIntents.forEach((intent) => {
    const date = new Date(intent.createdAt).toLocaleDateString('en-CA');
    if (!groupedByDate[date]) {
      groupedByDate[date] = [];
    }
    let icon;
    if (intent.status === 'succeeded') {
      intent.status = 'Exitoso';
      icon = ArrowUpCircleIcon;
    } else if (intent.status === 'requires_capture') {
      intent.status = 'Pendiente';
      icon = ArrowPathIcon;
    } else if (intent.status === 'requires_payment_method') {
      intent.status = 'Denegado';
      icon = ArrowDownCircleIcon;
    }
    groupedByDate[date].push({
      id: intent.id,
      invoiceNumber: intent.id.slice(-6), // Using the last 6 characters of the ID as the invoice number
      href: '#',
      amount: `${(intent.amount / 100).toFixed(2)} ${intent.currency}`,
      tax: '13%', // No tax in the provided data
      status: intent.status,
      client: intent.customer
        ? intent.customer.name || 'Unknown Client'
        : 'Unknown Client',
      description: intent.description,
      icon,
    });
  });

  return Object.entries(groupedByDate).map(([date, transactions]) => ({
    date: date === new Date().toLocaleDateString('en-CA') ? 'Today' : date, // Adjust date label
    dateTime: date,
    transactions,
  }));
};

export default function GetPaymentIntents() {
  const [payments, setPayments] = useState([]);

  const getPaymentIntents = async () => {
    try {
      const response = await axios.get('/onvo/getPaymentIntents', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      });
      const paymentIntents = response.data.data;
      const days = convertPaymentIntentsToDays(paymentIntents);
      setPayments(days);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPaymentIntents();
  }, []);

  return (
    <tbody>
      {payments.map((payment) => (
        <Fragment key={payment.dateTime}>
          <tr className="text-sm leading-6 text-gray-900">
            <th
              scope="colgroup"
              colSpan={3}
              className="relative isolate py-2 font-semibold"
            >
              <time dateTime={payment.dateTime}>{payment.date}</time>
              <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
              <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
            </th>
          </tr>
          {payment.transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="relative py-5 pr-6">
                <div className="flex gap-x-6">
                  <transaction.icon
                    className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                    aria-hidden="true"
                  />
                  <div className="flex-auto">
                    <div className="flex items-start gap-x-3">
                      <div className="text-sm font-medium leading-6 text-gray-900">
                        ₡{transaction.amount}
                      </div>
                      <div
                        className={classNames(
                          statuses[transaction.status],
                          'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                        )}
                      >
                        {transaction.status}
                      </div>
                    </div>
                    {transaction.tax ? (
                      <div className="mt-1 text-xs leading-5 text-gray-500">
                        {transaction.tax} tax
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
              </td>
              <td className="hidden py-5 pr-6 sm:table-cell">
                <div className="text-sm leading-6 text-gray-900">
                  {transaction.client}
                </div>
                <div className="mt-1 text-xs leading-5 text-gray-500">
                  {transaction.description}
                </div>
              </td>
              <td className="py-5 text-right">
                <div className="flex justify-end">
                  <a
                    href={transaction.href}
                    className="text-sm font-medium leading-6 text-brandPurple hover:text-brandPurple/80"
                  >
                    View
                    <span className="hidden sm:inline"> transaction</span>
                    <span className="sr-only">
                      , invoice #{transaction.invoiceNumber},{' '}
                      {transaction.client}
                    </span>
                  </a>
                </div>
                <div className="mt-1 text-xs leading-5 text-gray-500">
                  Invoice{' '}
                  <span className="text-gray-900">
                    #{transaction.invoiceNumber}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </Fragment>
      ))}
    </tbody>
  );
}
