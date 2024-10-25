import React, { useState } from "react";
import projects from "../project";

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = projects.filter(project => {
        if (activeTab === "All") return true;
        if (activeTab === "Web Development") return project.type === "web";
        if (activeTab === "React-Native Development") return project.type === "mobile";
        return false;
    });

    return (
        <>
            <div className="flex flex-row gap-5 items-center">
                <h1 className="text-[40px] font-bold">PORTFOLIO</h1>
                <hr className="w-[252px] h-[3px] bg-gradient-to-r from-[#FE9119] to-[#ED250A]" />
            </div>

            <ul className="w-full items-center justify-end flex flex-row gap-5 text-[#57657A] text-[16px]">
                {["All", "Web Development", "React-Native Development"].map((tab) => (
                    <li
                        key={tab}
                        className={`cursor-pointer ${activeTab === tab ? "font-bold text-[#FE9119]" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>

            <div className="w-full flex flex-row flex-wrap mt-3 gap-[10px]">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="relative w-[350px] h-[200px] group">
                        <div className={`absolute w-full h-full rounded-[8px] ${index === 0 || index === 3 || index === 4 || index == 7 ? 'bg-[#FFE3BF]' : 'bg-[#FFF4E5]'} p-2 overflow-hidden transition-all duration-300 ease-in-out group-hover:h-auto group-hover:z-10`}>
                            <div className="w-[334px] h-[150px] rounded-[8px] bg-white transition-all duration-300 ease-in-out group-hover:min-h-auto flex items-center justify-center">
                                <img src={project.image[0]} alt={project.title} className="w-full h-full object-cover rounded-[8px]" />
                            </div>
                            <span className="text-[12px] text-gray-500 mt-1">
                                {project.date}
                            </span>
                            <h3 className="-mt-1 font-semibold">{project.title}</h3>
                            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <p className="text-sm">{project.description}</p>
                                <p className="text-xs mt-1 text-gray-500"><strong>Tech Stack:</strong> {project.techStack}</p>
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm mt-1 block">Go to GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}