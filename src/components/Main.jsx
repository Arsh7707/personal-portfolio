import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { TypeAnimation } from 'react-type-animation';


const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left' src="https://e0.pxfuel.com/wallpapers/418/638/desktop-wallpaper-portfolio-background.jpg" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-6xl text-5xl font-bold text-gray-800"> Arshjot Singh</h1>
                    <h2 className="flex sm:text-3xl text-1xl pt-5 text-gray-800">
                        I'm an aspiring<TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Software Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Tech Enthusiast',
                                1000,

                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <a href="https://www.linkedin.com/in/arshjot-singh-9553ba239" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={21} className="cursor-pointer hover:scale-110 ease-in duration-200" />
                            
                        </a>
                        <a href="https://github.com/Arsh7707" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={21} className="cursor-pointer hover:scale-110 ease-in duration-200" />
                        </a>
                        <a href="https://www.instagram.com/arshjot_dua/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={21} className="cursor-pointer hover:scale-110 ease-in duration-200" />
                        </a>
                        <a href = "https://drive.google.com/file/d/1mMYy7CgLvkpQsi87RG6F7FnLdnszztsq/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <IoIosDocument size={21} className="cursor-pointer hover:scale-110 ease-in duration-200" />

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
