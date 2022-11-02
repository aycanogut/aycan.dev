import { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  title: 'aycan.dev',
  description: 'The portfolio website of Aycan Öğüt, a software developer.',
  canonical: 'https://www.aycan.dev',
  openGraph: {
    url: 'https://www.aycan.dev',
    title: 'aycan.dev',
    description: 'The portfolio website of Aycan Öğüt, a software developer.',
    type: 'website',
    locale: 'en_IE',
  },
  twitter: {
    handle: '@bleedeleventh',
    site: '@bleedeleventh',
    cardType: 'summary_large_image',
  },
}

export default SEO
