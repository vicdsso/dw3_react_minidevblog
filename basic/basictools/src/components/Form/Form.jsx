import React from 'react'
var teste = 8

 const Form = () => {
    const handleMyEvent = () => {
        console.log("ativou o botao")
    }
const renderButton = (x) =>{
    if(x){
        return <h1>renderizou</h1>
    } else {
        return <h1>renderizou 2</h1>
    }
}

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
            {renderButton(true)}
            {renderButton(false)}
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