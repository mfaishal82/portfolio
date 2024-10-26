import React, { useEffect } from 'react';
import Navbar from "./components/navbar";
import RightSection from './components/rightSection';
import LeftSection from './components/leftSection';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <div className="h-auto w-full p-10 max-sm:p-2 bg-gradient-to-br from-[#F2F5F9] to-orange-100 dark:bg-gradient-to-br dark:from-[black] dark:to-orange-200 flex items-center justify-center overflow-hidden">
        <main className="w-full h-full flex flex-col">
          <Navbar />
          <div className="w-full h-auto flex flex-row max-[1153px]:flex-col-reverse max-[1153px]:items-center max-[1153px]:gap-28 gap-10 pt-[150px]" style={{ fontFamily: 'Railway' }}>
            <LeftSection />
            
            <RightSection />
          </div>
        </main>
      </div>
    </>
  )
}