import React from 'react'
import ProjectItem from './ProjectItem'
import rasterizeImg from '../assets/Bunny.png'
import meditationImg from '../assets/Meditation.png'
import gptImg from '../assets/gpt.png'

const Project = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Welcome to my Projects section! Each project showcase my skills, and highlights my ability to solve real-world problems with innovative solutions..
            </p>
            <div className='grid sn:grid-cols-3 gap-12'>

                <a href="https://github.com/Arsh7707/AI-Summarizer" target="_blank">
                    <ProjectItem img={gptImg} title="Article Summarizer" />
                </a>

                <a href="https://github.com/Arsh7707/Rasterization-and-shading" target="_blank">
                    <ProjectItem img={rasterizeImg} title="Rasterization Project" />
                </a>

                <a href="https://github.com/Arsh7707/Project1-Meditation" target="_blank">
                    <ProjectItem img={meditationImg} title="Meditation App" />
                </a>
               





            </div>
        </div>



    )
}

export default Project