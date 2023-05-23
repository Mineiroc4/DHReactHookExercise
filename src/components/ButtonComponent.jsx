import { useState } from "react";




 function ButtonComponent () {
    const [click, setClick] = useState(0)
    return ( 
    <>
    
    <h3>Você Clicou um total de {click} vezes </h3>
    <button onClick={() => setClick(click + 1 )}>
        Clique Aqui!
    </button>
    
    </>
    );
}    
export default ButtonComponent;
 