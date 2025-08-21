'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const Logo = () => (
    <svg width="32" height="32" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M75 0L149.25 43.75V131.25L75 175L0.75 131.25V43.75L75 0Z" fill="white" />
        <path d="M75 15L134.25 51.25V123.75L75 160L15.75 123.75V51.25L75 15Z" fill="black" />
        <path d="M75 25L124.25 56.25V118.75L75 150L25.75 118.75V56.25L75 25Z" fill="white" />
        <path d="M75 35L114.25 61.25V113.75L75 140L35.75 113.75V61.25L75 35Z" fill="black" />
        <path d="M75 45L104.25 66.25V108.75L75 130L45.75 108.75V66.25L75 45Z" fill="white" />
    </svg>
);

const HamburgerIcon = ({ isOpen }) => (
    <div className="w-6 h-6 flex flex-col justify-around">
        <span className={`block h-0.5 bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
        <span className={`block h-0.5 bg-white transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`block h-0.5 bg-white transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
    </div>
);

// Define your actual nav links
const navLinks = [

    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Tools", href: "/Tool" }
];

export default function Navbar() {
    const pathname = usePathname();
    const [isAnnouncementVisible, setAnnouncementVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const isActive = (href) => pathname === href;

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
                {/* --- Announcement Bar --- */}
                <div className={`dark:bg-black dark:text-gray-100 bg-white/90 text-gray-900 text-center text-sm transition-all duration-300 ${isAnnouncementVisible ? 'py-2 max-h-12' : 'max-h-0 py-0 opacity-0 overflow-hidden'}`}>
                    <div className="container mx-auto flex justify-center items-center relative px-4">
                        <span>This site is currently in beta. Things might not work as expected for now.</span>
                        <button onClick={() => setAnnouncementVisible(false)} className="absolute right-4 top-1/2 -translate-y-1/2 dark:text-gray-400 text-gray-900" aria-label="Dismiss announcement">
                            <XIcon />
                        </button>
                    </div>
                </div>

                {/* --- Main Navbar --- */}
                <nav className={`w-full py-3 dark:bg-black/80 bg-white/90 backdrop-blur-lg border-b transition-all duration-300 ${isScrolled ? 'border-gray-800' : 'border-transparent'}`}>
                    <div className={`container mx-auto flex items-center justify-between px-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <div className={`transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                                <Logo />
                            </div>
                            <span className="font-bold text-xl dark:text-white text-gray-950">PORTSITE</span>
                        </Link>

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3 py-1 rounded-md text-sm lg:text-base transition-colors ${isActive(link.href)
                                        ? 'bg-gray-950 text-gray-200 font-medium'
                                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-950'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop Buttons */}
                        <div className="hidden md:flex items-center">
                            <Link href="/get-started" className={`dark:bg-white dark:text-black bg-black text-white font-semibold rounded-full transition-all duration-300 ${isScrolled ? 'px-4 py-1.5 text-sm' : 'px-5 py-2 text-base'}`}>
                                Get Started
                            </Link>
                            <button
                                onClick={toggleTheme}
                                className="ml-4 "
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? <Moon size={20} color='blue' /> : <Sun size={20} color="yellow" />}
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden flex items-center gap-2">
                            <button onClick={toggleTheme} className="text-white hover:text-yellow-400 dark:hover:text-gray-700" aria-label="Toggle theme">
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} color="black" />}
                            </button>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-50" aria-label="Toggle menu">
                                <HamburgerIcon isOpen={isMenuOpen} />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* --- Mobile Menu --- */}
            <div className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="container mx-auto h-full flex flex-col items-center justify-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-white text-3xl font-semibold" onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/get-started" className="bg-white text-black text-xl font-semibold rounded-full px-6 py-3 mt-4" onClick={() => setIsMenuOpen(false)}>
                        Get Started
                    </Link>
                </div>
            </div>
        </>
    );
}
