import { useState } from 'react';

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';
import UserMenu from './userMenu';

const navigation = [
  { name: 'Inicio', href: '/dashboard' },
  { name: 'Inventario', href: '/inventory' },
  { name: 'Contactos', href: '/contacts' },
  { name: 'Ordenes', href: '/orders' },
];

export default function Navbar({ isLoggedIn }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {isLoggedIn && (
        <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex flex-1 items-center gap-x-6">
              <button
                type="button"
                className="-m-3 p-3 md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  className="h-5 w-5 text-gray-900"
                  aria-hidden="true"
                />
              </button>
              <img
                className="h-14 w-auto"
                src="./logo.png"
                alt="Ticogrinders"
              />
            </div>
            <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
              {navigation.map((item, itemIdx) => (
                <a key={itemIdx} href={item.href}>
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-1 items-center justify-end gap-x-8">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <UserMenu />
            </div>
          </div>
          <Dialog
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
              <div className="-ml-0.5 flex h-16 items-center gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="-ml-0.5">
                  <a href="/dashboard" className="-m-1.5 block p-1.5">
                    <span className="sr-only">Ticogrinders</span>
                    <img className="h-16 w-auto" src="./logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="mt-2 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      )}
    </>
  );
}
