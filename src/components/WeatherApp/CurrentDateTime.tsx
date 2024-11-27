import React, { useState, useEffect } from "react";

const CurrentDateTime: React.FC = () => {
  const [dateTime, setDateTime] = useState<string>(new Date().toLocaleString());

  useEffect(() => {
    const updateDateTime = () => {
      setDateTime(new Date().toLocaleString());
    };

    // Update time every second
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{dateTime}</p>
    </div>
  );
};

export default CurrentDateTime;
