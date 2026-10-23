'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Brand } from './brand';

const links = [
  ['Como funciona', '#como-funciona'], ['Funcionalidades', '#funcionalidades'],
  ['O aplicativo', '#aplicativo'], ['Perguntas frequentes', '#perguntas'],
] as const;

export function Header() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  function closeMenu() { dialog.current?.close(); }
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => { if (desktop.matches) dialog.current?.close(); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => { document.body.style.overflow = previous; desktop.removeEventListener('change', closeOnDesktop); };
  }, [open]);

  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#inicio" className="brand-link" aria-label="Garago, início"><Brand /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">{links.map(([name, href]) => <a key={href} href={href}>{name}</a>)}</nav>
        <a className="button button-small header-cta" href="#aplicativo">Conhecer o app</a>
        <button ref={trigger} className="menu-toggle" aria-label="Abrir menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { dialog.current?.showModal(); setOpen(true); }}><Menu aria-hidden="true" /></button>
      </div>
    </header>
    <dialog ref={dialog} id="mobile-navigation" className="mobile-menu" aria-label="Navegação" onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={(event) => { if (event.target === dialog.current) closeMenu(); }} onKeyDown={(event) => {
      if (event.key !== 'Tab') return;
      const controls = event.currentTarget.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>('a[href], button:not(:disabled)');
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }}>
      <div className="mobile-menu-top"><Brand /><button className="menu-toggle" aria-label="Fechar menu" onClick={closeMenu}><X aria-hidden="true" /></button></div>
      <nav aria-label="Navegação mobile">{links.map(([name, href]) => <a key={href} href={href} onClick={closeMenu}>{name}</a>)}</nav>
      <a className="button" href="#aplicativo" onClick={closeMenu}>Conhecer o aplicativo</a>
      <p className="small muted">Espaços próximos. Novas possibilidades.</p>
    </dialog>
  </>;
}
