
import { useState } from 'react';
import RenderCart from './Cart';
import RenderProduct from './Product';

function Basket() {
  // тут забераем карть на которий нажали
  const [cart, setCart] = useState([])

  // перекулчения с карта на продукта 
  const [page, setPage] = useState(true)


 // фн для збор карт нужна продукт указать как обект а не как масив
 const addToCart = (product)=>{
    setCart([...cart, {...product}])
    //console.log(product)
  }

// фн удаления с карта 
const removeFromCart = (productToRemove)=>{
setCart(cart.filter(product => product !== productToRemove ))
}

return(
  <div className="app">
  <header>
   <button onClick={()=>{setPage(false)} }  >Go to Cart ({cart.length})</button>
   <button onClick={()=>{setPage(true)} }  >Products</button>
  </header>
  {page ? <RenderProduct addToCart={addToCart} />: <RenderCart removeFromCart={removeFromCart} cart={cart}/>}
</div>
)
 
}

export default Basket;
