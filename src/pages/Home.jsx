import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Home() {
  const { addToCart } = useCart()

  const designs = [
    { id: 1, title: 'Concept 01', category: 'High-Fashion / Rock', img: '/images/design1.jpg', price: 'R 1200' },
    { id: 2, title: 'Concept 02', category: 'Streetwear / Swagger', img: '/images/design2.jpg', price: 'R 950' },
    { id: 3, title: 'Concept 03', category: 'Luxury / Urban', img: '/images/design3.jpg', price: 'R 1500' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/images/design1.jpg" 
          alt="Elachim Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl md:text-9xl font-display text-ela-white leading-none mb-4">
            Style <br/> Vibe <br/> Reflect
          </h1>
          <p className="text-lg md:text-xl font-light tracking-widest text-ela-gray mb-8 uppercase">
            Add a little bit of body text
          </p>
          <Link to="/portfolio" className="bg-ela-white text-ela-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-ela-red hover:text-ela-white transition-colors">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Designed to Disrupt */}
      <section className="py-24 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display mb-6">Designed to Disrupt</h2>
        <p className="text-ela-gray leading-relaxed uppercase tracking-widest text-sm md:text-base max-w-3xl mx-auto">
          A fusion of high fashion and streetwear, deeply influenced by hip-hop and rock music. Drawing from diverse cultural experiences, my work embodies a distinct love for classical yet swagger-infused style.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {designs.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-[4/5] overflow-hidden bg-neutral-900">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-semibold tracking-wider">{item.title}</h3>
                  <p className="text-xs text-ela-gray mt-1">{item.category}</p>
                </div>
                <p className="text-xs font-bold text-ela-red">{item.price}</p>
              </div>
              <button 
                onClick={() => addToCart(item)}
                className="mt-4 w-full bg-neutral-900 text-ela-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-ela-red transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee (Scrolling Text) */}
      <div className="border-y border-neutral-800 bg-ela-dark py-4 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block text-sm tracking-[0.3em] uppercase text-ela-gray">
          <span className="mx-8">Limited Edition</span> • 
          <span className="mx-8">New Arrival</span> • 
          <span className="mx-8">Nonchalant</span> • 
          <span className="mx-8">Chaotic</span> • 
          <span className="mx-8">Simple</span> • 
          <span className="mx-8">Limited Edition</span> • 
          <span className="mx-8">New Arrival</span>
        </div>
      </div>
    </div>
  )
}
