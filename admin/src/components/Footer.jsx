const Footer = () => {
  return (
    <footer className="bg-[#1e3b8aee] text-gray-300 text-[15px] flex flex-col items-center justify-center w-full py-7 md:p-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto space-y-4 md:space-y-0 md:space-x-4">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="logo"
            height="90"
            width="90"
            className="filter invert md:w-[90px] md:h-[50px]"
          />
        </div>

        {/* Location */}
        <div className="text-sm md:text-[1rem] text-center md:text-left">
          Ogun State, Nigeria
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-3">
          <img src="/twitter.svg" width="25" height="35" alt="Twitter" className="md:w-[33px]" />
          <img src="/facebook.svg" width="25" height="35" alt="Facebook" className="md:w-[33px]"/>
          <img src="/youtube.svg" width="27" height="35" alt="YouTube" className="md:w-[33px]"/>
        </div>
      </div>

      <span className="mt-4 text-[13px] md:text-[1rem] italic">
        &copy; 2024 SendIT. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
