import React from "react";
import { FaJava, FaPython, FaJs, FaReact, FaAws } from "react-icons/fa";
import { SiC, SiCplusplus, SiTypescript, SiMysql, SiPostgresql, SiFirebase, SiLinux } from "react-icons/si";
import { BsGearFill } from "react-icons/bs"; // For Bash/Assembly as placeholders

const Skills = () => {
    return (
        <div id="skills" className="text-center my-10">
            <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
                <div className="flex flex-col items-center group">
                    <FaJs className="text-yellow-500 text-5xl group-hover:animate-bounce" />
                    <p className="mt-2 text-sm">JavaScript</p>
                </div>
                <div className="flex flex-col items-center group">
                    <SiTypescript className="text-blue-500 text-5xl group-hover:animate-bounce" />
                    <p className="mt-2 text-sm">TypeScript</p>
                </div>
                <div className="flex flex-col items-center group">
                    <FaPython className="text-blue-600 text-5xl group-hover:animate-bounce" />
                    <p className="mt-2 text-sm">Python</p>
                </div>
                <div className="flex flex-col items-center group">
                    <FaJava className="text-blue-700 text-5xl group-hover:animate-bounce" />
                    <p className="mt-2 text-sm">Java</p>
                </div>
                <div className="flex flex-col items-center group">
                    <SiC className="text-gray-400 text-5xl group-hover:animate-spin" />
                    <p className="mt-2 text-sm">C</p>
                </div>
                <div className="flex flex-col items-center group">
                    <SiCplusplus className="text-blue-800 text-5xl group-hover:animate-spin" />
                    <p className="mt-2 text-sm">C++</p>
                </div>
                <div className="flex flex-col items-center group">
                    <BsGearFill className="text-gray-600 text-5xl group-hover:animate-spin" />
                    <p className="mt-2 text-sm">Bash/Assembly</p>
                </div>
                <div className="flex flex-col items-center group">
                    <FaReact className="text-blue-400 text-5xl group-hover:animate-spin" />
                    <p className="mt-2 text-sm">React</p>
                </div>
                <div className="flex flex-col items-center group">
                    <FaAws className="text-orange-500 text-5xl group-hover:animate-bounce" />
                    <p className="mt-2 text-sm">AWS</p>
                </div>
                <div className="flex flex-col items-center group">
                    <SiLinux className="text-yellow-500 text-5xl group-hover:animate-ping" />
                    <p className="mt-2 text-sm">Linux</p>
                </div>
                <div className="flex flex-col items-center group">
                    <SiMysql className="text-blue-600 text-5xl group-hover:animate-pulse" />
                    <p className="mt-2 text-sm">MySQL</p>
                </div>
                <div className="flex flex-col items-center group">
                    <SiPostgresql className="text-blue-500 text-5xl group-hover:animate-pulse" />
                    <p className="mt-2 text-sm">PostgreSQL</p>
                </div>
                {/* <div className="flex flex-col items-center group">
                    <SiFirebase className="text-yellow-600 text-5xl group-hover:animate-ping" />
                    <p className="mt-2 text-sm">Firebase</p>
                </div> */}
            </div>
        </div>
    );
};

export default Skills;
