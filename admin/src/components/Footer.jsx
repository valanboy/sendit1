
const Footer = () => {
  return (
    <div className="h-[15vh] bg-[#E9EB77] w-[100%] text-[#3b3b3b] text-[15px] flex items-center justify-between p-[10px] ">
    <div className="flex items-center w-[43%] ">
     <img src="/logo.png" alt="logo" height="90px" width="90px"/>
    
     
      <span className="">&copy; 2024</span>
    
      </div>
     <div className="items-center justify-center w-[20%] ml-3">
      <span>Ogun state, Nigeria<br/></span>
      
      
    </div>

    <div className="flex w-[40%]">
<span className="p-2"><img src="/twitter.svg" width="35px" height="55px"/></span>
<span className="p-2"><img src="/facebook.svg" width="35px" height="55px"/></span>
<span className="p-2"><img src="/youtube.svg" width="35px" height="55px"/></span>
    </div>
    </div>
  )
}

export default Footer
