/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera un sitio 100% estático en la carpeta /out (lo que sube Cloudflare Pages)
  output: 'export',
  // Cloudflare Pages sirve las imágenes tal cual; no hace falta el optimizador de Next
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
