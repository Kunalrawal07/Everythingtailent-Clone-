// components/about/Hero.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 px-6 bg-black text-white h-full">
      <div className="max-w-7xl mx-auto  ml-40">
        <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
        <p className='font-bold'> About Us </p>
        <br></br>
  <div className="text-4xl md:text-5xl font-bold mb-6 text-5xl max-sm:text-4xl font-bold leading-[60px] max-sm:leading-[50px] max-w-[600px] ">
    <span className="bg-clip-text text-transparent text-white">
      Shaping the Next Generation of HR 
    </span> 
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
      Tech Recruitment.
    </span>
  </div>
  
  <p className="text-xl text-gray-300 mb-8 max-w-lg text-lg text-black/60 dark:text-white/70 leading-relaxed max-w-lg font-light">
    At Everything Talent, we help you launch your recruitment into a new dimension.
  </p>
  <Button 
    className="w-48 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium shadow-lg shadow-blue-300/50 transition-all duration-300"
  >
    Start Trial Now
  </Button>
</div>
        
<div className="md:w-1/2 relative mr-30">
  {/* Top-left blue shadow */}
  <div className="absolute -top-4 -left-4 w-3/4 h-3/4 rounded-lg bg-blue-500/30 blur-xl z-0"></div>
  
  {/* Gradient border container */}
  <div className="relative z-10 p-[5px] rounded-lg bg-gradient-to-r from-blue-400 to-purple-600 shadow-xl">
    {/* Image container */}
    <div className="relative h-80 md:h-126 w-full overflow-hidden rounded-lg">
      <Image
        src="/Assets/storybehind.webp"
        alt="Team working together"
        height={500}
        width={500}
        className="object-cover w-full h-full"
      />
      
      {/* Inner shadow overlay for depth */}
      <div className="absolute inset-0 shadow-inner bg-gradient-to-tl from-transparent to-blue-500/20 pointer-events-none"></div>
      
      {/* Subtle blue glow effect on hover */}
      <div className="absolute inset-0 bg-blue-400/0 hover:bg-blue-400/10 transition-all duration-300 pointer-events-none"></div>
    </div>
  </div>
  
  {/* Decorative dot pattern (optional) */}
  <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20 z-0" 
       style={{
         backgroundImage: 'radial-gradient(circle, #4299e1 1px, transparent 1px)',
         backgroundSize: '8px 8px'
       }}>
  </div>
</div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;