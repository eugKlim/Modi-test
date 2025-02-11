import React from 'react';

const dbLink = [
  {
    title: 'Контакты',
  },
  {
    title: 'Игры',
  },
  {
    title: 'О нас',
  },
];

const Header = () => {
  return (
    <div className="container py-8 flex justify-between">
      <h2 className="font-bold uppercase flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
          <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
          <path d="M6 18h.01" />
          <path d="M10 14h.01" />
          <path d="M15 6h.01" />
          <path d="M18 9h.01" />
        </svg>{' '}
        Gates of Olympus
      </h2>

      <ul className="space-x-5 sm:hidden md:flex md:items-center">
        {dbLink.map((link, index) => (
          <li
            className="cursor-pointer text-amber-300 hover:text-white text-lg"
            key={index}
          >
            {link.title}
          </li>
        ))}
      </ul>

      <button className="relative space-y-10 -mt-1 mr-10 sm:block md:hidden">
        <span className="w-10 h-1 bg-amber-50 block absolute top-0" />
        <span className="w-10 h-1 bg-amber-50 block absolute top-3" />
        <span className="w-10 h-1 bg-amber-50 block absolute top-6" />
      </button>
    </div>
  );
};

export default Header;
