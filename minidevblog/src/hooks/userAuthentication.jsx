import { db } from '../firebase/config'
import {  getAuth, createUserWithEmailAndPassword,
     signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import { useState, useEffect } from 'react'



export const userAuthentication = () => {
const  [ error, setError] = useState(null)
const [loading, SetLoading] = useState(null)
const [cancelled, setCancelled] = useState(false)

const auth = getAuth()

function checkIfIsCancelled(){
    if(cancelled){
        return
    }
}

 async function createUser(data){
checkIfIsCancelled()

SetLoading(true)
setError(null)

try{
    const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)
await updateProfile(user, {
    displayName: data.displayName
})
SetLoading(false)
    return user

} catch(error) {
    console.error(error.message)
    console.table(typeof error.message)
     
    let systemErrorMessage

    if(error.message.includes("Password")){
        systemErrorMessage = "A senha precisa ter pelo menos 6 caracteres"
    }else if(error.message.includes("email-already")){
        systemErrorMessage = "E-mail existente na base de autenticacao"
    }else{
        systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde!"
    }

    setLoading(false)
    setError(systemErrorMessage)
}

 }
 const logout = () => {
    checkIfIsCancelled()
    signOut(auth)
 }
 const login = async (data) =>{
    checkIfIsCancelled()
    setLoading(true)
    setError(null)

    try{auth, data.email, data.password
    await signInWithEmailAndPassword(auth, data.email, data.password)
}catch(error){
    console.error(error.message)
    console.table(typeof error.message)

    let systemErrorMessage

    if(error.message.includes("Invalid-Login-credentials")){
        systemErrorMessage = "este usuario nao esta cadastrado"
    }else if(error.message.includes("wrong-password")){
        systemErrorMessage = "Ha um erro com suas credenciais"
    }else{
        systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde!"
    }

    setLoading(false)
    setError(systemErrorMessage)
}
 }

 useEffect(() =>{
    return
 },[])

 return{
    auth,
    createUser,
    error,
    loading,
    logout,
    login
 }
}