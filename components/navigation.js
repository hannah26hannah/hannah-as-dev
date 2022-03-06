import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();

  return (
    <nav className='w-full text-white text-xl mt-10 h-12 border-b-2 border-b-gray-light'>
      <ul className='h-4 flex flex-row justify-between'>
        <div>
          <li>
            <Link href='/'>
              <a>Hannah-as-dev</a>
            </Link>
          </li>
        </div>
        <div className='flex flex-row justify-around'>
          {[
            ['Blog', '/blog'],
            ['Projects', '/projects'],
            ['Resume', '/resume'],
            ['Contact', '/contact'],
          ].map(([title, url]) => (
            <li key={url}>
              <Link href={url}>
                <a
                  className={`${
                    router.pathname === url ? 'underline' : ''
                  } cursor-pointer rounded-lg px-3 py-2 font-medium text-[#4F6D7A] hover:bg-slate-100`}
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
