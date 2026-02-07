import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import VideoSection from './components/VideoSection'
import NewsSection from './components/NewsSection'
import PricingSection from './components/PricingSection'
import AboutSection from './components/AboutSection'
import SignupSection from './components/SignupSection'
import Footer from './components/Footer'
import PopupModal from './components/PopupModal'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import AgendaPage from './components/AgendaPage'
import NewsPage from './components/NewsPage'
import NewsArticlePage from './components/NewsArticlePage'

function HomePage() {
  return (
    <>
      <PopupModal />
      <HeroSection />
      <VideoSection />
      <NewsSection />
      <PricingSection />
      <AboutSection />
      <SignupSection />
      <Footer />
    </>
  )
}

function Layout({ children }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      {!isHome && <Navbar variant="solid" />}
      {children}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
