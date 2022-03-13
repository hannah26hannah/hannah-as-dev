import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  const pathname = router.pathname;

  const getLabel = () => {
    switch (router.pathname) {
      case '/blog':
        return 'writer';
      case '/contact':
        return '☕-lover';
      default:
        return 'dev';
    }
  };

  const isActive = (url) => {
    if (url === '/blog' && pathname.includes('posts')) {
      return true;
    }
    return pathname === url;
  };

  return (
    <nav className='w-full flex flex-col text-gray-1 text-xl py-6 items-center h-auto'>
      <h1 className='text-3xl mb-6'>
        <Link href='/'>
          <a>Hannah-as-{getLabel()}</a>
        </Link>
      </h1>

      <ul className='flex flex-row justify-between'>
        <div className='flex flex-row justify-around'>
          {[
            ['About', '/'],
            ['Blog', '/blog'],
            ['Projects', '/projects'],
            ['Resume', '/resume'],
            ['Contact', '/contact'],
          ].map(([title, url]) => (
            <li key={url} className='relative'>
              <Link href={url}>
                <a
                  className={`${
                    isActive(url) ? 'floating-dot' : ''
                  } cursor-pointer rounded-lg px-3 py-2 font-medium text-gray-1 hover:underline`}
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
}
