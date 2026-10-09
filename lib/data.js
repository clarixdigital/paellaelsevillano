// ============================================================
//  Datos del negocio. Edita aquí textos, precios y horarios
//  sin tocar el diseño.
// ============================================================

export const SITE = {
  name: 'El Sevillano',
  tagline: 'Cocina Española',
  phone: '+52 55 1044 3733',
  phoneHref: 'tel:+525510443733',
  whatsappNumber: '525510443733',
  instagram: 'https://www.instagram.com/paella_sevillano/',
  address: ['C. Leona Vicario 511, Coaxustenco', '52172 Metepec, Estado de México'],
  mapsLink:
    'https://www.google.com/maps/place/C.+Leona+Vicario+511,+Coaxustenco,+52172+Metepec,+M%C3%A9x.',
  mapsEmbed:
    'https://www.google.com/maps?q=C.+Leona+Vicario+511,+Coaxustenco,+52172+Metepec,+M%C3%A9xico&output=embed',
  rating: '4.8',
  reviewCount: 74,
  priceRange: '$110 – $220 por persona',
};

export const wa = (text) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS = [
  { href: '#historia', label: 'Historia' },
  { href: '#menu', label: 'Menú' },
  { href: '#galeria', label: 'Galería' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#contacto', label: 'Contacto' },
];

export const SERVICES = [
  { title: 'Para llevar', text: 'Recoge tu paella recién hecha en Metepec.' },
  { title: 'A domicilio', text: 'Entrega en Metepec, Toluca y zona metropolitana.' },
  { title: 'Eventos', text: 'Paella en vivo para bodas, fiestas y reuniones.' },
];

export const MENU = [
  {
    name: 'Paella mixta',
    price: '$363',
    unit: '1 kilo',
    img: 'paella-mixta',
    alt: 'Paella mixta con camarón, mejillones y almejas',
    text: 'Cinta de lomo de cerdo, pollo, camarón jumbo 16/20 sin cabeza, almejas y mejillones sobre arroz al azafrán. Generosa para compartir.',
  },
  {
    name: 'Tortilla española',
    price: '$550',
    unit: '2.5 kilos',
    img: 'tortilla',
    alt: 'Tortilla española de patatas',
    text: 'La clásica tortilla de patatas: papa rehogada, cebolla y huevo, cuajada en su punto justo. Ideal para una mesa completa.',
  },
  {
    name: 'Croquetas de jamón serrano',
    price: '$82.50',
    unit: 'La favorita de la casa',
    img: 'croquetas',
    objectPosition: '50% 58%',
    alt: 'Croquetas de jamón serrano de El Sevillano',
    text: 'Cremosas por dentro, doradas por fuera y con auténtico jamón serrano. Las más recomendadas en nuestras reseñas.',
  },
];

// Dimensiones reales de cada imagen (evitan saltos de layout al cargar)
export const IMG = {
  'hero-chef': [1200, 909],
  'chefs-pareja': [763, 1020],
  'logo-chaqueta': [1200, 800],
  pan: [1080, 810],
  'paella-mixta': [1200, 664],
  tortilla: [1080, 810],
  croquetas: [680, 1020],
  'chef-mujer': [900, 600],
  'chef-paella-mariscos': [675, 900],
  'chef-sirviendo': [675, 900],
  'chef-cocinando': [675, 900],
  evento: [900, 878],
};

export const GALLERY = [
  { img: 'chef-paella-mariscos', alt: 'Chef terminando una paella de mariscos' },
  { img: 'paella-mixta', alt: 'Detalle de paella mixta con mariscos' },
  { img: 'evento', alt: 'Dos paellas grandes en un evento al aire libre' },
  { img: 'chef-sirviendo', alt: 'Chef sirviendo una paella grande' },
  { img: 'tortilla', alt: 'Tortilla española en plato azul' },
  { img: 'chef-cocinando', alt: 'Paella humeante en plena cocción' },
  { img: 'pan', alt: 'Pan español recién horneado' },
  { img: 'chef-mujer', alt: 'La chef presentando un plato de la casa' },
  { img: 'croquetas', alt: 'Croquetas de jamón serrano recién fritas' },
];

export const REVIEWS = [
  {
    text: 'Una de las mejores paellas que he probado, con los condimentos exactos, cocción excelente, porciones generosas y sobre todo un excelente servicio.',
    author: 'Gerardo Vázquez',
    meta: 'Entrega a domicilio',
  },
  {
    text: 'La paella es buenísima, no tiene nada que envidiar a las de calidad que se sirven en España. Excelente servicio y sabor. Repetiremos muy pronto.',
    author: 'Andrés Porcel García',
    meta: 'Local Guide · Google',
  },
  {
    text: 'La mejor paella que he probado. Voy hasta Metepec para traerla a CDMX porque no hay otra mejor. Javier es un gran anfitrión.',
    author: 'Araceli Pérez',
    meta: 'Opinión en Google',
  },
  {
    text: 'Toda la comida buenísima. Nos encantaron las croquetas y la paella. El trato que recibimos fue espectacular. ¡Repetiremos!',
    author: 'Javier Jiménez',
    meta: 'Almuerzo · para llevar',
  },
];

export const HOURS = [
  { label: 'En tienda · para llevar', days: 'Sábado y domingo', time: '11:00 – 18:00' },
  { label: 'A domicilio', days: 'Miércoles a domingo', time: '11:00 – 18:00' },
  { label: 'Pedidos en línea', days: 'Todos los días', time: '9:00 – 17:00' },
];
