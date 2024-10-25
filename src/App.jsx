import React from 'react';
import Navbar from "./components/navbar";
import RightSection from './components/rightSection';
import LeftSection from './components/leftSection';

export default function App() {
  return (
    <>
      <div className="h-auto w-full p-10 bg-gradient-to-br from-[#F2F5F9] to-orange-100 flex items-center justify-center overflow-hidden">
        <main className="w-full h-full flex flex-col">
          <Navbar />
          <div className="w-full h-auto flex flex-row max-[1153px]:flex-col max-[1153px]:items-center max-[1153px]:gap-28 gap-10 pt-[150px]" style={{ fontFamily: 'Railway' }}>
            <LeftSection />
            
            <RightSection />
          </div>
        </main>
      </div>
    </>
  )
}