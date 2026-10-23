import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Garago. Mais possibilidades para cada espaço. Vagas e armários no seu condomínio.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const [font, logo] = await Promise.all([
    readFile(join(process.cwd(), 'src/app/fonts/Poppins_600SemiBold.ttf')),
    readFile(join(process.cwd(), 'public/brand/garago.png')),
  ]);
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '65px 80px', background: '#0b1220', color: '#f4f8fc', fontFamily: 'Poppins' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 40 }}>
        {/* ImageResponse renders an embedded asset; next/image is not supported here. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logo.toString('base64')}`} width={85} height={48} alt="" />garago.
      </div>
      <div style={{ display: 'flex', marginTop: 60, fontSize: 69, lineHeight: 1.15, letterSpacing: -3, maxWidth: 1000 }}>Mais possibilidades para cada espaço.</div>
      <div style={{ display: 'flex', marginTop: 30, fontSize: 24, color: '#c4f4ff' }}>Vagas e armários no seu condomínio.</div>
      <div style={{ display: 'flex', marginTop: 'auto', height: 5, width: '100%', background: 'linear-gradient(90deg, #16759b, #216ec8, #6455df)' }} />
    </div>,
    { ...size, fonts: [{ name: 'Poppins', data: font, weight: 600, style: 'normal' }] },
  );
}
