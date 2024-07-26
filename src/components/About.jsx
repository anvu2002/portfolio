import React from 'react'
import Tilt from 'react-tilt';
import { motion } from  'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { Typewriter } from 'react-simple-typewriter';


const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt="My Expertise" className='w-16 h-16 object-contain' />   
        <div>
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
         
        
      </div>
        
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>I write Codes</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <Typewriter
              words={["I specialize in Backend Development, passionate about .NET Core Microservices, FastAPI, and Django frameworks."]}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            
      />


      <motion.p 
        variants={fadeIn("", "", 2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
         My expertise includes Python, GoLang, JavaScript, and NodeJS. I am enthusiastic about applying Machine Learning, particularly in building task queue distributed architectures to implement ML models.
      </motion.p>
      
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about")