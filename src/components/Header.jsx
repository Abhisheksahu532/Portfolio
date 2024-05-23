import React from 'react';

const Header = () => {
  return (
    <header className="py-4 px-6 flex justify-between items-center bg-gray-800 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#contact">Contact</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <button className="bg-white text-gray-800 px-4 py-2 rounded" onClick={() => console.log('Toggle Dark Mode')}>Dark Mode/Light Mode</button>
    </header>
  );
};

export default Header;
