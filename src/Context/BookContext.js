import React, { createContext , useReducer, useEffect} from "react"
import uuid from 'uuid/v1'
import { bookReducer } from "../Reducers/bookReducer"
export const BookContext= createContext()

const BookContextProvider = (props) => {
    const[books,dispatch] =useReducer(bookReducer,[],()=>{
        const localData=localStorage.getItem('books')
        return localData? JSON.parse(localData) : []
    })
    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
    },[books])
    return (
        <BookContext.Provider value={{books,dispatch}}>
          {props.children}
        </BookContext.Provider>
      )
}
 
export default BookContextProvider;
