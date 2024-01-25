'use client'
import MainPage from '@/Components/MainPage/MainPage';
import NavBar from '@/Components/NavBar/NavBar';
import './globals.css'
import './build.css'
import { useEffect } from 'react';
export default function Home() {
  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.register('/service-worker.js');
  //   }
  // }, []);

  return (
   <div className={`flex flex-col bg-dark text-white pb-6 relative items-center`}>
    <NavBar />
    <MainPage />
   </div>
  );
}
