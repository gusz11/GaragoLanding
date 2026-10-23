import Image from 'next/image';

export function Brand() {
  return <span className="brand"><Image src="/brand/garago.png" width={54} height={32} alt="" priority /><span>garago<span className="brand-dot">.</span></span></span>;
}
