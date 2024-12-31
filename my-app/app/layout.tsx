import About from './about/page';
import './globals.css';
import { Inter } from 'next/font/google';
import Projects from './projects/page';
import Contact from './contact/page';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sai Kumar | Full Stack Developer',
  description: 'Professional Portfolio for Sai Kumar - Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      
      <body className={inter.className}>

        {children}
     
        <About />
        <Projects />
        <Contact />
      </body>
    </html>
  );
}