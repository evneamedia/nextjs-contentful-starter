export function Portfolio() {
  const projects = [
    {
      title: "Project One",
      description: "A comprehensive solution that demonstrates innovative approach to problem-solving.",
      category: "Web Development",
    },
    {
      title: "Project Two",
      description: "Creative design work showcasing attention to detail and user experience.",
      category: "Design",
    },
    {
      title: "Project Three",
      description: "Collaborative effort resulting in a successful product launch.",
      category: "Product",
    },
    {
      title: "Project Four",
      description: "Technical implementation of complex requirements with elegant solutions.",
      category: "Engineering",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
        <p className="text-lg text-gray-600 mb-12">
          A selection of my recent work and projects
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Project Image</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
