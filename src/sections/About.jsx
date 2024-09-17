import React from 'react'
import { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
const About = () => {
  const[hasCopied, setHasCopied] = useState(false)
  const handleCopy =() => {
    navigator.clipboard.writeText('melodyang13@gmail.com')
    setHasCopied(true);
    setTimeout(()=>{
      setHasCopied(false)}, 2000
    )
  }
  return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 gtidl-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'/>
                </div>
                <div>
                  <p className='grid-headtext'> Hi, I'm Melody</p>
                  <p className='grid-subtext'>with 3 years of experience, I have honed my skills in UI/UX Design and FrontEnd Development</p>
                </div>
            </div>
          
          <div className='col-span-1 xl: row-span-3'>
              <div className="grid-container">
                  <img src="/assets/grid2.png" alt='grid-2' className='w-full sm:w-[276px] h-fit object-contain'/>
                  <div>
                    <p className='grid-headtext'> Tech Stack</p>
                    <p className='grid-subtext'> I  specialize in Javascript/ React with a focus on React ecosystems</p>
                  </div>
              </div>
          </div>
          <div className='col-span-1 xl:row-span-4'>
            <div className='grid-container'>
              <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                  <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  />
              </div>
              <div>
                <p className='grid-headtext'>I work remotly across most timezones</p>
                <p className='grid-subtext'>I'm based in Baguio City, Philippines, with remote work available</p>
                <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
              </div>
            </div>
          </div>
        <div className='col-span-1 xl:row-span-3'>
          <div className="grid-container">
              <img src="/assets/grid3.png" alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain'/>
              <div>
                <p className='grid-headtext'> My passion for Coding</p>
                <p className='grid-subtext'> I love solving problems and building things through code. coding isn't just my profession it is my passion</p>
              </div>
          </div>
        </div> 
        <div className='col-span-1 xl:row-span-2'>
          <div className='grid-container'>
              <img src="/assets/grid4.png" alt='grid-4' className='w-full sm:h-[276px] md:h-[126px] h-fit object-cover sm:object-top'/>
              <div className='space-y-2'>
                <p className='grid-subtext text-center'> Contact me</p>
                <div className='copy-container' onClick={handleCopy}>
                  <img src={hasCopied ? 'assets/tick.svg':'assets/copy.svg'} alt='copy' className='copy-icon'/>
                  <p className='lg:text-2xl md:text-xl front-medium text-gray_gradient text-white'>melodyang13@gmail.com</p>
                </div>
              </div>
          </div>
        </div>
       </div>
    </section>
  )
}

export default About