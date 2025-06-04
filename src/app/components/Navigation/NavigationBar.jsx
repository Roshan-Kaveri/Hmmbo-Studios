'use client';

import { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation'; 

const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
});

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
   const router = useRouter();


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


   const navItems = {
      Home: '/',
    Projects: '/projects',
   Blog: '/blog',
    Contact: '/contact',
    };

  return (
    <div
      className={`fixed top-0 w-full transition-all duration-300 z-40 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-sm ' : 'bg-[#0A0A0A]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className={`${poppins.className} text-2xl text-primary font-bold`}>
            <span className="text-secondary-gradient">H</span>S
          </div>

          {/* Desktop Navigation */}
          

<div className="hidden md:flex space-x-4">
  {Object.entries(navItems).map(([name, path]) => (
    <div
      key={name}
      className={`text-primary font-light p-1 px-2 rounded-md hover:text-primary/80 transition-colors cursor-pointer`}
      onClick={() => router.push(path)}
    >
      {name}
    </div>
  ))}
  <div
    className={`text-white bg-primary p-1 px-2 rounded-md font-light hover:text-white/80 transition-colors cursor-pointer`}
    onClick={() => router.push('/login')}
  >
    login
  </div>
</div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] p-4 absolute w-full z-50">
          {['Home', 'Products', 'Blog', 'Contact'].map((item) => (
            <div
              key={item}
              className="text-primary py-2 border-b border-primary/20 hover:text-primary/80 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
