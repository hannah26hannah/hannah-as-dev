import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className='w-full text-white text-xl mt-10'>
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
            ['About', '/about'],
            ['Blog', 'blog'],
            ['Projects', '/projects'],
            ['Resume', '/resume'],
            ['Contact', '/contact'],
          ].map(([title, url]) => (
            <li>
              <Link href={url}>
                <a className='rounded-lg px-3 py-2 font-medium text-[#4F6D7A] hover:bg-slate-100'>
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
