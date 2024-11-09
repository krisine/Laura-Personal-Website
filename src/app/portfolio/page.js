// pages/portfolio.js
import Image from 'next/image';

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-purple-100 text-gray-800 p-6">
      <h1 className="text-4xl font-extrabold mb-8">Portfolio</h1>

      <section className="w-full max-w-xl bg-white bg-opacity-70 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Empathy</h2>
        <p className="text-lg mb-6">
          This artifact represents the empathy stage of design thinking by
          observing users in their natural environment...
        </p>
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/Empathy.jpg" // 替换为实际图片路径
            alt="Roper Hall"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="w-full max-w-xl bg-white bg-opacity-70 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Define</h2>
        <p className="text-lg mb-6">
          This artifact represents the define stage of design thinking, where
          initial research findings were synthesized...
        </p>
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/Define.png" // 替换为实际图片路径
            alt="Whiteboard Session"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="w-full max-w-xl bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Iterate</h2>
        <p className="text-lg mb-6">
          This artifact represents the iterate stage of design thinking by
          brainstorming ideas to solve design challenges...
        </p>
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/Iterate.png" // 替换为实际图片路径
            alt="Mind Mapping"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
