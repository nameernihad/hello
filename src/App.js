import Counter from "./Counter";
import { useState } from "react";
function App(){  
  const [state,setState] = useState(false)
  return (
    <div >
     <h1 onClick={()=>setState(!state)} >show/hide</h1>
   { state && <Counter/> }
    </div>
  )
}

export default App;
// MOUNTING
// UPDATEING
// UNMOUNT