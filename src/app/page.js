// pages/index.js
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-purple-100 text-gray-800 text-center p-6">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-16 animate-fade-in">
        Hi, I’m Laura
      </h1>

      {/* Introduction with shadow effect */}
      <p className="text-xl max-w-2xl mb-8 bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
        I’m a passionate educator and lifelong learner currently diving into the
        world of educational innovation at UNC-Chapel Hill through the MEITE
        program...
      </p>

      {/* Images with hover effects using Image component */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <div className="w-48 h-48 overflow-hidden rounded-full shadow-lg hover:scale-105 transform transition duration-300 ease-out hover:shadow-xl">
          <Image
            src="/1.jpeg" // 假设图片位于public目录下
            alt="Laura's photo"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="w-48 h-48 overflow-hidden rounded-full shadow-lg hover:scale-105 transform transition duration-300 ease-out hover:shadow-xl">
          <Image
            src="/2.jpeg"
            alt="Laura's photo"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="w-48 h-48 overflow-hidden rounded-full shadow-lg hover:scale-105 transform transition duration-300 ease-out hover:shadow-xl">
          <Image
            src="/3.jpg"
            alt="Laura's photo"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-10 space-x-6">
        <Link href="/about" passHref>
          <span className="text-lg font-semibold cursor-pointer bg-gray-200 bg-opacity-50 px-4 py-2 rounded-full transition duration-200 hover:bg-opacity-70">
            About
          </span>
        </Link>
        <Link href="/resume" passHref>
          <span className="text-lg font-semibold cursor-pointer bg-gray-200 bg-opacity-50 px-4 py-2 rounded-full transition duration-200 hover:bg-opacity-70">
            Resume
          </span>
        </Link>
        <Link href="/portfolio" passHref>
          <span className="text-lg font-semibold cursor-pointer bg-gray-200 bg-opacity-50 px-4 py-2 rounded-full transition duration-200 hover:bg-opacity-70">
            Portfolio
          </span>
        </Link>
      </nav>
    </main>
  );
}
