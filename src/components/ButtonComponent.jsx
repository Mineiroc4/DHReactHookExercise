import { useState } from "react";

 function ButtonComponent () {

    const [click, setClick] = useState([])

    function addClick(){
        setClick([...click, { clickedAt: new Date() }])
    }

    return(
        <div >
            {click.map(() =>(
                <div key={click}>
                    <h3>Click número {click.length} na data {addClick.clickedAt}</h3>
                </div>
            ))
        }
        <button onClick={addClick}>Clique Aqui</button>
        </div>

    )

}
    
export default ButtonComponent;