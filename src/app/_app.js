// pages/_app.js
import Link from 'next/link';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="bg-white shadow p-4">
        <nav className="flex justify-center space-x-8">
          <Link href="/">
            <a className="text-blue-500">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-blue-500">About</a>
          </Link>
          <Link href="/resume">
            <a className="text-blue-500">Resume</a>
          </Link>
          <Link href="/portfolio">
            <a className="text-blue-500">Portfolio</a>
          </Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
}
