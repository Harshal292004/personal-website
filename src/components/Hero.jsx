import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from './CanvasLoader'
import { PerspectiveCamera } from '@react-three/drei'
import { HackerRoom } from './HackerRoom'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from './Target'
import { ReactLogo } from './ReactLogo'
import Cube from './Cube'
import Rings from './Ring'
import HeroCamera from './HeroCamera'
import Button from './Button'

const Hero = () => {
 

  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-4xl font-medium text-white text-center font-generalsans">
          Hi, I am Harshal <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building is what excites me</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* Leva controls */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} near={0.1} far={1000} />
            <HeroCamera>
            <HackerRoom
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0]}
              scale={sizes.deskScale}
            />
            </HeroCamera>
            <group className="z-50">
              <Target position={sizes.targetPosition} scale={1.5} />
            </group>
            <ReactLogo
              position={sizes.reactLogoPosition}
              scale={0.6}
            />
            <Cube position={sizes.cubePosition}/>
            <Rings position={sizes.ringPosition}></Rings>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href="#contact" className='w-fit'>
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"></Button>
        </a>

      </div>
    </div>
  )
}

export default Hero
