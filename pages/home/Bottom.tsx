import React from 'react';
import Image from 'next/image';

import instagram from '@/public/instagram.svg';
import twitter from '@/public/twitter.svg';
import youtube from '@/public/youtube.svg';
export default function Bottom() {
  const contact = [instagram, twitter, youtube];
  return (
    <div className="flex w-52 justify-between mt-32">
      {contact.map((e) => (
        <a
          href="#"
          className="flex justify-center items-center p-3 overflow-hidden border-2 border-main rounded-[50%] relative 
       before:absolute before:left-0 before:content-[''] z-10 before:z-[-1] before:h-full before:w-0 hover:before:w-full before:transition-[.5] before:bg-main
        "
        >
          <Image src={e} alt={e} className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
