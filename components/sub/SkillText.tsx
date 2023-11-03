"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { TfiAgenda } from "react-icons/tfi";

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[40px] text-white font-medium mt-[10px] text-center mb-[5px]'
        >
            Immer offen und bereit für neue Technologien
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className=' text-[25px] text-gray-200 mb-10 mt-[10px] text-center '
        >
          Bisher habe ich gearbeitet mit:  
        </motion.div>
    </div>
  )
}

export default SkillText