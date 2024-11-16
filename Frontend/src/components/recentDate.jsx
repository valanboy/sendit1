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
    <div style={{ textAlign: "center",color:"#d7d7d7", padding: "10px", fontSize: "15px", fontWeight: "bold" }}>
      {currentDateTime.toLocaleString()}
    </div>
  );
}

export default CurrentDateTime;