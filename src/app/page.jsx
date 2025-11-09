import { About } from '../components/About.jsx';
import { Portfolio } from '../components/Portfolio.jsx';
import { Resume } from '../components/Resume.jsx';
import { Blog } from '../components/Blog.jsx';
import { Contact } from '../components/Contact.jsx';

export default function HomePage() {
  return (
    <main className="pt-16">
      <About />
      <Portfolio />
      <Resume />
      <Blog />
      <Contact />
    </main>
  );
}
