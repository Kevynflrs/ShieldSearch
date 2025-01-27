import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Profil', href: '#preview' },
    { label: 'Tableau de synthèse', href: '#tableau' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Expériences', href: '#experiences' },
    { label: 'Veille', href: '#veille' },
    { label: 'Projets', href: '#projets' },
    { label: 'Contact', href: '#footer' }
  ];

  return (
    <div className="fixed w-full top-0 z-50">
      <div className="h-24 flex items-center justify-between px-4 md:px-16 bg-white shadow-md">
        <a href='/' className="text-2xl font-bold">Mon Portfolio</a>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="hover:text-gray-600 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <img 
            src={`${process.env.PUBLIC_URL}/moon.png`} 
            alt="toggle to dark theme" 
            className="hidden md:block w-8 h-8 md:w-8 md:h-8 cursor-pointer" 
          />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-[#081C15] text-2xl"
          >
            {isOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-24 w-full bg-white shadow-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-3 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex justify-center py-2 md:hidden">
            <img 
              src={`${process.env.PUBLIC_URL}/moon.png`} 
              alt="toggle to dark theme" 
              className="w-8 h-8 md:w-8 md:h-8 cursor-pointer" 
            />
          </div>
        </div>
      )}
    </div>
  );
}