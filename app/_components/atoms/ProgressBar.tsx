"use client"
import {motion, useScroll} from 'framer-motion'

export default function ProgressBar() {
    const {scrollYProgress} = useScroll()
  return (
    <motion.div className="fixed inset-0 h-2 bg-gradient-to-r from-pink to-yellow origin-[0%] z-50" style={{scaleX: scrollYProgress}}>

    </motion.div>
  )
}
