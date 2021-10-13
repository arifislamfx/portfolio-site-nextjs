import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-gray-300 min-w-full h-16 flex justify-center">
      <nav className="flex justify-between container mx-auto items-center ">
        <a href="">
          {' '}
          <Link href="/">
            <a className="text-3xl font-semibold font-mono ">Ariful Islam</a>
          </Link>{' '}
        </a>
        <ul className="flex space-x-4 text-2xl ">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
