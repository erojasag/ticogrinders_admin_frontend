import { Menu, Transition } from '@headlessui/react';
import classNames from '../utils/classNames';
import { useDispatch } from 'react-redux';
import { logout } from '../reducers/authReducer';
export default function UserMenu() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      dispatch(logout());
      window.location.href = '/';
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Menu.Button>
      </div>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                )}
              >
                Your Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                )}
              >
                Settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                )}
                onClick={handleLogout}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
