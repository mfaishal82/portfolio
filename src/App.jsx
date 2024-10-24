import React from 'react';
import Navbar from "./components/navbar";
import RightSection from './components/rightSection';
import LeftSection from './components/leftSection';

export default function App() {
  return (
    <>
      <div className="h-auto w-full p-10 bg-[#F2F5F9] flex items-center justify-center overflow-hidden">
        <main className="border border-red-500 w-full h-full flex flex-col">
          <Navbar />
          <div className="w-full h-auto flex flex-row gap-10 pt-[150px] overflow-auto" style={{ fontFamily: 'Railway' }}>
            <LeftSection />
            
            <RightSection />
          </div>
        </main>
      </div>
    </>
  )
}