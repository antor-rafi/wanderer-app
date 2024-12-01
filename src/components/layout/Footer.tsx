import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">1wanderer</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Exploring philosophy, history, and personal growth through the lens of timeless wisdom.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/philosophy">Philosophy</Link></li>
              <li><Link href="/personal-growth">Personal Growth</Link></li>
              <li><Link href="/history">History</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/newsletter">Newsletter</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/ebooks">eBooks</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/membership">Membership</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} 1wanderer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};