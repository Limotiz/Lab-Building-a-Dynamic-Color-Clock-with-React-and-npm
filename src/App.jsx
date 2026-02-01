import { format } from "date-fns";

function App() {
  return (
    <p className = "time">
      {format(new Date(), "yyyy-MM-dd HH:mm:ss"
)}
    </p>
  );
}

export default App;


