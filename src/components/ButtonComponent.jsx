import { useState } from "react";

 function ButtonComponent () {

    const [clicks, setClicks] = useState([]);

    const addClick = () => {
      setClicks([...clicks, { clickedAt: new Date() }]);
    }
  
    return (
      <div className="App">
        {clicks.map((click, index) => (
          <div>Clique de número {index} na data: {click.clickedAt.toString()}</div>
        ))}
        <button onClick={addClick}>
          click
        </button>
      </div>
    );
  }
    
export default ButtonComponent;