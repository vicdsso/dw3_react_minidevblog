import React, { useState } from 'react'

export const ConditionalRender = () => {
    const [x] = useState(true)
    const [nome, setNome] = useState('joao')

  return (
    <>
    <div> 
        <h1>isso sera exibido</h1>
        { x && <p>se x for verdadeiro, sim!</p>}
        { !x && <p>se x for verdadeiro, nao!</p>}
    </div>

    <div>
    {nome === 'joao' ? (
    <div>
        <p>o nome e joao</p>
    </div>
    ) : (
    <div>
        <p>o nome nao e joao</p>
    </div>
    )}
    </div>
    </>
  )
}

export default ConditionalRender