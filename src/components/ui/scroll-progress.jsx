import { motion, useScroll, useSpring } from "motion/react"
import { cn } from "@/lib/utils"
import { colors } from "@/config/colors"

function ScrollProgress({ className }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className={cn(
        "fixed left-0 right-0 top-0 z-50 h-[3px] origin-left",
        className
      )}
      style={{
        scaleX,
        backgroundColor: colors.accent[400],
      }}
    />
  )
}

export { ScrollProgress }
