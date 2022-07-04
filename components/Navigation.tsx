import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideBar from './SideBar';
import menu from 'data/menu';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Navigation: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const getLabel = () => {
    switch (router.pathname) {
      case '/blog':
        return 'writer';
      case '/channel':
        return '☕-lover';
      default:
        return 'dev';
    }
  };

  const isActive = (url: string) => {
    if (url === '/blog' && pathname.includes('posts')) {
      return true;
    } else if (url === '/projects' && pathname.includes('projects')) {
      return true;
    }
    return pathname === url;
  };

  const [isOpen, setOpen] = useState(false);

  const openMobileMenu = () => {
    setOpen(true);
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <nav className='w-full flex flex-col text-gray-1 text-xl py-6 items-start tablet:items-center h-auto'>
      <h1 className='text-3xl mb-6 font-bold'>
        <Link href='/'>
          <a>Hannah-as-{getLabel()}</a>
        </Link>
      </h1>

      <button type='button' onClick={openMobileMenu} className='tablet:hidden'>
        <span className='sr-only'>Open Mobile Menu</span>
        <FontAwesomeIcon icon={faBars as IconProp} size='lg' />
      </button>

      {isOpen && (
        <SideBar closeMobileMenu={closeMobileMenu} isActive={isActive} />
      )}

      <ul className='hidden tablet:flex flex-row justify-between'>
        <div className='flex flex-row justify-around'>
          {menu.map(([title, url]) => (
            <li key={url} className='relative'>
              <Link href={url}>
                <a
                  className={`${
                    isActive(url) ? 'floating-dot' : ''
                  } font-bold cursor-pointer rounded-lg px-3 py-2 text-gray-1 hover:underline`}
                >
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
