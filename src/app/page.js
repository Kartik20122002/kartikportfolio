'use client'

import MainPage from '@/Components/MainPage/MainPage';
import NavBar from '@/Components/NavBar/NavBar';
import {useScroll} from 'framer-motion'
import { useEffect, useState } from "react";
export default function Home() {
  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.register('/service-worker.js');
  //   }
  // }, []);

  return (
   <div className={`flex flex-col items-center`}>
    <NavBar />
    <MainPage />
   </div>
  );
}
