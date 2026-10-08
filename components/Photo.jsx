import Image from 'next/image';
import { IMG } from '@/lib/data';

// Imagen de /public/img con sus dimensiones reales.
export default function Photo({ name, alt, priority = false, style, sizes }) {
  const [width, height] = IMG[name];
  return (
    <Image
      src={`/img/${name}.jpg`}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      style={style}
    />
  );
}
