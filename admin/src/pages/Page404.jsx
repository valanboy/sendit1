import {Link} from 'react-router-dom';

const Page404 = () => {
  return (
    <div className="h-screen bg-orange-50 flex flex-col  items-center justify-center text-gray-600">
  
<div className="flex justify-center text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] w-[80%] mx-auto">
<img src="404.svg" width="" className="w-[50px] md:w-[90px]"/>
  <span className="ml-[1rem]">404 ERROR</span>
</div>

  <div className='flex flex-col items-center'>
    <h1 className="  text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] text-center mt-4">
            OOps! page not found
      </h1>

      <Link to="/">
        <button className="text-sm md:text-[14px] text-white p-3 px-5 cursor-pointer rounded-xl bg-[#e78d63] font-semibold mt-4">
          Go to Home
        </button>
      </Link>
    
  </div>

  
      
      
    </div>
  )
}

export default Page404

