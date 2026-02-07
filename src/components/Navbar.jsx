import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImage from '../assets/logo-white.png'
import AnimateIn from './ui/AnimateIn'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function Navbar({ variant = 'solid' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navLinks = siteData.navigation?.links || []

  const isTransparent = variant === 'transparent'
  const bgStyle = isTransparent
    ? {}
    : { backgroundColor: colors.primary[950] }

  const renderLink = (link, className, onClick) => {
    const isRoute = link.href.startsWith('/')
    if (isRoute) {
      return (
        <Link to={link.href} className={className} onClick={onClick}>
          {link.label}
        </Link>
      )
    }
    // For hash links on inner pages, prepend "/" so they navigate home first
    const href = location.pathname === '/' ? link.href : `/${link.href}`
    return (
      <a href={href} className={className} onClick={onClick}>
        {link.label}
      </a>
    )
  }

  return (
    <>
      {/* ===== MOBILE & TABLET NAVBAR ===== */}
      <nav
        className="lg:hidden relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 pb-3"
        style={bgStyle}
      >
        <AnimateIn delay={0}>
          <Link to="/" className="block">
            <img src={logoImage} alt="Campaign Logo" className="h-20 sm:h-24 md:h-28 w-auto" />
          </Link>
        </AnimateIn>

        <div className="flex items-center gap-3">
          <AnimateIn delay={0}>
            <a
              href={siteData.campaign.donateUrl}
              className="bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-5 py-2 rounded transition-colors duration-200 shadow-lg text-sm tracking-wider"
            >
              DONATE
            </a>
          </AnimateIn>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-1.5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden relative z-20 backdrop-blur-md border-t border-white/10" style={{ backgroundColor: `${colors.primary[950]}f2` }}>
          <div className="flex flex-col px-6 py-4 space-y-1">
            {navLinks.map((link) =>
              <div key={link.label}>
                {renderLink(
                  link,
                  'text-white text-sm font-semibold tracking-[0.15em] uppercase hover:text-accent-400 transition-colors py-2.5 border-b border-white/5 last:border-0 block',
                  () => setMobileMenuOpen(false)
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== DESKTOP NAVBAR ===== */}
      <nav className="hidden lg:block relative z-20 w-full" style={bgStyle}>
        <div className="flex items-center justify-between px-16 xl:px-20 py-5">
          {/* Logo */}
          <AnimateIn delay={0}>
            <Link to="/" className="block">
              <img src={logoImage} alt="Campaign Logo" className="h-20 xl:h-24 w-auto" />
            </Link>
          </AnimateIn>

          {/* Desktop Nav Links */}
          <div className="flex items-center gap-5 xl:gap-7">
            {navLinks.map((link, i) => (
              <AnimateIn key={link.label} delay={0.05 * (i + 1)}>
                {renderLink(
                  link,
                  'text-white text-xs xl:text-sm font-semibold tracking-[0.15em] uppercase hover:text-accent-400 transition-colors duration-200'
                )}
              </AnimateIn>
            ))}
            <AnimateIn delay={0.05 * (navLinks.length + 1)}>
              <a
                href={siteData.campaign.donateUrl}
                className="bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-7 xl:px-8 py-2.5 xl:py-3 rounded transition-colors duration-200 shadow-lg text-xs xl:text-sm tracking-[0.15em] uppercase ml-2"
              >
                DONATE
              </a>
            </AnimateIn>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
