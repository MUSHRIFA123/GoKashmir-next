// utils/fonts.js

import { Figtree, Poppins } from 'next/font/google';

// Configure the Figtree font
export const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});

// Configure the Poppins font
export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});