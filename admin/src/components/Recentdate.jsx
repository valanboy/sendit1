import { useState, useEffect } from "react";

function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-gray-500 text-sm md:text-[15px] text-center py-3">
      {currentDateTime.toLocaleString()}
    </div>
  );
}

export default CurrentDateTime;