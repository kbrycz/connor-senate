import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  },
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  },
  slideDown: {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  },
  slideLeft: {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  },
  slideRight: {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
      },
    },
  },
  blurInUp: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        y: { duration: 0.3 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.3 },
      },
    },
  },
  scaleUp: {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 300,
        },
      },
    },
  },
}

/**
 * AnimateIn - A wrapper component for animating non-text elements
 * @param {React.ReactNode} children - Content to animate
 * @param {string} animation - Animation type (fadeIn, slideUp, etc.)
 * @param {number} delay - Delay before animation starts (in seconds)
 * @param {number} duration - Duration of the animation (in seconds)
 * @param {boolean} once - Whether to animate only once
 * @param {boolean} startOnView - Whether to start animation when component enters viewport
 * @param {string} className - Additional CSS classes
 * @param {Object} variants - Custom motion variants
 */
function AnimateIn({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.3,
  once = true,
  startOnView = true,
  className = "",
  variants,
  ...props
}) {
  const animationVariant = variants || animationVariants[animation] || animationVariants.fadeIn

  // Add delay to the transition
  const finalVariants = {
    ...animationVariant,
    visible: {
      ...animationVariant.visible,
      transition: {
        ...animationVariant.visible.transition,
        delay,
        duration,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView={startOnView ? "visible" : undefined}
      animate={startOnView ? undefined : "visible"}
      variants={finalVariants}
      viewport={{ once }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimateIn
