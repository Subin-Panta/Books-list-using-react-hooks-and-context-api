import React , {useContext} from 'react'
import { BookContext } from '../Context/BookContext';
const BookDetails = (props) => {
    const {dispatch}= useContext(BookContext)
    return (
        <li onClick={() => dispatch({type:"REMOVE_BOOK",id: props.books.id})}>
            <div className="title">{props.books.title}</div>
            <div className="author">{props.books.author}</div>
        </li>
      );
}
 
export default BookDetails;