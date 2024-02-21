import Image from 'next/image';
import * as React from 'react';

interface IAppProps {
}

const SideBar: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className='m-5'>
        <div className='transform cursor-pointer transition sticky hover:z-[999] duration-500 hover:scale-125 hover:bg-[#5a83ca] flex justify-center items-center bg-[#3468C0] m-2 w-[90px] h-[90px] rounded-xl'>
          <div className='p-2 items-center m-auto text-center'>
          <Image
            src={'/iconProfile.png'}
            width={100}
            height={100}
            alt='profile'
            className='w-[50px] m-auto'
          />
          <span className='text-xs font-semibold'>Profile</span>
          </div>

        </div>
        <div className='transform cursor-pointer sticky hover:z-[999] transition duration-500 hover:scale-125 hover:bg-[#5a83ca] flex justify-center items-center bg-[#3468C0] m-2 w-[90px] h-[90px] rounded-xl'>
        <div className='p-2 items-center m-auto text-center'>
        <Image
            src={'/education.png'}
            width={100}
            height={100}
            alt='education'
            className='w-[50px] m-auto'
          />
           <span className='text-xs font-semibold'>Education</span>
        </div>
         
        </div>
        <div className='transform cursor-pointer sticky hover:z-[999] transition duration-500 hover:scale-125 hover:bg-[#5a83ca] flex justify-center items-center bg-[#3468C0] m-2 w-[90px] h-[90px] rounded-xl'>
        <div className='p-2 items-center m-auto text-center'>
        <Image
            src={'/work.png'}
            width={100}
            height={100}
            alt='Experience'
            className='w-[50px] m-auto'
          />
          <span className='text-xs font-semibold'>Experience</span>
        </div>
        </div>
        <div className='transform cursor-pointer sticky hover:z-[999] transition duration-500 hover:scale-125 hover:bg-[#5a83ca] flex justify-center items-center bg-[#3468C0] m-2 w-[90px] h-[90px] rounded-xl'>
        <div className='p-2 items-center m-auto text-center'>
        <Image
            src={'/freelanceusagyuuun.png'}
            width={100}
            height={100}
            alt='Experience'
            className='w-[50px] m-auto'
          />
          <span className='text-xs font-semibold'>Freelance</span>
        </div>
        </div>
        <div className='transform cursor-pointer sticky hover:z-[999] transition duration-500 hover:scale-125 hover:bg-[#5a83ca] flex justify-center items-center bg-[#3468C0] m-2 w-[90px] h-[90px] rounded-xl'>
        <div className='p-2 items-center m-auto text-center'>
        <Image
            src={'/projects.png'}
            width={100}
            height={100}
            alt='Experience'
            className='w-[50px] m-auto'
          />
          <span className='text-xs font-semibold'>Projects</span>
        </div>
        </div>
        <div className='transform cursor-pointer sticky hover:z-[999] transition duration-500 hover:scale-125 hover:bg-[#5a83ca] flex justify-center items-center bg-[#3468C0] m-2 w-[90px] h-[90px] rounded-xl'>
        <div className='p-2 items-center m-auto text-center'>
        <Image
            src={'/contact-me.png'}
            width={100}
            height={100}
            alt='Experience'
            className='w-[50px] m-auto'
          />
          <span className='text-xs font-semibold'>Contact Me</span>
        </div>
        </div>
    </div>
  );
};

export default SideBar;
