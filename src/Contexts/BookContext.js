import React, {createContext , useState} from 'react'

export const BookContext= createContext()
const BookContextProvider = (props) => {
    const[books,setBooks]=useState([
      {title: "Art of war", id:1 },
      {title: "Socrates", id:2 },
      {title: "Life", id:3 },
      {title: "Alexander", id :4 }  
    ])
    return ( 
        <BookContext.Provider value={{books}}>
        {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;