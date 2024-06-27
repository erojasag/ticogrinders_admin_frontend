import { useState } from 'react';

export default function SecondaryNav() {
  const [secondaryNavigation, setSecondaryNavigation] = useState([
    { name: 'Last 7 days', href: '#', current: true },
    { name: 'Last 30 days', href: '#', current: false },
    { name: 'All-time', href: '#', current: false },
  ]);
  return secondaryNavigation.map((item) => (
    <a
      key={item.name}
      href={item.href}
      className={
        item.current
          ? 'text-brandPurple'
          : 'text-gray-700 hover:text-brandPurple/80'
      }
      onClick={() =>
        setSecondaryNavigation((prev) => {
          return prev.map((prevItem) => {
            return {
              ...prevItem,
              current: prevItem.name === item.name,
            };
          });
        })
      }
    >
      {item.name}
    </a>
  ));
}
