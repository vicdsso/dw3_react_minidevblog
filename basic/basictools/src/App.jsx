import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Form  from './components/Form/Form'
import FormHoocks from './components/Hooks/FormHoocks'
import ConditionalRender from './components/ConditionalRender/ConditionalRender'
import { useState } from 'react'
import ShowUserName from './components/ShowUserName/ShowUserName'




function App() {
  const [users, setUser] = useState([
    {active: true, userName: 'Icoma'},
    {active: true, userName: 'Sena'},
    {active: false, userName: 'Hammer'},
    {active: true, userName: 'Salomao'}
  ])

  return (
    <>
    <NavBar></NavBar>
    <Form></Form>
    <Footer></Footer>
<FormHoocks></FormHoocks>
<ConditionalRender></ConditionalRender>
<ShowUserName list={users}></ShowUserName>
    </>
  )
}

export default App





