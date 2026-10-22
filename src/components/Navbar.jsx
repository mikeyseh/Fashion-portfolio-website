import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart()
  
  return (
    <>
      <header className="border-b border-neutral-800 bg-ela-black sticky top-0 z-50">
        <div className="bg-ela-red text-ela-white text-xs font-bold text-center py-2 tracking-[0.2em] uppercase">
          Limited Releases. Exclusive Drops. Elegance is Now Live.
        </div>
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-ela-gray">
            <Link to="/" className="hover:text-ela-white transition">Home</Link>
            <Link to="/about" className="hover:text-ela-white transition">About</Link>
            <Link to="/portfolio" className="hover:text-ela-white transition">Portfolio</Link>
          </div>
          <Link to="/" className="text-3xl font-display tracking-widest text-ela-white">
            ELACHIM
          </Link>
          <div className="flex items-center space-x-6 text-ela-gray">
            <Link to="/contact" className="text-sm font-semibold hover:text-ela-white transition">Contact</Link>
            <span className="cursor-pointer hover:text-ela-white">🔍</span>
            <span className="cursor-pointer hover:text-ela-white">👤</span>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative cursor-pointer hover:text-ela-white transition"
            >
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-ela-red text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>
      <CartDrawer />
    </>
  )
}
