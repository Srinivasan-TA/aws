import React from 'react'
import '../components/navbar.css'

const Navbar = ({size, setShow}) => {
      return (
    <nav>
        <div className="nav-box">
            <span className='my-shop' onClick={()=>setShow(true)}>
                Netflix - Purchase
            </span>
            <div className='cart' onClick={()=>setShow(false)}>
                <span>
                <i className="fas fa-cart-plus"></i>
                </span>
                <span>
                    {size}
                </span>
            </div>
        </div>
    </nav>
    )
}

export default Navbar