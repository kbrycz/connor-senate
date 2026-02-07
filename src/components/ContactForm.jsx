import { useState } from 'react'
import { colors } from '@/config/colors'

/**
 * Reusable Contact Form Component
 * Used in both the popup modal and the signup section.
 *
 * @param {boolean} props.compact - If true, uses a more compact 2-column layout
 * @param {string} props.buttonText - Text for the submit button
 * @param {function} props.onSubmit - Callback when form is submitted
 */
function ContactForm({ compact = false, buttonText = 'JOIN US', onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: ''
  })

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
    if (onSubmit) onSubmit(formData)
    setFormData({ firstName: '', lastName: '', email: '', phone: '', zipCode: '' })
  }

  const inputBaseClasses = 'w-full px-4 py-3 rounded-md border text-white focus:outline-none transition-all text-lg'

  const inputInlineStyle = { backgroundColor: colors.primary[900], borderColor: colors.primary[700] }

  const handleFocus = (e) => {
    e.target.style.borderColor = colors.accent[400]
    e.target.style.boxShadow = `0 0 0 3px ${colors.accent[400]}30`
  }

  const handleBlur = (e) => {
    e.target.style.borderColor = colors.primary[700]
    e.target.style.boxShadow = 'none'
  }

  const placeholderStyle = `input::placeholder { font-weight: 600; color: rgba(255, 255, 255, 0.4); }`

  if (compact) {
    return (
      <form className="space-y-3" onSubmit={handleSubmit}>
        <style>{placeholderStyle}</style>
        <div className="grid grid-cols-2 gap-3">
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className={inputBaseClasses} style={inputInlineStyle} onFocus={handleFocus} onBlur={handleBlur} required />
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className={inputBaseClasses} style={inputInlineStyle} onFocus={handleFocus} onBlur={handleBlur} required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className={inputBaseClasses} style={inputInlineStyle} onFocus={handleFocus} onBlur={handleBlur} required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" maxLength="14" pattern="\(\d{3}\) \d{3}-\d{4}" className={inputBaseClasses} style={inputInlineStyle} onFocus={handleFocus} onBlur={handleBlur} required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="ZIP Code" pattern="[0-9]{5}" maxLength="5" className={inputBaseClasses} style={inputInlineStyle} onFocus={handleFocus} onBlur={handleBlur} required />
          <button type="submit" className="w-full px-4 py-3 rounded-md bg-accent-400 hover:bg-accent-500 text-primary-950 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-300 shadow-lg text-base uppercase tracking-wide">
            {buttonText}
          </button>
        </div>
      </form>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <style>{placeholderStyle}</style>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className={inputBaseClasses} style={inputInlineStyle} onFocus={handleFocus} onBlur={handleBlur} required />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className={inputBaseClasses} style={inputInlineStyle} onFocus={handleFocus} onBlur={handleBlur} required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className={inputBaseClasses} style={inputInlineStyle} onFocus={handleFocus} onBlur={handleBlur} required />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" maxLength="14" pattern="\(\d{3}\) \d{3}-\d{4}" className={inputBaseClasses} style={inputInlineStyle} onFocus={handleFocus} onBlur={handleBlur} required />
      <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="ZIP Code" pattern="[0-9]{5}" maxLength="5" className={inputBaseClasses} style={inputInlineStyle} onFocus={handleFocus} onBlur={handleBlur} required />
      <button type="submit" className="w-full px-4 py-3 rounded-md bg-accent-400 hover:bg-accent-500 text-primary-950 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-300 shadow-lg text-base uppercase tracking-wide">
        {buttonText}
      </button>
    </form>
  )
}

export default ContactForm
