import { useState } from "react";
import Button from "./components/button";
import "./styles/App.css";

function App() {
   const [count, setCount] = useState(0);

   const increment = () => {
      setCount((currentState) => currentState + 1);
   };

   const decrease = () => {
      setCount((currentState) => currentState - 1);
   };

   return (
      <div className="App">
         <div className="app__wrraper">
            <span className="app__count" style={{
              color : `${count > 0 ? 'blue' : count < 0 ? 'red' : '#000'}`
            }}>{count}</span>
            <div className="app__buttons">
               <Button onclick={decrease} styles={{backgroundColor : "blue"}} > - </Button>
               <Button onclick={increment} styles={{backgroundColor : "red"}}> + </Button>
            </div>
         </div>
      </div>
   );
}

export default App;
