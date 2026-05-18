/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { APP_CONFIG } from '../constants';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [extIndex, setExtIndex] = useState(0);
  const extensions = ['.png', '.webp', '.jpg', '.jpeg', '.bmp'];
  const logoPath = `/assets/logo/logo${extensions[extIndex]}`;
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Notícias', path: '/noticias' },
    { name: 'Lojas', path: '/lojas' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Palestrantes', path: '/palestrantes' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="bg-white masonic-header-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-28 h-28 flex items-center justify-center shrink-0">
              {extIndex < extensions.length ? (
                <img 
                  src={logoPath} 
                  alt="Logo Colégio de Lojas Maçônicas da GLESP" 
                  className="w-full h-full object-contain"
                  onError={() => setExtIndex(prev => prev + 1)}
                />
              ) : (
                <div className="w-14 h-14 border-2 border-masonic-gold flex items-center justify-center rounded-full text-masonic-gold transition-all group-hover:bg-masonic-gold group-hover:text-white">
                  <span className="font-serif text-3xl font-bold">G</span>
                </div>
              )}
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-sans text-base md:text-xl font-bold text-masonic-blue uppercase tracking-tight leading-none truncate">Colégio de Lojas Maçônicas da GLESP - Sorocaba e Região</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lowercase">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs font-bold uppercase tracking-wider transition-all hover:text-masonic-gold",
                  location.pathname === link.path 
                    ? "text-masonic-gold border-b border-masonic-gold pb-1" 
                    : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-masonic-blue focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-medium",
                location.pathname === link.path
                  ? "bg-slate-50 text-masonic-gold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-masonic-blue"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
