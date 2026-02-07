import { useParams, Link, Navigate } from 'react-router-dom'
import Footer from './Footer'
import AnimateIn from './ui/AnimateIn'
import { ScrollProgress } from '@/components/ui/scroll-progress'
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
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function NewsArticlePage() {
  const { slug } = useParams()
  const article = siteData.news.articles.find((a) => a.slug === slug)

  if (!article) {
    return <Navigate to="/news" replace />
  }

  const imgSrc = imageMap[article.image]

  return (
    <div className="min-h-screen">
      <ScrollProgress className="top-0" />

      {/* ===== Article Content ===== */}
      <section
        className="w-full pt-8 pb-20 md:pt-12 md:pb-28 lg:pt-16 lg:pb-32 px-6 md:px-12 lg:px-16"
        style={{ backgroundColor: colors.primary[950] }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <AnimateIn delay={0.05}>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold mb-8 transition-colors duration-200 hover:opacity-80"
              style={{ color: colors.accent[400] }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to News
            </Link>
          </AnimateIn>

          {/* Category + Date */}
          <AnimateIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded"
                style={{
                  color: colors.accent[400],
                  backgroundColor: 'rgba(253, 203, 110, 0.1)',
                }}
              >
                {article.category}
              </span>
              <span className="text-white/40 text-sm font-medium">
                {formatDate(article.date)}
              </span>
            </div>
          </AnimateIn>

          {/* Title */}
          <AnimateIn delay={0.15}>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-8 lg:mb-10">
              {article.title}
            </h1>
          </AnimateIn>

          {/* Hero Image */}
          <AnimateIn delay={0.2}>
            <div
              className="w-full rounded-xl overflow-hidden mb-10 lg:mb-12 shadow-2xl"
              style={{ border: `3px solid ${colors.accent[400]}20` }}
            >
              <img
                src={imgSrc}
                alt={article.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </AnimateIn>

          {/* Article Body */}
          <div className="space-y-6">
            {article.body.map((paragraph, index) => (
              <AnimateIn key={index} delay={0.25 + index * 0.05}>
                <p className="text-white/75 text-lg leading-relaxed">
                  {paragraph}
                </p>
              </AnimateIn>
            ))}
          </div>

          {/* Divider */}
          <AnimateIn delay={0.4}>
            <div
              className="my-12 lg:my-16 h-px w-full"
              style={{ backgroundColor: colors.primary[800] }}
            />
          </AnimateIn>

          {/* Bottom CTA */}
          <AnimateIn delay={0.45}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:opacity-80"
                style={{ color: colors.accent[400] }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                All Articles
              </Link>
              <a
                href={siteData.campaign.donateUrl}
                className="inline-block bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-8 py-3 rounded transition-colors duration-200 shadow-lg text-sm tracking-[0.15em] uppercase"
              >
                SUPPORT THE CAMPAIGN
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default NewsArticlePage
