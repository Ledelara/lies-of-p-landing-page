'use client'

import { useEffect, useState } from 'react'
import '../../styles/components/_header.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="header__nav">
        <ul className="header__menu">
          <li onClick={() => navigate.push('/')}>Home</li>
          <li onClick={() => navigate.push('https://lnkfi.re/LiesofP')}>Música</li>
          <li>
            <Image src="/images/lies-of-p-logo.webp" alt="logo" width={120} height={60} />
          </li>
          <li onClick={() => navigate.push('https://gear.liesofp.com/')}>Loja</li>
          <li onClick={() => navigate.push('https://store.steampowered.com/app/1627720/Lies_of_P/')}>Compre agora</li>
        </ul>
      </nav>
    </header>
  )
}
