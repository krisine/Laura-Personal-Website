// app/layout.js
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'My Personal Website',
  description: 'A warm and personal website for Laura',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow p-4">
          <nav className="flex justify-center space-x-8">
            <Link href="/" className="text-blue-500 hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-blue-500 hover:underline">
              About
            </Link>
            <Link href="/resume" className="text-blue-500 hover:underline">
              Resume
            </Link>
            <Link href="/portfolio" className="text-blue-500 hover:underline">
              Portfolio
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
