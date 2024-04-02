
import React, { useState } from 'react'
var teste = 8

 const Form = () => {
    const handleMyEvent = () => {
        console.log("ativou o botao")
    }
const [x, setX] = useState(false) 
   
    return (
        <>
    <div>

        <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
        </div>
        <div> 
            <button onClick={() => {console.log("yes, apertou em mim")}}>Clique em mim tambem</button>
        </div>
        <div>
            <button onClick={() =>{
                if(true){
                    console.log("Isso nao deveria acontecer")
                }
            }}>Será que você clicaria aqui</button>
        </div>
        <div>
            
           <h1>{x ? 'renderizou bonitinho' : 'nao renderizou'}</h1> 
           <button onClick={() => setX(!x)}>valida</button>
           
        </div>
   
        </div>

        <div>

<strong>Valor:</strong>{teste}

<button onClick={() =>{ teste = 12; console.log(teste)}}>Aperte o mude</button>

<strong>Valor:</strong>{teste}

        </div>
        </>
  )
}

export default Form