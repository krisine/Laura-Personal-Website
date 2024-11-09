// pages/about.js
export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-purple-100 text-gray-800 p-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-8">About Me</h1>

      {/* Contact Card */}
      <div className="w-full max-w-md bg-white bg-opacity-70 p-8 rounded-lg shadow-lg text-center">
        <p className="text-lg mb-6">
          Feel free to reach out to me for collaborations, insights, or just to
          chat!
        </p>

        <div className="text-left space-y-4">
          <p className="text-lg">
            <span className="font-semibold">Email:</span>{' '}
            <a
              href="mailto:luona@unc.edu"
              className="text-blue-500 hover:underline"
            >
              luona@unc.edu
            </a>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Phone:</span>{' '}
            <a
              href="tel:+19843693545"
              className="text-blue-500 hover:underline"
            >
              984-369-3545
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
