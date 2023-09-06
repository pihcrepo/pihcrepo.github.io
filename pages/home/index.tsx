import React from 'react';
import Image from 'next/image';

import bg from '@/public/bg.png';
import Bottom from './Bottom';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="flex flex-col mt-[20vh] gap-9">
          <span className="text-5xl font-bold">Welcome, I'm Ann</span>
          <span className="text-3xl text-main font-medium ">
            Frontend Developer
          </span>
          <p className="w-[40vw]">
            With an eye for detail and a passion for clean code, I strive to
            deliver visually appealing and performant websites that exceed user
            expectations. Collaborative and adaptable, I enjoy staying up to
            date with the latest front-end technologies and best practices to
            create compelling digital experiences.
          </p>
          <div
            className="w-32 h-14 bg-main flex justify-center items-center
            rounded-xl cursor-pointer relative before:content-[''] z-10 border-main border-2
            before:absolute before:bg-bg before:rounded-xl before:left-0 before:h-full before:w-0 before:z-[-1] before:hover:w-full before:transition-[.5]
          "
          >
            Contact Me
          </div>
        </div>

        <Image
          src={bg}
          alt={''}
          className="w-[55vmin] h-[50vmin] m-auto cursor-pointer hover:opacity-50 duration-500"
        />
      </div>
      <Bottom />
    </div>
  );
}
