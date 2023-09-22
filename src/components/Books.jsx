import Book from "./Book"

export default function Books({books , addToOrder}){

    return (
        <ul> 
            {books.map( book => <li> <Book title = {book.title} key = {book.id}  addToOrder = { addToOrder } id = { book.id } /> </li> )}
        </ul>
    )
}