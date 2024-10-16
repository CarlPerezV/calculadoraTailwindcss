
const Header = () => { 
    return(
        <div className='flex justify-between px-2'>
            <h1 className=' text-3xl font-black tracking-tighter'>CASIO</h1>
            <div className='mb-3 grid w-48 grid-cols-4 rounded-md border-x-2 border-t-4 border-stone-700 bg-gradient-to-t from-yellow-600 to-yellow-800'>
              <div className='col-start-2 border-x-2 border-r-0 border-yellow-300'></div>
              <div className='border-x-2 border-yellow-300'></div>
            </div>
            <div className='flex-cols-2 mb-2 flex items-center'>
              <h3 className='mx-1 pr-2 text-center'>MX-12B</h3>
              <div className='mb-2'>
                <h2 className='text-3xl font-black tracking-tighter'>12</h2>
                <h3 className='-mt-2 text-xs font-light tracking-wider'>
                  Digits
                </h3>
              </div>
            </div>
          </div>
    )
 }

 export default Header