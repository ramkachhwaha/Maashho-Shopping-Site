import { useContext } from 'react'
import { cartContent } from '../../context/MainContext'
import { FaTrash, FaMinus, FaPlus, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router'

export default function Cart() {
  let { cart, removeFromCart, updateQty } = useContext(cartContent)

  // Total Calculation
  let totalAmount = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="Empty Cart" className="w-64 opacity-80" />
        <h2 className="text-2xl font-bold mt-4 text-gray-800 dark:text-gray-200">Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2 mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-500 transition shadow-lg">Start Shopping</Link>
      </div>
    )
  }

  return (
    <section className="py-10 px-4 max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Shopping Cart ({cart.length})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">

        {/* Cart Items List */}
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 gap-4 transition-all hover:shadow-md">
              {/* Image */}
              <div className="w-24 h-24 bg-white rounded-md flex items-center justify-center overflow-hidden shrink-0 p-2">
                <img src={item.image} alt={item.name} className="object-contain h-full w-full" />
              </div>

              {/* Details */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{item.name}</h3>
                <p className="text-gray-500 text-sm">Category Name</p>
                <div className="mt-2 font-bold text-indigo-600 text-lg">₹{item.price}</div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                  <button onClick={() => updateQty(item.id, 'minus')} className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition"><FaMinus className=' cursor-pointer ' size={12} /></button>
                  <span className="px-3 font-semibold w-10 text-center">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 'plus')} className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition"><FaPlus className=' cursor-pointer ' size={12} /></button>
                </div>

                <button onClick={() => removeFromCart(item.id)} className="  cursor-pointer  text-red-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Panel */}
        <div className="h-fit sticky top-24">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-6 border-b pb-4 dark:border-gray-700">Order Summary</h3>

            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900 dark:text-white">₹{totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-500 font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (18%)</span>
                <span>₹{(totalAmount * 0.18).toFixed(0)}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 my-4 pt-4 flex justify-between items-center text-xl font-bold text-gray-900 dark:text-white">
              <span>Total</span>
              <span>₹{(totalAmount + (totalAmount * 0.18)).toFixed(0)}</span>
            </div>

            <button className="  cursor-pointer  w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-500 transition shadow-lg flex items-center justify-center gap-2">
              Proceed to Checkout <FaArrowRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}