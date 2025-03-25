'use client';

import Image from "next/image";
import '../../styles/components/_header.scss'
import { useRouter } from "next/navigation";

export default function Header() {

  const navigate = useRouter();
  
  return (
    <header className="header">
      <ul className="header__menu">
        <li className="header__menu__item">
          <a className="header_menu_text" onClick={() => navigate.push('/')}>Home</a>
        </li>
        <li className="header__menu__item">
          <a className="header_menu_text" onClick={() => navigate.push('https://lnkfi.re/LiesofP')}>Música</a>
        </li>
        <li className="header__menu__image">
          <Image src="/images/lies-of-p-logo.webp" alt="logo" width={100} height={100} />
        </li>
        <li className="header__menu__item">
          <a className="header_menu_text" onClick={() => navigate.push('https://gear.liesofp.com/')}>Loja</a>
        </li>
        <li className="header__menu__item">
          <a className="header_menu_text" onClick={() => navigate.push('https://store.steampowered.com/app/1627720/Lies_of_P/')}>Compre agora</a>
        </li>
      </ul>
    </header>
  )
}