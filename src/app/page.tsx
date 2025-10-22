"use client"

import { motion } from "motion/react"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { textChild, textContainer } from "@/components/animation/text-animation";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="w-full h-screen flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-7xl md:text-8xl font-semibold w-2/3 flex flex-col gap-4 leading-[1.2] z-10"
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.span
              variants={textChild}
              className="inline-block mr-[1rem]"
            >
              Crafting
            </motion.span>
            <motion.span
              variants={textChild}
              className="inline-block mr-[1rem] animate-gradient bg-gradient-text pb-2"
            >
              Digital
            </motion.span>
          </div>
          <motion.span variants={textChild} className="inline-block">
            Experiences
          </motion.span>
        </motion.h1>

        <motion.div className="mt-4" variants={textContainer} initial="hidden" animate="visible">
          <motion.p
            className="relative z-10 mx-auto max-w-xl text-center text-neutral-800 dark:text-neutral-500"
            variants={textChild}
            initial="hidden"
            animate="visible"
          >
            Hover over the boxes above and click.To be used on backgrounds of hero
            sections OR Call to Action sections. I beg you don&apos;t use it
            everywhere.
          </motion.p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-800 px-10 py-3 text-lg font-medium text-white transition-colors hover:bg-neutral-900 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-neutral-100"
        >
          Click Me
        </motion.button>
      </div>
    </div>
  );
}
