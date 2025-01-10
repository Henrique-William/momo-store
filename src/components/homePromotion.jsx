import React from 'react'

export default function HomePromotion() {
  return (
    <section className='flex flex-col justify-center text-center items-center my-10 gap-4 px-40'>
      <h3 className='text-blue-600 uppercase text-base font-bold'>Promotion</h3>
      <h2 className='text-dark text-5xl font-semibold'>Winter Collections</h2>
      <p className='pb-8'>Introducing the new winter jackets.</p>
      <div className='bg-dark w-full aspect-[21/9] rounded-2xl overflow-hidden relative flex justify-center items-center cursor-pointer'><img src="images/video.png" alt="" className='object-cover'/><img src="images/icon/play.svg" alt="play button" className='absolute'/></div>
    </section>
  )
}
