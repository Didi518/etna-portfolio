import { BiLogoPostgresql } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiLaravel, SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion } from 'framer-motion'

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
})

const progressVariants = (duration) => ({
  initial: { x: -10 },
  animate: {
    x: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <div>
          <motion.div
            variants={iconsVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
        </div>
        <motion.div
          variants={iconsVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconsVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconsVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiLaravel className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconsVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconsVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="mt-24 mx-auto"
      >
        <motion.div
          variants={progressVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex justify-between"
        >
          <span className="text-base font-medium text-cyan-400">React</span>
          <span className="text-sm font-medium text-cyan-400">75%</span>
        </motion.div>
        <motion.div
          variants={progressVariants(2.5)}
          initial="initial"
          animate="animate"
          className="w-full bg-neutral-800 rounded-full h-2.5"
        >
          <div
            className="bg-cyan-400 h-2.5 rounded-full"
            style={{ width: '75%' }}
          />
        </motion.div>
        <motion.div
          variants={progressVariants(3)}
          initial="initial"
          animate="animate"
          className="flex justify-between mt-8"
        >
          <span className="text-base font-medium text-neutral-300">Nextjs</span>
          <span className="text-sm font-medium text-neutral-300">60%</span>
        </motion.div>
        <motion.div
          variants={progressVariants(3)}
          initial="initial"
          animate="animate"
          className="w-full bg-neutral-800 rounded-full h-2.5"
        >
          <div
            className="bg-neutral-300 h-2.5 rounded-full"
            style={{ width: '60%' }}
          />
        </motion.div>
        <motion.div
          variants={progressVariants(5)}
          initial="initial"
          animate="animate"
          className="flex justify-between mt-8"
        >
          <span className="text-base font-medium text-green-400">Mongodb</span>
          <span className="text-sm font-medium text-green-400">65%</span>
        </motion.div>
        <motion.div
          variants={progressVariants(5)}
          initial="initial"
          animate="animate"
          className="w-full bg-neutral-800 rounded-full h-2.5"
        >
          <div
            className="bg-green-400 h-2.5 rounded-full"
            style={{ width: '65%' }}
          />
        </motion.div>
        <motion.div
          variants={progressVariants(2)}
          initial="initial"
          animate="animate"
          className="flex justify-between mt-8"
        >
          <span className="text-base font-medium text-red-500">Laravel</span>
          <span className="text-sm font-medium text-red-500">50%</span>
        </motion.div>
        <motion.div
          variants={progressVariants(2)}
          initial="initial"
          animate="animate"
          className="w-full bg-neutral-800 rounded-full h-2.5"
        >
          <div
            className="bg-red-500 h-2.5 rounded-full"
            style={{ width: '50%' }}
          />
        </motion.div>
        <motion.div
          variants={progressVariants(6)}
          initial="initial"
          animate="animate"
          className="flex justify-between mt-8"
        >
          <span className="text-base font-medium text-green-500">Nodejs</span>
          <span className="text-sm font-medium text-green-500">70%</span>
        </motion.div>
        <motion.div
          variants={progressVariants(6)}
          initial="initial"
          animate="animate"
          className="w-full bg-neutral-800 rounded-full h-2.5"
        >
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: '70%' }}
          />
        </motion.div>
        <motion.div
          variants={progressVariants(4)}
          initial="initial"
          animate="animate"
          className="flex justify-between mt-8"
        >
          <span className="text-base font-medium text-sky-700">Postgresql</span>
          <span className="text-sm font-medium text-sky-700">55%</span>
        </motion.div>
        <motion.div
          variants={progressVariants(4)}
          initial="initial"
          animate="animate"
          className="w-full bg-neutral-800 rounded-full h-2.5"
        >
          <div
            className="bg-sky-700 h-2.5 rounded-full"
            style={{ width: '55%' }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
