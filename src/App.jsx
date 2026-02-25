import { useState, useEffect } from "react";
import { format } from "date-fns";

function App() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);
  
    return (
      <div className="container">
  <p className="time">
      {format(time, "yyyy-MM-dd HH:mm:ss")}
    </p>
      </div>
  ); 
  
 
}

export default App;