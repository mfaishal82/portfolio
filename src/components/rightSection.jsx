import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutMe from "./aboutMe";
import Contact from "./contact";
import Navigation from "./navigation";
import Resume from "./resume";
import Portfolio from "./portfolio";

export default function RightSection() {
    const [tabSection, setTabSection] = useState('AboutMe');

    const renderContent = () => {
        switch (tabSection) {
            case 'Resume':
                return <Resume />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            default:
                return <AboutMe />;
        }
    };

    return (
        <section className="bg-white rounded-[20px] h-[616px] w-2/3 max-[1153px]:w-full py-3">
            {/* Navigation */}
            <Navigation setTabSection={setTabSection} tabSection={tabSection} />

            {/* Content */}
            <div className="h-full mb-10 mx-12 max-[902px]:mx-1
            overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-white
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-200
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-400
            ">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={tabSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}