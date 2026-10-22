import { useCart } from '../context/CartContext'

export default function CartDrawer() {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen, cartTotal } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ela-dark border-l border-neutral-800 z-[70] p-8 shadow-2xl flex flex-col transform transition-transform">
        <div className="flex items-center justify-between mb-8 border-b border-neutral-800 pb-4">
          <h2 className="text-2xl font-display tracking-widest text-ela-white">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-ela-gray hover:text-ela-white text-2xl">&times;</button>
        </div>

        {cart.length === 0 ? (
          <p className="text-ela-gray text-center mt-10">Your cart is empty.</p>
        ) : (
          <div className="flex-grow overflow-y-auto space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-neutral-800 pb-4">
                <img src={item.img} alt={item.title} className="w-20 h-24 object-cover grayscale" />
                <div className="flex-grow">
                  <h3 className="font-display tracking-wider text-ela-white">{item.title}</h3>
                  <p className="text-ela-gray text-xs mt-1">{item.category}</p>
                  <p className="text-ela-red font-bold mt-2">R {parseInt(item.price.replace(/\D/g, '')) * item.quantity}</p>
                  <p className="text-ela-gray text-xs mt-1">Qty: {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-ela-gray hover:text-ela-red text-xs uppercase tracking-widest self-start">Remove</button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 border-t border-neutral-800 pt-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-ela-gray uppercase tracking-widest text-sm">Total</span>
            <span className="text-2xl font-bold text-ela-white">R {cartTotal}</span>
          </div>
          <button className="w-full bg-ela-red text-ela-white font-display py-4 tracking-widest hover:bg-red-700 transition disabled:opacity-50" disabled={cart.length === 0}>
            Checkout
          </button>
        </div>
      </div>
    </>
  )
}
