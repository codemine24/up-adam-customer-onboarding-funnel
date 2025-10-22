"use client";

import {
  textChild,
  textContainer,
} from "@/components/animation/text-animation";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative flex w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="w-full h-[calc(100vh-135px)] flex flex-col items-center justify-center text-center mt-10">
        <motion.h1
          className="text-7xl md:text-8xl font-semibold w-2/3 flex flex-col gap-2 leading-[1.2] z-10"
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={textChild}>
            <span className="inline-block mr-[1rem]">Customer</span>
            <span className="inline-block ml-[1rem] animate-gradient bg-gradient-text pb-2">
              Onboarding
            </span>
          </motion.div>
          <motion.span variants={textChild} className="inline-block">
            Made Easy
          </motion.span>
        </motion.h1>

        <motion.div
          className="mt-4"
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="relative z-10 mx-auto max-w-xl text-center text-neutral-800 dark:text-neutral-500"
            variants={textChild}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Adam Customer Onboarding is a multi-step form that helps you to
            onboarding your customers. Build your own onboarding form in
            minutes.
          </motion.p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-800 px-10 py-3 text-lg font-medium text-white transition-colors hover:bg-neutral-900 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-neutral-100 cursor-pointer"
          onClick={() => router.push("/onboarding")}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
}
