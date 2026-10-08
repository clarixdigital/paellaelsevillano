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
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WA</a>
            <a href={SITE.phoneHref} aria-label="Teléfono">Tel</a>
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
