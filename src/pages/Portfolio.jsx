import { useCart } from '../context/CartContext'

export default function Portfolio() {
  const { addToCart } = useCart()

  const designs = [
    { id: 1, title: 'Concept 01', category: 'High-Fashion / Rock', img: '/images/design1.jpg', price: 'R 1200' },
    { id: 2, title: 'Concept 02', category: 'Streetwear / Swagger', img: '/images/design2.jpg', price: 'R 950' },
    { id: 3, title: 'Concept 03', category: 'Luxury / Urban', img: '/images/design3.jpg', price: 'R 1500' },
  ]

  return (
    <div className="py-24 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-display mb-4">The Archive</h1>
        <p className="text-ela-gray uppercase tracking-widest text-sm">Authenticity. Nonchalant. Chaotic.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {designs.map((item) => (
          <div key={item.id} className="group relative">
            <div className="aspect-[4/5] overflow-hidden bg-neutral-900">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="mt-4 flex justify-between items-start border-t border-neutral-800 pt-4">
              <div>
                <h3 className="text-lg font-semibold tracking-wider font-display">{item.title}</h3>
                <p className="text-xs text-ela-gray mt-1 uppercase tracking-widest">{item.category}</p>
                <p className="text-sm font-bold text-ela-red mt-2">{item.price}</p>
              </div>
              <button 
                onClick={() => addToCart(item)}
                className="bg-ela-white text-ela-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-ela-red hover:text-ela-white transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
