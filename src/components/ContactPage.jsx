import { useState } from 'react'
import Footer from './Footer'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '')
    const limitedNumber = phoneNumber.slice(0, 10)
    if (limitedNumber.length === 0) return ''
    if (limitedNumber.length <= 3) return `(${limitedNumber}`
    if (limitedNumber.length <= 6) return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3)}`
    return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3, 6)}-${limitedNumber.slice(6)}`
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, [name]: formatPhoneNumber(value) }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.primary[950] }}>
      {/* ===== SECTION 1: Header ===== */}
      <section className="w-full pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <AnimateIn delay={0.1}>
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: colors.accent[400] }}
              >
                Get In Touch
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
              We'd love to hear from you.
            </TextAnimate>
            <AnimateIn delay={0.3}>
              <p className="text-white/70 text-lg leading-relaxed">
                Whether you have a question, want to get involved, or just want to say hello — drop us a message and we'll get back to you as soon as possible.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Contact Form ===== */}
      <section className="w-full pb-20 md:pb-28 lg:pb-32 pt-6 md:pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <AnimateIn delay={0.1}>
                <div
                  className="text-center py-16 px-8 rounded-xl"
                  style={{ backgroundColor: colors.primary[900] }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: colors.accent[400] }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.primary[950] }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Message Sent!
                  </h2>
                  <p className="text-white/70 text-lg mb-8">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-bold px-8 py-3 transition-all duration-200 uppercase tracking-[0.15em] text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                    style={{ backgroundColor: colors.accent[400], color: colors.primary[950] }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.accent[500] }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = colors.accent[400] }}
                  >
                    Send Another Message
                  </button>
                </div>
              </AnimateIn>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <style>{`
                  .contact-input::placeholder {
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.4);
                  }
                `}</style>

                {/* First Name / Last Name - Two Column */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <AnimateIn delay={0.2}>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="contact-input w-full px-5 py-4 text-white font-semibold border focus:outline-none transition-all text-lg rounded-md"
                      style={{ backgroundColor: colors.primary[900], borderColor: colors.primary[700], boxShadow: 'none' }}
                      onFocus={(e) => { e.target.style.borderColor = colors.accent[400]; e.target.style.boxShadow = `0 0 0 3px ${colors.accent[400]}30` }}
                      onBlur={(e) => { e.target.style.borderColor = colors.primary[700]; e.target.style.boxShadow = 'none' }}
                      required
                    />
                  </AnimateIn>
                  <AnimateIn delay={0.25}>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="contact-input w-full px-5 py-4 text-white font-semibold border focus:outline-none transition-all text-lg rounded-md"
                      style={{ backgroundColor: colors.primary[900], borderColor: colors.primary[700], boxShadow: 'none' }}
                      onFocus={(e) => { e.target.style.borderColor = colors.accent[400]; e.target.style.boxShadow = `0 0 0 3px ${colors.accent[400]}30` }}
                      onBlur={(e) => { e.target.style.borderColor = colors.primary[700]; e.target.style.boxShadow = 'none' }}
                      required
                    />
                  </AnimateIn>
                </div>

                {/* Email */}
                <AnimateIn delay={0.3}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="contact-input w-full px-5 py-4 text-white font-semibold border focus:outline-none transition-all text-lg rounded-md"
                    style={{ backgroundColor: colors.primary[900], borderColor: colors.primary[700], boxShadow: 'none' }}
                    onFocus={(e) => { e.target.style.borderColor = colors.accent[400]; e.target.style.boxShadow = `0 0 0 3px ${colors.accent[400]}30` }}
                    onBlur={(e) => { e.target.style.borderColor = colors.primary[700]; e.target.style.boxShadow = 'none' }}
                    required
                  />
                </AnimateIn>

                {/* Phone */}
                <AnimateIn delay={0.35}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    maxLength="14"
                    pattern="\(\d{3}\) \d{3}-\d{4}"
                    className="contact-input w-full px-5 py-4 text-white font-semibold border focus:outline-none transition-all text-lg rounded-md"
                    style={{ backgroundColor: colors.primary[900], borderColor: colors.primary[700], boxShadow: 'none' }}
                    onFocus={(e) => { e.target.style.borderColor = colors.accent[400]; e.target.style.boxShadow = `0 0 0 3px ${colors.accent[400]}30` }}
                    onBlur={(e) => { e.target.style.borderColor = colors.primary[700]; e.target.style.boxShadow = 'none' }}
                  />
                </AnimateIn>

                {/* Message */}
                <AnimateIn delay={0.4}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={6}
                    className="contact-input w-full px-5 py-4 text-white font-semibold border focus:outline-none transition-all text-lg rounded-md resize-none"
                    style={{ backgroundColor: colors.primary[900], borderColor: colors.primary[700], boxShadow: 'none' }}
                    onFocus={(e) => { e.target.style.borderColor = colors.accent[400]; e.target.style.boxShadow = `0 0 0 3px ${colors.accent[400]}30` }}
                    onBlur={(e) => { e.target.style.borderColor = colors.primary[700]; e.target.style.boxShadow = 'none' }}
                    required
                  />
                </AnimateIn>

                {/* Submit Button */}
                <AnimateIn delay={0.45}>
                  <button
                    type="submit"
                    className="w-full px-5 py-4 font-bold transition-all duration-200 uppercase tracking-[0.15em] text-base shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] rounded-md"
                    style={{ backgroundColor: colors.accent[400], color: colors.primary[950] }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.accent[500] }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = colors.accent[400] }}
                  >
                    Send Message
                  </button>
                </AnimateIn>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
