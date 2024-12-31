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
    <div style={{ textAlign: "center", color:"#242424", padding: "10px", fontSize: "0.75rem", fontWeight: "bold" }}>
      {currentDateTime.toLocaleString()}
    </div>
  );
}

export default CurrentDateTime;