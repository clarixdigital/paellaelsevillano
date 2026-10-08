# El Sevillano · Web estática (Next.js)

Landing page de **Paella "El Sevillano"** (Metepec, Estado de México) hecha con Next.js (App Router) y exportada como **sitio 100 % estático**, lista para **Cloudflare Pages** (plan gratuito).

## Estructura

```
app/            layout, página principal y estilos (globals.css)
components/     Nav (menú móvil), Photo (imágenes), RevealObserver (animaciones)
lib/data.js     ⭐ Todos los textos, precios, horarios, reseñas y enlaces
public/img/     Fotos del negocio
public/_headers Caché y cabeceras de seguridad para Cloudflare
```

> Para cambiar un precio, un horario o una reseña, edita solo `lib/data.js`.

## Probar en local

Requiere Node 20 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # genera la carpeta /out (el sitio estático)
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Primera versión de la web de El Sevillano"
git branch -M main
git remote add origin https://github.com/<TU_USUARIO>/<NOMBRE_REPO>.git
git push -u origin main
```

## Desplegar en Cloudflare Pages

1. Entra en el panel de Cloudflare → **Workers & Pages** → **Create application**.
2. Pestaña **Pages** → **Import an existing Git repository** → elige tu repositorio → **Begin setup**.
3. En **Build settings** configura:

| Opción | Valor |
| --- | --- |
| Framework preset | **Next.js (Static HTML Export)** |
| Production branch | `main` |
| Build command | `npx next build` |
| Build output directory | `out` |

4. Pulsa **Save and Deploy**. Obtendrás una URL `*.pages.dev`. Cada `git push` a `main` redespliega automáticamente.

Fuente: [Cloudflare Pages · Next.js static site](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)

### Si el build falla por la versión de Node

El proyecto incluye `.node-version` (22). Si Cloudflare no lo respeta, en **Settings → Variables and Secrets** añade `NODE_VERSION` = `22` y vuelve a desplegar.

### Dominio propio

En el proyecto de Pages → **Custom domains** → añade tu dominio (por ejemplo `elsevillano.com.mx`). Después, en **Settings → Variables**, define:

```
NEXT_PUBLIC_SITE_URL = https://tu-dominio.com
```

Esa variable se usa para las URLs de la vista previa al compartir en redes (Open Graph). Si no la defines, se usa una URL provisional.

## Pendientes recomendados

- Definir `NEXT_PUBLIC_SITE_URL` con el dominio final.
- Verificar el número de WhatsApp (`lib/data.js` → `SITE.whatsappNumber`).
- Sustituir el monograma "S" del menú por el logo real cuando tengas el PNG con fondo transparente.
