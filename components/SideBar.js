import React from 'react';
import menu from 'data/menu';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function SideBar({ closeMobileMenu, isActive }) {
  return (
    <aside
      className='w-64 h-screen fixed top-0 left-0 z-10'
      aria-label='Sidebar'
    >
      <div className='overflow-y-auto py-4 px-3 bg-beige-default rounded'>
        <div className='flex justify-end'>
          <button type='button' onClick={closeMobileMenu}>
            <span className='sr-only'>Close Mobile Menu</span>
            <FontAwesomeIcon icon={faArrowLeftLong} size='xl' />
          </button>
        </div>

        <ul className='space-y-2'>
          {menu.map(([title, url]) => (
            <li key={url}>
              <Link href={url}>
                <a
                  className={`${
                    isActive(url) ? 'underline' : ''
                  } cursor-pointer text-medium font-normal text-gray-1 hover:underline`}
                >
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
