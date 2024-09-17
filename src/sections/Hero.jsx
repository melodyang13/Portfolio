import { PerspectiveCamera } from '@react-three/drei'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Ring from '../components/Ring'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 768 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-2w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Melody <span className="waving-hand">🖐️</span>
        </p>
        <p className="hero_tag text-gray_gradient">4th Year IT Student</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile ={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]} // Fixed rotation
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Ring position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>

      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
      <a href="#contact" className='w-fit'>
        <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
      </a>
      </div>
    </section>
  );
};

export default Hero;
