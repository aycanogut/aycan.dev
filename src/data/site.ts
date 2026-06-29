export const site = {
  name: 'Aycan Öğüt',
  role: 'Frontend Developer',
  company: '90pixel',
  email: 'info@aycan.dev',
  url: 'https://www.aycan.dev',
  title: 'Aycan Öğüt — Frontend Developer',
  description:
    'Aycan Öğüt is a frontend developer based in İzmir, Türkiye, building fast, accessible web interfaces with React, Next.js, Astro and TypeScript.',
  available: true,
} as const;

export interface SocialLink {
  label: string;
  href: string;
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/aycanogut/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aycanogut/' },
  { label: 'Email', href: 'mailto:info@aycan.dev' },
];

export interface StackGroup {
  label: string;
  items: string[];
}

export const techStack: StackGroup[] = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML & CSS'] },
  { label: 'Frameworks', items: ['Next.js', 'React', 'Astro'] },
  { label: 'Styling & UI', items: ['Tailwind CSS', 'styled-components', 'Radix UI'] },
  { label: 'Motion & Tooling', items: ['Framer Motion', 'Git', 'Figma'] },
];
