export default function Book({title , addToOrder , id}){

    return(
        <> 
       <h3> {title} </h3> 
       <button onClick={ () => addToOrder(id) }> buy </button>
       </>
    )
}