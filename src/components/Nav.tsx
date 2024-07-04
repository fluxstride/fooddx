import { useState } from 'react';
import logo from '../assets/logo.svg';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { id: 1, text: 'Home', link: '#home' },
  { id: 2, text: 'About Us', link: '#about_us' },
  { id: 3, text: 'Explore Foods', link: '#explore' },
  { id: 4, text: 'Reviews', link: '#reviews' },
  { id: 5, text: 'Faq', link: '#faq' },
];

const Nav = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);

  const openMeu = () => setmenuIsOpen(true);
  const closeMenu = () => setmenuIsOpen(false);

  return (
    <>
      <div className="px-6 py-8 flex justify-between items-center max-w-7xl mx-auto">
        <a href="/">
          <img src={logo} alt="food dx" className="w-24 lg:w-32" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ id, link, text }) => (
            <li key={id}>
              <a
                href={link}
                className="text-orange-500 text-lg hover:underline font-medium"
                onClick={closeMenu}
              >
                {text}
              </a>
            </li>
          ))}

          <li>
            <a
              href="tel:1800 789 123"
              className="text-white bg-orange-500 px-6 py-3 font-medium"
              onClick={closeMenu}
            >
              1800 789 123
            </a>
          </li>
        </ul>

        <button onClick={openMeu} className="lg:hidden">
          <Menu />
        </button>
      </div>

      <div
        className={clsx(
          'h-screen bg-white fixed top-0 left-0 w-full overflow-auto lg:hidden',
          {
            hidden: !menuIsOpen,
          },
        )}
      >
        <div className={'px-6 py-8'}>
          <div className="flex justify-center items-center">
            <a href="/">
              <img src={logo} alt="food dx" className="w-24" />
            </a>

            <button className="ml-auto block" onClick={closeMenu}>
              <X />
            </button>
          </div>

          <ul className="flex flex-col gap-4 mt-14">
            {navLinks.map(({ id, link, text }) => (
              <li key={id}>
                <a
                  href={link}
                  className="text-orange-500 text-lg hover:underline font-medium"
                  onClick={closeMenu}
                >
                  {text}
                </a>
              </li>
            ))}

            <li className="mt-10">
              <a
                href="tel:1800 789 123"
                className="text-white bg-orange-500 px-6 py-3 font-medium"
                onClick={closeMenu}
              >
                1800 789 123
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
