export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Hello! I&apos;m a passionate professional dedicated to creating meaningful work and making a positive impact.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              With expertise in my field, I bring creativity, innovation, and a commitment to excellence to every project I undertake.
            </p>
            <p className="text-lg text-gray-700">
              When I&apos;m not working, I enjoy exploring new technologies, learning new skills, and connecting with like-minded individuals.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Profile Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
