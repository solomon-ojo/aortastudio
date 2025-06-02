"use client"

import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

export default function JoinUsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: false })

  useEffect(() => {
    if (isInView) {
      document.body.style.backgroundColor = '#fde047' // yellow-300
    } else {
      document.body.style.backgroundColor = '#000000' // black
    }

    return () => {
      document.body.style.backgroundColor = '#000000' // Reset to black when component unmounts
    }
  }, [isInView])

  return (
    <motion.section 
      ref={sectionRef}
      className="bg-yellow-900 py-16 min-h-screen flex items-center"
      initial={{ backgroundColor: "#000000" }}
      animate={{ backgroundColor: isInView ? "#fde047" : "#000000" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <span className="text-black text-5xl space-y-4 m-6 w-22">Join our passionate team, unleash your potential, and be part of something truly awesome</span>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side images */}
          <div className="lg:col-span-3 space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/650046853b3cb15970b1b68c_Itekako_Wrighting.gif"
                alt="Gif of a woman hand that writes in small notebook."
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden hidden lg:block">
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/6539261bf0aa229f2e876da3_Mouse%20and%20keyboard.gif"
                alt="Gif of woman hand typing and moving mouse looping"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center content */}
          <div className="lg:col-span-6 text-center bg-white/10 backdrop-blur-md border border-solid border-white/20 rounded-2xl width-full p-8 space-y-6 shadow-lg">
            {/* Main image */}
            <div className="relative mb-8">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mx-auto max-w-md">
                <img
                  src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/6500465c40b421cbf9fc0c73_Itekako_Call.gif"
                  alt="Gif of a man with thick black framed glasses pointing his index finger to camera"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-6">
              <p className="text-black text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Our dynamic work environment fosters creativity, empowers you to make an impact, and offers endless
                learning opportunities. Together, let's shape the future of technology and create extraordinary
                solutions that inspire.
              </p>

              <motion.a
                href="/contact"
                className="inline-flex items-center bg-black text-yellow-300 px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">JOIN US</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Right side images */}
          <div className="lg:col-span-3 space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/650046a61a2cfcc2880362ba_Itekako_Developer-2.gif"
                alt="Gif of a man working on a lap top."
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden hidden lg:block">
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/6539261bf0aa229f2e876da3_Mouse%20and%20keyboard.gif"
                alt="Gif of woman hand typing and moving mouse looping"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}