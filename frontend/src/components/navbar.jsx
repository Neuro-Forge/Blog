import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

function navbar(){
    const { cartitems } = React.useContext(CartContext);
    const cartcount = cartitems.reduce((total, item) => total + item.quantity, 0);

    return(
        <div className="relative big-white shadow-md px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">
               shibi
            </Link>

            <Link to="/cart" className="text-2xl font-bold relative">
                🛒
                {cartcount > 0 && (
                  <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center">
                    {cartcount}
                  </span>
                )}
            </Link>
        </div>
    )
}
export default navbar

