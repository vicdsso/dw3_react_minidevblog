import React, { useState } from 'react'

const FormHoocks = () => {
    
const [list] = useState(['Victória', 'Kamily', 'Kayro', 'Daniel'])

const [number, setNumber] = useState(15)

const [user] = useState(
    [
        {id:1, nome: 'José Carlos', idade: 44},
        {id:2, nome: 'Maria Rosa', idade: 25},
        {id:3, nome: 'Ana Sofia', idade: 31},
        {id:4, nome: 'Marcus Daniel ', idade: 21},
        {id:5, nome: 'Victor Hugo', idade: 34},
        {id:6, nome: 'Paulo José', idade: 55},
        {id:7, nome: 'Victoria Kamily', idade: 19},
        {id:8, nome: 'Pedro Lucas', idade: 38},
    ]
)

  return (
  
    <> 
    <div>
        <p>
            <strong>Valor de número: </strong>{number}
        </p>
        <button onClick={() =>{setNumber(32); console.log(number)}}>Mudar</button>
    </div>
    <div>   

        <ul>
            {
                list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))
            }
        </ul>

    </div>

    <div>
        
       <table>
                <tr>
                    <th>id</th>
                    <th>nome</th>
                    <th>idade</th>
                </tr>
                {
                      user.map((pessoa, i) => (
                      
            //<tr key={i}> ou <tr key={pessoa.id}>
                <tr key={i}> 

                    <td>{pessoa.id}</td>
                    <td>{pessoa.nome}</td>
                    <td>{pessoa.idade}</td>

                </tr>
                 ))
               
                }

        </table>
        
    </div>
    </>
  )
}

export default FormHoocks