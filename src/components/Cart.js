import React,{useState, useEffect} from 'react';
import '../components/cart.css'

const Cart = ({cart, setCart, handleChange}) => {
    const [Price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.Price
        ))
        setPrice(ans);
        console.log('Price updated:', ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        console.log('Item removed with id:', id);
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} alt='h'/>\
                       
                        <p>{item.title}</p> 
                    </div>
                    <div className="display">
                    <p> Per Episode this week</p>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.Price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Pay and Enjoy Your weekend NOW</span>
            <span>Rs - {Price}</span>
        </div>
    </article>
  )
}

export default Cart
