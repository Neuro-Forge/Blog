import React from 'react'
import { useCart } from '../context/cartContext'

function Cart() {
  const { cartitems, updatequantity, removefromcart } = useCart()

  const cartTotal = cartitems.reduce(
    (sum, item) => sum + Number(item.price || 0) * item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cartitems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-6 text-gray-600">
            Cart is empty.
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="space-y-4">
              {cartitems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-4"
                >
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-gray-600">
                      ${item.price} × {item.quantity}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      className="px-3 py-1 border rounded-lg hover:bg-gray-50"
                      onClick={() => updatequantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>

                    <div className="min-w-[2rem] text-center font-medium">
                      {item.quantity}
                    </div>

                    <button
                      className="px-3 py-1 border rounded-lg hover:bg-gray-50"
                      onClick={() => updatequantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>

                    <button
                      className="px-3 py-1 text-red-600 border border-red-600 rounded-lg hover:bg-red-50"
                      onClick={() => removefromcart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-end">
              <div className="text-right">
                <div className="text-gray-600">Total</div>
                <div className="text-2xl font-bold">${cartTotal.toFixed(2)}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart

