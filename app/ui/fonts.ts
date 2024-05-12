import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// Especificar los pesos disponibles para la fuente Lusitana
export const lusitanaRegular = Lusitana({ subsets: ['latin'], weight: '400' });
export const lusitanaBold = Lusitana({ subsets: ['latin'], weight: '700' });