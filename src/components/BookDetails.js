import React , {useContext} from 'react'
import { BookContext } from '../Context/BookContext';
const BookDetails = (props) => {
    const {removeBook}= useContext(BookContext)
    return (
        <li onClick={() => removeBook(props.books.id)}>
            <div className="title">{props.books.title}</div>
            <div className="author">{props.books.author}</div>
        </li>
      );
}
 
export default BookDetails;