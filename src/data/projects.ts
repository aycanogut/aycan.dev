export interface Project {
  /** Display name of the project. */
  title: string;
  /** Tech used, shown inline in the list. */
  stack: string[];
  /** Live URL. Omit (or undefined) for internal / not-public work. */
  url?: string;
}

/**
 * Client work, newest / most relevant first.
 * A project without `url` is internal and renders as "Internal tool" (no link).
 */
export const clientProjects: Project[] = [
  {
    title: 'Türkiye Bankalar Birliği',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
    url: 'https://egitim.tbb.org.tr/',
  },
  {
    title: 'İSO Akademi',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
    url: 'https://isoakademi.com/',
  },
  {
    title: 'Eskiz Eğitim ve Danışmanlık',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    url: 'https://eskizegitim.com/',
  },
  {
    title: 'TEGEP',
    stack: ['Next.js', 'TypeScript', 'styled-components', 'Ant Design'],
    // url temporarily removed — tegep.org's TLS certificate has expired and the
    // browser shows a security interstitial. Restore once the cert is renewed.
    // url: 'https://tegep.org/',
  },
  {
    title: 'Logo Akademi',
    stack: ['Next.js', 'styled-components', 'Sass', 'Ant Design'],
    url: 'https://logoakademi.com.tr/',
  },
  {
    title: 'Öğretmen Akademisi Vakfı',
    stack: ['Next.js', 'TypeScript', 'Mantine', 'Redux Toolkit'],
  },
  {
    title: 'Kamu İhale Kurumu',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
  },
];

/**
 * Personal / passion projects, newest / most relevant first.
 */
export const personalProjects: Project[] = [
  {
    title: 'TOYZ Webzine',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Payload CMS'],
    url: 'https://toyzwebzine.com',
  },
  {
    title: 'Efe Karadağlı Portfolio',
    stack: ['Astro', 'React', 'TypeScript', 'Tailwind CSS'],
    url: 'https://efekaradagli.com',
  },
];
