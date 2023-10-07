'use client';

import Link from 'next/link';
import { Button, Logo } from './';
import { navLinks } from '@/constants';
import { mobileNavCtx } from '@/contexts/mobileNavCtx';
import { useContext } from 'react';

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(mobileNavCtx);

  return (
    <header className="header">
      <Link href="/">
        <Logo textColor="#2D314D" />
      </Link>

      <nav className="hidden md:block">
        <ul className="flexCenter gap-6">
          {navLinks.map(link => (
            <li key={link.title}>
              <a
                href={link.href}
                className="nav__link-border relative text-grayish transition-all hover:text-black hover:before:opacity-100"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="z-[100] block md:hidden"
      >
        <img
          src={isOpen ? '/assets/icon-close.svg' : '/assets/icon-hamburger.svg'}
          alt="Toggle Mobile Nav"
          className="h-5 w-5 stroke-black sm:h-8 sm:w-8"
        />
      </button>

      {isOpen && (
        <nav className="mobile__nav">
          <ul className="flexCenter flex-col gap-4">
            {navLinks.map(link => (
              <li key={link.title}>
                <a href={link.href} className="text-xl">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <Button text="Request Invite" styles="md:block hidden" />
    </header>
  );
};

export default Navbar;
