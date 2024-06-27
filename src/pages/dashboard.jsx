import SecondaryNav from '../components/secondaryNav';
import Stats from '../components/stats';
import RecentActivity from '../components/recentPayments';
import { PlusIcon } from '@heroicons/react/20/solid';
import RecentClients from '../components/recentClients';

export default function Dashboard() {
  
  return (
    <>
      <main>
        <div className="relative isolate overflow-hidden pt-16">
          <header className="pb-4 pt-6 sm:pb-6">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
              <h1 className="text-base font-semibold leading-7 text-gray-900">
                Cashflow
              </h1>
              <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
                <SecondaryNav />
              </div>
              <a
                href="#"
                className="ml-auto flex items-center gap-x-1 rounded-md bg-brandPurple px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brandPurple/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurple"
              >
                <PlusIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
                New invoice
              </a>
            </div>
          </header>

          {/* Stats */}
          <Stats />
          <div
            className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
            aria-hidden="true"
          >
            <div
              className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
              style={{
                clipPath:
                  'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
              }}
            />
          </div>
        </div>

        <div className="space-y-16 py-16 xl:space-y-20">
          {/* Recent activity table */}
          <RecentActivity />

          {/* Recent client list*/}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RecentClients />
          </div>
        </div>
      </main>
    </>
  );
}
