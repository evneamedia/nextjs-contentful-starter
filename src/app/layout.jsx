import '../../styles/globals.css';
import { Navigation } from '../components/Navigation.jsx';

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal website showcasing my work and experience',
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
