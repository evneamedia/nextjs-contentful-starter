export function Resume() {
  const experience = [
    {
      title: "Senior Position",
      company: "Company Name",
      period: "2020 - Present",
      description: "Led key initiatives and delivered impactful results.",
    },
    {
      title: "Mid-Level Position",
      company: "Previous Company",
      period: "2018 - 2020",
      description: "Contributed to major projects and team success.",
    },
    {
      title: "Junior Position",
      company: "First Company",
      period: "2016 - 2018",
      description: "Developed foundational skills and gained valuable experience.",
    },
  ];

  const education = [
    {
      degree: "Master's Degree",
      institution: "University Name",
      year: "2016",
    },
    {
      degree: "Bachelor's Degree",
      institution: "University Name",
      year: "2014",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "CSS/Tailwind",
    "Git",
    "Problem Solving",
    "Team Leadership",
    "Communication",
  ];

  return (
    <section id="resume" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Resume</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                <p className="text-gray-600 font-semibold">{job.company}</p>
                <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                <p className="text-gray-700">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-green-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
