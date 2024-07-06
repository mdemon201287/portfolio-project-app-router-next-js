// app/about/page.tsx
export default function About() {
    return (
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-primary">About Me</h1>
        <div className="space-y-4 text-gray-600">
          <p>
            I'm a passionate web developer with experience in creating modern, 
            responsive web applications. My skills include React, Next.js, 
            TypeScript, and Tailwind CSS.
          </p>
          <p>
            With a strong foundation in front-end development and a keen eye for 
            design, I strive to create intuitive and engaging user experiences.
          </p>
          <p>
            I'm always eager to learn new technologies and take on challenging projects 
            that push the boundaries of what's possible on the web.
          </p>
        </div>
      </div>
    );
  }