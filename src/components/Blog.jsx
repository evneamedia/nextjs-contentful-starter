export function Blog() {
  const posts = [
    {
      title: "Getting Started with Web Development",
      excerpt: "A comprehensive guide to beginning your journey in web development, covering essential tools and best practices.",
      date: "November 1, 2025",
      category: "Development",
    },
    {
      title: "The Power of Modern Design",
      excerpt: "Exploring how contemporary design principles can transform user experience and engagement.",
      date: "October 28, 2025",
      category: "Design",
    },
    {
      title: "Building Scalable Applications",
      excerpt: "Key considerations and strategies for creating applications that grow with your needs.",
      date: "October 15, 2025",
      category: "Engineering",
    },
    {
      title: "Productivity Tips for Professionals",
      excerpt: "Practical advice and techniques to enhance your workflow and maximize efficiency.",
      date: "October 5, 2025",
      category: "Career",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog</h2>
        <p className="text-lg text-gray-600 mb-12">
          Thoughts, insights, and stories from my journey
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-blue-600 font-semibold">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
