import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { motion } from 'framer-motion'

const AiTools = () => {

    const navigate = useNavigate()
    const {user} = useUser()

  return (
    <motion.div className='px-4 sm:px-20 xl:px-32 my-24' data-aos="fade-up">
      <div className='text-center' data-aos="fade-up" data-aos-delay="100">
        <h2 className='text-slate-700 text-[42px] font-semibold'>Powerful AI Tools</h2>
        <p className='text-gray-500 max-w-lg mx-auto'>Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.</p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.2 }
          }
        }}
        className='flex flex-wrap mt-10 justify-center'
      >
        {AiToolsData.map((tool, index)=>(
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 transition-all duration-300 cursor-pointer'
              onClick={()=> user && navigate(tool.path)}
              data-aos="fade-up"
              data-aos-delay={150 + index * 100}
            >
                <tool.Icon className='w-12 h-12 p-3 text-white rounded-xl' style={{background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}}/>
                <h3 className='mt-6 mb-3 text-lg font-semibold'>{tool.title}</h3>
                <p className='text-gray-400 text-sm max-w-[95%]'>{tool.description}</p>
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default AiTools
