


export default function Button({ isMenu , setMenu}){


 

    return (
        
      <button
      onClick={ setMenu} 
      style ={ {
        margin: ' 0 20%',
        padding: '0 25px'
      }} 
    >  
     {isMenu ? <h3> Close </h3> : <h3> Menu </h3>}

   </button>  
    )
}