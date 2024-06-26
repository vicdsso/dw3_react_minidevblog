import {useState, useEffect, useReducer} from 'react'
import { db } from '../firebase/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'


const inictialState = {
    loading: null,
    error:null
}


const insertReducer = (state, action) => {
    switch (action.type){
        case "LOADING":
            return {loading: true, error: null}
        case "INSERT_DOC":
            return {loading: false, error: null}
        case "ERROR":
            return {loading: false, error:action.payload}
        default:
            return state
    }
}

 const userInsertDocument = () => {
 const [response, dispatch] = useReducer(insertReducer, inictialState)
 const [cancelled, setCancelled] = useState(false)

 const checkCancelbeforeDispatch = (action) => {
    if(!cancelled){
        dispatch(action)
    }
 }

 const insertDocument = async(document) =>{
    checkCancelbeforeDispatch({type: "LOADING"})


try{
        const newDocument = {...document, createAt: Timestamp.now()}
        const insertDocument = await addDoc(
            collection(db, docCollection),
            newDocument
        )

        checkCancelbeforeDispatch({
            type: "INSERT_DOC",
            payload:insertDocument
        })
}catch(error){
    checkCancelbeforeDispatch({
        type: "ERROR",
        payload:error.message
    })
}
 }
 useEffect(() =>{
    return () => setCancelled(true)
 }, [])

 return{
    insertDocument, 
    response
 }

}

