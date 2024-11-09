// pages/resume.js
export default function Resume() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-purple-100 text-gray-800 p-6">
      <h1 className="text-4xl font-extrabold mb-8">Resume</h1>

      <section className="w-full max-w-2xl bg-white bg-opacity-70 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="space-y-4 text-lg">
          <li>
            <strong>University of North Carolina at Chapel Hill</strong> -
            Master of Art in Educational Innovation, Technology, and
            Entrepreneurship
            <span className="text-gray-500 block">Start from Aug 2024</span>
          </li>
          <li>
            <strong>Sichuan University, China</strong> - Master of Literature in
            Comparative Literature and World Literature
            <span className="text-gray-500 block">GPA: 3.8/4, May 2021</span>
          </li>
          <li>
            <strong>Lanzhou University, China</strong> - Bachelor of Literature
            in Chinese Language and Literature
            <span className="text-gray-500 block">GPA: 4.3/5, May 2018</span>
          </li>
        </ul>
      </section>

      <section className="w-full max-w-2xl bg-white bg-opacity-70 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <ul className="space-y-4 text-lg">
          <li>
            <strong>Event Assistant, UNC-Chapel Hill Student Union</strong>
            <p>
              Provided event logistics and support to ensure a welcoming
              environment for students and faculty.
            </p>
            <span className="text-gray-500">Aug 2024 - Present</span>
          </li>
          <li>
            <strong>Chinese Teacher, Guohua Memorial High School</strong>
            <p>
              Conducted Chinese lessons and oversaw student activities,
              providing both educational and personal guidance.
            </p>
            <span className="text-gray-500">Mar 2021 - Jun 2024</span>
          </li>
          {/* Add other work experiences here */}
        </ul>
      </section>

      <section className="w-full max-w-2xl bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Other Experience</h2>
        <ul className="space-y-4 text-lg">
          <li>
            <strong>Exchange Student, Tamkang University, Taiwan</strong>
            <p>
              Learned to appreciate diverse cultures and individual perspectives
              through an immersive experience.
            </p>
            <span className="text-gray-500">Jan - Jun 2016</span>
          </li>
          <li>
            <strong>Vice-chairman, Tibetan Culture Association</strong>
            <p>
              Organized seminars and events to promote Tibetan culture and
              celebrate diversity.
            </p>
            <span className="text-gray-500">Jul 2016 - Sep 2017</span>
          </li>
          {/* Add other experiences here */}
        </ul>
      </section>
    </main>
  );
}
