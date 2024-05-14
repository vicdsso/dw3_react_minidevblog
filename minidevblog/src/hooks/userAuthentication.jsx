import { db } from '../firebase/config'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
}from 'firebase/auth'  
import { useState, useEffect } from 'react'

export const userAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoding] =  useState(null)
    const [ cancelled, setCancelled] = useState(false)

    const auth = getAuth()
    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }

async function createUser(data){
    checkIfIsCancelled()

    setLoding(true)
    setError(null)
    
    try{
        const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password)
        await updateProfile(user, {
            displayName:data.displayName
        })

        setLoding(false)
    }catch(error){
        console.error(error.message)
        console.table(typeof error.message)

        let systemErrorMessage

        if(error.message.includes("Password")){
            systemErrorMessage = "A senha presica conter pelo menos 6 caracteres."
        }else if(error.message.includes("email-already")){
            systemErrorMessage = "Email já existe em nossa base de autentificação."
        }else{
            systemErrorMessage = "Ocorreu um error, tente novamente mais tarde!"
        }


        setLoding(false)
        setError(systemErrorMessage)
    }
}


const logout = () => {
    checkIfIsCancelled()
    signOut(auth)
}

const login = async(data) =>{
    checkIfIsCancelled()
    setLoding(true)
    setError(null)

    try{
        await signInWithEmailAndPassword(auth, data.email, data.password)
        setLoding(false)
    }catch(error){
        console.log(error.message)
        console.table(typeof error.message)

        let systemErrorMessage

        if(error.message.includes("invalid-login-credentials")){
            systemErrorMessage = "Este usúario não está cadastrado."
        }else if(error.message.includes("wrong-password")){
            systemErrorMessage = "Há erro com as suas credenciais."
        }else{
            systemErrorMessage = "Ocorreu um error, tente novamente mais tarde!"
        }


        setLoding(false)
        setError(systemErrorMessage)
    }
}
    useEffect(() =>{
        return () => setCancelled(true)
    }, [])

    return{
        auth, createUser, error, loading, logout, login
    }
}











