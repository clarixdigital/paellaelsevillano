import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://paella-el-sevillano.pages.dev';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'El Sevillano · Paella y cocina española en Metepec',
  description:
    'Paella El Sevillano: auténtica cocina española en Metepec, Estado de México. Paella mixta, tortilla española y croquetas de jamón serrano. Para llevar, a domicilio y eventos. 4.8★ en Google.',
  openGraph: {
    title: 'El Sevillano · Paella y cocina española en Metepec',
    description:
      'Paella auténtica hecha al momento. Para llevar, a domicilio y eventos en Metepec, Estado de México.',
    type: 'website',
    locale: 'es_MX',
    images: [{ url: '/img/hero-chef.jpg', width: 1200, height: 909, alt: 'Chef de El Sevillano con un plato de paella' }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  themeColor: '#16110D',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <head>
        {/* Marca que hay JavaScript para activar las animaciones de aparición */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=Mulish:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
