import { useEffect, useState } from "react";

 function ButtonComponent () {
    const [click, setClick] = useState([])
 
    const clicksCounter = () => {
        setClick( click + 1 ) 
    }

    return ( 
    <>
        
        <h3>Você clicou um total de {clicksCounter} vezes </h3>
          
        
    </>
    );
}    
export default ButtonComponent;
