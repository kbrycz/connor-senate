import { Link } from 'react-router-dom'
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

        {/* Card body */}
        <div className="px-6 py-5">
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

          <h3
            className="text-lg font-bold leading-snug mb-3 transition-colors duration-200 group-hover:opacity-80 text-white"
          >
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

function NewsSection() {
  // Show only the first 3 articles on the home page
  const articles = siteData.news.articles.slice(0, 3)

  return (
    <section
      id="news"
      className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: '#071428' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <AnimateIn delay={0.1}>
          <p
            className="text-sm font-bold tracking-[0.2em] uppercase text-center mb-3"
            style={{ color: colors.accent[400] }}
          >
            Latest Updates
          </p>
        </AnimateIn>
        <TextAnimate
          as="h2"
          animation="fadeIn"
          by="word"
          delay={0.15}
          once
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 leading-tight tracking-tight text-white"
        >
          {siteData.news.sectionHeading}
        </TextAnimate>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <NewsCard
              key={article.slug}
              article={article}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>

        {/* View All News Button */}
        <AnimateIn delay={0.5}>
          <div className="text-center mt-12 md:mt-16">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-8 py-3.5 rounded transition-colors duration-200 shadow-lg text-sm tracking-[0.15em] uppercase"
            >
              View All News
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

export default NewsSection
