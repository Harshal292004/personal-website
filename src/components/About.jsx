import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from './Button'
const About = () => {
    const[copied,setIsCopied]=useState(false)
    const handleCopy=()=>{
        navigator.clipboard.writeText(
            'malaniharshal95@gmail.com'
        )
        
        setIsCopied(true)
        
        setTimeout(()=>{
            setIsCopied(false)
        },2000)
    }
  return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5'>
            
            {/*image-about*/}
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Hi, I'm Harshal</p>
                        <p className='grid-subtext'>I am actually pretty good at this.</p>
                    </div>
                </div>    
            </div>

            {/*just a tech stack*/}
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-fit object-contain' />
                <div>
                    <p className='grid-headtext'>Tech Stack</p>
                    <p className='grid-headtext'>Mehh.........</p>
                </div>
                </div>
            </div>

            {/*just globe*/}
            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full flex justify-center items-center'>
                        <Globe
                        height={326}
                        width={326}
                        backgroundColor='rgba(0,0,0,0)'
                        showAtmosphere
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={
                            [
                                {
                                    lat:100,lng:100,
                                    text:"I'm here!",
                                    color:'white',
                                    size:20
                                }
                            ]
                        }
                       ></Globe>
                    </div>
                    <div>
                        <p className='grid-headtext'>
                            I work remotely in any timezones.
                        </p>
                        <p className='grid-subtext'>
                            I'm based in India,with remote work available.
                        </p>
                        <Button name="Contact Me" isBeam  containerClass="w-full mt-10"></Button>
                    </div>
                </div>
            </div>

            {/*coding isn't meant for you*/}
            <div className='xl:col-span-2  xl:row-span-3'>
                <div className='grid-container '>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain'/>
                    <div>
                        <p className='grid-headtext'>My mood for coding</p>
                        <p className='grid-subset'>I love breaking things through code</p>
                    </div>
                </div>
            </div>

            {/*Copy contact*/}
            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                    <div className='space-y-2'>
                    <p className='grid-subtext text-center'>Contact me</p>
                    <div className='copy-container' onClick={handleCopy}>
                        <img src={copied?'assets/tick.svg':'assets/copy.svg'} alt="copy" />
                        <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                            malaniharshal95@gmail.com
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
