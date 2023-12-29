import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='flex  '>
        <div className='basis-1/2 bg-[url("/dessert.jpeg")] w-[500px] h-svh bg-cover '>
          <h1></h1>
        </div>
        <div className='basis-1/2 bg-white flex flex-col justify-center px-32 gap-6 '>

            <div>
              <div><h1 className='text-3xl'>It takes money
               <br /> <span className='italic'>to change the world.</span></h1></div>
              <div> - </div>
            </div>
            <div>
              <p className='font-thin italic lin'>
                Our goal isn’t just to write checks. It’s to deposit and grow ideas.
                 We look at finance with a hungry eye for change, and with a desire to share our learning and experience –
                including some painful mistakes along the way – with ambitious entrepreneurs.
              </p>
            </div>
            <div>
              <button className='p-2 outline-double text-sm my-2 hover:origin-bottom-right hover:bg-zinc-200'>
                Read Our Mission
              </button>
            </div>
          </div>

      </div>
    </main>
  )
}
