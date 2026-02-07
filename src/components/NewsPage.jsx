import { Link } from 'react-router-dom'
import Footer from './Footer'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

import image1 from '../assets/news/image1.png'
import image2 from '../assets/news/image2.png'
import image3 from '../assets/news/image3.png'
import image4 from '../assets/news/image4.png'
import image5 from '../assets/news/image5.png'
import image6 from '../assets/news/image6.png'

const imageMap = { image1, image2, image3, image4, image5, image6 }

function formatDate(dateString) {
  const date = new Date(dateString + 'T00:00:00')
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
}

function NewsCard({ article, delay }) {
  const imgSrc = imageMap[article.image]

  return (
    <AnimateIn delay={delay}>
      <Link
        to={`/news/${article.slug}`}
        className="group block h-full rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
        style={{
          backgroundColor: colors.primary[950],
          border: `1px solid ${colors.primary[800]}`,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.accent[400] }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.primary[800] }}
      >
        {/* Card Image */}
        <div className="w-full aspect-[16/10] overflow-hidden">
          <img
            src={imgSrc}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card Body */}
        <div className="px-6 py-5">
          {/* Date + Category */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-white/40 text-xs font-medium tracking-wide">
              {formatDate(article.date)}
            </span>
            <span
              className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded"
              style={{
                color: colors.accent[400],
                backgroundColor: 'rgba(253, 203, 110, 0.1)',
              }}
            >
              {article.category}
            </span>
          </div>

          <h3 className="text-lg font-bold leading-snug mb-3 transition-colors duration-200 group-hover:opacity-80 text-white">
            {article.title}
          </h3>

          <p className="text-sm leading-relaxed text-white/50 mb-4 line-clamp-3">
            {article.excerpt}
          </p>

          <span
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
            style={{ color: colors.accent[400] }}
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    </AnimateIn>
  )
}

function NewsPage() {
  const articles = siteData.news.articles

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.primary[950] }}>
      {/* ===== Header Section ===== */}
      <section className="w-full pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <AnimateIn delay={0.1}>
            <p
              className="text-sm font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: colors.accent[400] }}
            >
              Latest Updates
            </p>
          </AnimateIn>
          <TextAnimate
            as="h1"
            animation="fadeIn"
            by="word"
            delay={0.15}
            once
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            {siteData.news.sectionHeading}
          </TextAnimate>
          <AnimateIn delay={0.2}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Stay up to date with the latest news, press releases, and campaign updates.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ===== Cards Grid ===== */}
      <section className="w-full pb-20 md:pb-28 lg:pb-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article, index) => (
              <NewsCard
                key={article.slug}
                article={article}
                delay={0.1 + index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default NewsPage
