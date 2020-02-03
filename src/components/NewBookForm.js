import React ,{useContext , useState }from 'react'
import { BookContext } from '../Context/BookContext';
const NewBookForm = () => {
    const { addBook } = useContext(BookContext)
    const [title,setTitle] =useState('')
    const [author,setAuthor] =useState('')
    const handleSubmit =(e) => {
        e.preventDefault()
        addBook(title,author)
        setTitle('')
        setAuthor('')

    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Book Title" value={title} required/>
            <input type="text" onChange={(e)=>setAuthor(e.target.value)} placeholder="Book Author" value={author} required/>
            <input type="submit" value="Add Book" />
        </form>
     );
}
 
export default NewBookForm;