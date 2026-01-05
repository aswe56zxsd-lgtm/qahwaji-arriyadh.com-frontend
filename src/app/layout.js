import './globals.css';

export const metadata = {
  metadataBase: new URL('https://qahwaji-arriyadh.com'),
  title: {
    default: 'قهوجيي وصبابين الرياض | قهوجي وصباب بالرياض',
    template: '%s | قهوجيي وصبابين الرياض',
  },
  description: 'أفضل قهوجي بالرياض - قهوجيين وصبابين الرياض، قهوجيات وصبابات، مباشرين قهوة، صبابين قهوة بالرياض. خدمات ضيافة عربية احترافية لجميع المناسبات.',
  keywords: 'قهوجي الرياض, قهوجيين وصبابين الرياض, قهوجي وصباب, صبابين قهوة الرياض, قهوجيات الرياض, صبابات قهوة, مباشرين قهوة, أرقام قهوجيين, رقم قهوجي بالرياض, مضيف قهوة بالرياض, أفضل قهوجي بالرياض, قهوجيين بالرياض, قهوجي في الرياض',
  authors: [{ name: 'قهوجيي وصبابين الرياض' }],
  creator: 'قهوجيي وصبابين الرياض',
  publisher: 'قهوجيي وصبابين الرياض',
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: 'https://qahwaji-arriyadh.com',
  },
  openGraph: {
    title: 'قهوجيي وصبابين الرياض | قهوجي وصباب بالرياض',
    description: 'أفضل قهوجي بالرياض - قهوجيين وصبابين، قهوجيات وصبابات، مباشرين قهوة لجميع المناسبات.',
    url: 'https://qahwaji-arriyadh.com',
    siteName: 'قهوجيي وصبابين الرياض',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/1.webp',
        width: 1200,
        height: 630,
        alt: 'قهوجيي وصبابين الرياض - ضيافة احترافية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'قهوجيي وصبابين الرياض | قهوجي وصباب بالرياض',
    description: 'قهوجيين وصبابين، قهوجيات وصبابات، مباشرين قهوة بالرياض',
    images: ['/images/1.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#101d22',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://qahwaji-arriyadh.com/#business",
        "name": "قهوجيي وصبابين الرياض",
        "alternateName": "قهوجي وصباب الرياض",
        "description": "قهوجيين وصبابين الرياض، قهوجيات وصبابات، مباشرين قهوة، صبابين قهوة بالرياض. خدمات ضيافة عربية احترافية لجميع المناسبات.",
        "url": "https://qahwaji-arriyadh.com",
        "telephone": "+966 50 352 1344",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "الرياض",
          "addressRegion": "الرياض",
          "addressCountry": "SA"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "areaServed": {
          "@type": "City",
          "name": "الرياض"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://qahwaji-arriyadh.com/#website",
        "url": "https://qahwaji-arriyadh.com",
        "name": "قهوجيي وصبابين الرياض",
        "description": "قهوجيين وصبابين الرياض، قهوجيات وصبابات، مباشرين قهوة بالرياض",
        "inLanguage": "ar-SA"
      }
    ]
  };

  return (
    <html lang="ar" dir="rtl" className="dark">
      <head>
        <meta name="google-site-verification" content="IN-E3hA9YTcn8ce85utStRduFYpJXEaJA7zb0GLaECM" />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Critical fonts with display=swap for better LCP */}
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">
        <main id="main-content" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
