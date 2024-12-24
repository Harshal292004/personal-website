import React, { useState } from 'react'
import {myProjects} from '../constants/index'
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader'
import { AsusLap } from './AsusLap';
import { OrbitControls } from '@react-three/drei';
const Projects = () => {
    const projectCount= myProjects.length;
    const[selectedProjectIndex, setSelectedProjectIndex]=useState(0)
    const currentProject=myProjects[selectedProjectIndex]
    const handleNavigation=(direction)=>{
        setSelectedProjectIndex((prevIndex)=>{
            if(direction==='previous'){
                return prevIndex===0? projectCount-1 : prevIndex-1
            }else{
                return prevIndex===projectCount -1 ? 0 : prevIndex +1 
            }
        })
    }
  return (
    <section className='c-space my-20'>
        <p className='head-text'>My Projects</p>
        
        {/*Complete projects grid*/}
        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
            {/*Each project*/}
            <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                
                {/*Current project spotlight*/}
                <div className='absolute top-0 right-0 '>
                    <img src={currentProject} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />
                </div>

                {/*Peoject logos*/}
                <div className='p-3 backdrop-filter  background-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                    <img src={currentProject.logo} alt="logo"  className='w-10 h-10 shadow-sm'/>
                </div>

                {/*Project description*/}
                <div className='flex flex-col gap-5 text-white-600 my-5'>
                    <p className='animatedText'>{currentProject.desc}</p>
                    <p className='animatedText'>{currentProject.subdesc}</p>
                </div>


                {/*Project stack and  live site*/}
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <div className='flex items-center gap-3'>
                        {currentProject.tags.map(
                            (tag,index)=>{
                                <div
                                className='tech-logo'
                                key={index}
                                >
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            }
                        )}
                    </div>
                    <a className='flex items-center gap-2 cursor-pointer text-white-600' href={currentProject.href} target='_blank' rel="noreferrer">                
                        <p>Check Live Site</p>
                        <img src="/assets/arrow-up.png" className='w-3 h-3' alt="arrow" />
                    </a>
                </div>

                {/*Crousal control*/}
                <div className='flex justify-between items-center mt-7'>
                    <button className='arrow-btn' onClick={()=>handleNavigation('previous')}>
                        <img src="/assets/left-arrow.png" alt="left-answer" className='w-4 h-4' />
                    </button>
                    <button className='arrow-btn' onClick={()=>handleNavigation('next')}>
                        <img src="/assets/right-arrow.png" alt="right-answer" className='w-4 h-4' />
                    </button>
                </div>
            </div>

            {/*3-D display of projects*/}
            <div className='border border-black -300 bg-black-200 rounded-lg h-96 md:h-full'>
                <Canvas>
                    <ambientLight intensity={Math.PI} />
                    <directionalLight position={[10,10,5]}></directionalLight>
                    <Center>
                        <Suspense fallback={<CanvasLoader></CanvasLoader>} >
                        <group scale={2} position={[0,-1,-6]} rotation={[0,-0.1,0]}>
                            <AsusLap texture={currentProject.texture}/>
                        </group>
                        </Suspense>    
                    </Center>
                    <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}></OrbitControls>
                </Canvas>
            </div>




        </div>
    </section>
    )
}

export default Projects