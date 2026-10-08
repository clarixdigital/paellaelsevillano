import Nav from '@/components/Nav';
import Photo from '@/components/Photo';
import RevealObserver from '@/components/RevealObserver';
import {
  SITE, SERVICES, MENU, GALLERY, REVIEWS, HOURS, wa,
} from '@/lib/data';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Paella "El Sevillano"',
  servesCuisine: 'Española',
  telephone: '+525510443733',
  priceRange: '$$',
  image: '/img/hero-chef.jpg',
  sameAs: [SITE.instagram],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C. Leona Vicario 511, Coaxustenco',
    addressLocality: 'Metepec',
    addressRegion: 'Estado de México',
    postalCode: '52172',
    addressCountry: 'MX',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '11:00',
      closes: '18:00',
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealObserver />
      <Nav />

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="wrap hero-grid">
          <div className="hero-copy reveal">
            <span className="flagrule"><i /><i /><i /></span>
            <h1>
              El Sevillano
              <span className="es">Cocina Española</span>
            </h1>
            <p className="lede">
              Paella de verdad, hecha al momento en Metepec. De Sevilla a tu mesa, con el sabor de España.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href={wa('Hola, me gustaría pedir paella de El Sevillano')} target="_blank" rel="noopener noreferrer">
                Pedir por WhatsApp
              </a>
              <a className="btn btn-ghost" href="#menu">Ver el menú</a>
            </div>
            <div className="rating">
              <span className="stars">★★★★★</span>
              <span><b>{SITE.rating}</b> · {SITE.reviewCount} opiniones en Google</span>
            </div>
          </div>
          <div className="hero-img reveal">
            <figure>
              <Photo name="hero-chef" alt="Chef de El Sevillano sosteniendo un plato de paella junto al logo" priority style={{ objectPosition: '50% 42%' }} />
            </figure>
            <div className="hero-badge">
              <b>1 kg</b>
              <small>de paella mixta recién hecha, lista para compartir</small>
            </div>
          </div>
        </div>
      </section>

      <div className="azulejo" aria-hidden="true" />

      {/* SERVICIOS */}
      <div className="strip">
        <div className="wrap strip-in">
          {SERVICES.map((s) => (
            <div className="reveal" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HISTORIA */}
      <section className="about" id="historia">
        <div className="wrap about-grid">
          <div className="reveal">
            <p className="eyebrow">Nuestra historia</p>
            <h2>De Sevilla a Metepec</h2>
            <p style={{ marginTop: 22 }}>
              El Sevillano nace de algo sencillo: el amor por la auténtica cocina española. Detrás de cada paella está Javier, anfitrión de corazón, junto a su pareja en la cocina, cuidando cada grano de arroz, cada punto de cocción y cada ingrediente.
            </p>
            <p>
              Trabajamos con <strong>camarón jumbo, almejas, mejillones, pollo y cinta de lomo</strong>, el azafrán justo y la paciencia de quien cocina como se hace en casa. Nada de atajos: paella, tortilla y croquetas hechas como mandan en España.
            </p>
            <blockquote className="pull">
              &ldquo;No tiene nada que envidiar a las paellas de calidad que se sirven en España.&rdquo;
            </blockquote>
            <a className="btn btn-ghost" href="#contacto">Visítanos en Metepec</a>
          </div>
          <div className="about-photos reveal">
            <figure className="tall"><Photo name="chefs-pareja" alt="Los chefs de El Sevillano con pan y tortilla española" /></figure>
            <figure className="wide"><Photo name="logo-chaqueta" alt="Logo de El Sevillano bordado en la chaquetilla del chef" /></figure>
            <figure className="wide"><Photo name="pan" alt="Pan español recién horneado" /></figure>
          </div>
        </div>
      </section>

      <div className="azulejo" aria-hidden="true" />

      {/* MENÚ */}
      <section className="menu" id="menu">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">La carta</p>
            <h2>Lo que cocinamos</h2>
            <p style={{ color: 'var(--cream-dim)', marginTop: 16 }}>
              Precios en pesos mexicanos. Pide con anticipación para asegurar tu paella del día.
            </p>
          </div>
          <div className="menu-grid">
            {MENU.map((d) => (
              <article className="dish reveal" key={d.name}>
                <div className="ph">
                  <Photo name={d.img} alt={d.alt} style={d.objectPosition ? { objectPosition: d.objectPosition } : undefined} />
                </div>
                <div className="dish-body">
                  <div className="topline"><h3>{d.name}</h3><span className="price">{d.price}</span></div>
                  <span className="unit">{d.unit}</span>
                  <p>{d.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="menu-note reveal">
            ¿Antojo de algo más? También preparamos pan español, clericot y fabada por encargo.{' '}
            <a href={wa('Hola, quiero preguntar por el menú de El Sevillano')} target="_blank" rel="noopener noreferrer">
              Pregúntanos por WhatsApp →
            </a>
          </p>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">En vivo</p>
            <h2>Paella recién hecha</h2>
          </div>
          <div className="gallery">
            {GALLERY.map((g) => (
              <figure className="reveal" key={g.img}>
                <Photo name={g.img} alt={g.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div className="azulejo" aria-hidden="true" />

      {/* OPINIONES */}
      <section className="reviews" id="opiniones">
        <div className="wrap">
          <p className="eyebrow reveal">Lo que dicen</p>
          <div className="topbar reveal">
            <span className="score">{SITE.rating}</span>
            <div className="score-meta">
              <span className="stars">★★★★★</span>
              <small>Calificación promedio en Google · {SITE.reviewCount} opiniones</small>
            </div>
          </div>
          <div className="rev-grid">
            {REVIEWS.map((r) => (
              <article className="rev reveal" key={r.author}>
                <div className="stars">★★★★★</div>
                <blockquote>&ldquo;{r.text}&rdquo;</blockquote>
                <cite>{r.author}<span>{r.meta}</span></cite>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="contact" id="contacto">
        <div className="wrap contact-grid">
          <div className="reveal">
            <p className="eyebrow">Visítanos o pide</p>
            <h2>Estamos en Metepec</h2>
            <div style={{ marginTop: 28 }}>
              <div className="info-row">
                <span className="ic">📍</span>
                <div>
                  <b>Dirección</b>
                  <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer">
                    {SITE.address[0]}<br />{SITE.address[1]}
                  </a>
                </div>
              </div>
              <div className="info-row">
                <span className="ic">🕑</span>
                <div style={{ flex: 1 }}>
                  <b>Horario</b>
                  <div className="hours">
                    {HOURS.map((h) => (
                      <HoursRow key={h.label} {...h} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="info-row">
                <span className="ic">📞</span>
                <div><b>Teléfono</b><a href={SITE.phoneHref}>{SITE.phone}</a></div>
              </div>
              <div className="info-row">
                <span className="ic">💲</span>
                <div><b>Rango de precio</b><p>{SITE.priceRange}</p></div>
              </div>
            </div>
            <div className="actions">
              <a className="btn btn-primary" href={wa('Hola, me gustaría hacer un pedido')} target="_blank" rel="noopener noreferrer">
                Pedir por WhatsApp
              </a>
              <a className="btn btn-ghost" href={SITE.phoneHref}>Llamar</a>
            </div>
          </div>
          <div className="map reveal">
            <iframe
              title="Ubicación de El Sevillano en Metepec"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <a className="brand" href="#inicio">
            <span className="mark"><span>S</span></span>
            <span className="wordmark"><b>EL SEVILLANO</b><small>{SITE.tagline}</small></span>
          </a>
          <div className="social">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.2c-1.6 0-3.1-.44-4.38-1.21l-.31-.18-2.91.76.78-2.84-.2-.3a8.17 8.17 0 0 1-1.28-4.43c0-4.53 3.68-8.21 8.3-8.21 4.42 0 8.01 3.68 8.01 8.21 0 4.53-3.68 8.2-8.01 8.2Zm4.52-6.14c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.78.97-.15.16-.29.18-.54.06-1.47-.73-2.43-1.3-3.4-2.95-.26-.44.26-.41.73-1.36.08-.17.04-.3-.04-.42-.08-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.68.31-.23.25-.9.88-.9 2.14 0 1.26.92 2.48 1.05 2.65.12.17 1.72 2.63 4.17 3.58 2.07.8 2.49.65 2.94.6.45-.04 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.25-.17-.5-.3Z" />
              </svg>
            </a>
            <a href={SITE.phoneHref} aria-label="Teléfono">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.5 2.5.8 3.9.9.6 0 1 .5 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.1c.6 0 1 .4 1 1 .1 1.4.4 2.7.9 3.9.1.4.1.8-.2 1l-2.2 2.2Z" />
              </svg>
            </a>
          </div>
          <small>
            {SITE.address[0]} · {SITE.address[1].replace('Estado de México', 'Méx.')} · {SITE.phone}<br />
            © {new Date().getFullYear()} Paella El Sevillano · Auténtica cocina española en México
          </small>
        </div>
      </footer>
    </>
  );
}

function HoursRow({ label, days, time }) {
  return (
    <>
      <div className="day"><b>{label}</b><small>{days}</small></div>
      <div className="hrs">{time}</div>
    </>
  );
}
