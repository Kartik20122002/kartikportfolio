'use client'

import MainPage from '@/Components/MainPage/MainPage';
import NavBar from '@/Components/NavBar/NavBar';
import { useEffect, useState } from "react";
export default function Home() {
  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.register('/service-worker.js');
  //   }
  // }, []);

  return (
   <div className={`flex flex-col pb-6 relative items-center`}>
    <img src='./bg.jpg' alt='bg' className='fixed top-0 bottom-0 left-0 z-[-1] w-full h-[100vh]' />
    <NavBar />
    <MainPage />
   </div>
  );
}
