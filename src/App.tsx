import React from 'react';
import { Heart, ShoppingBag, Star, Instagram, Facebook } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Collar artesanal de macramé",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=500",
    category: "Joyería"
  },
  {
    id: 2,
    name: "Jarrón de cerámica pintado a mano",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=500",
    category: "Cerámica"
  },
  {
    id: 3,
    name: "Cojín tejido a mano",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80&w=500",
    category: "Textil"
  },
  {
    id: 4,
    name: "Cuadro decorativo en acuarela",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=500",
    category: "Arte"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">ArteManos</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Heart className="w-6 h-6 text-gray-500 cursor-pointer hover:text-red-500 transition-colors" />
              <ShoppingBag className="w-6 h-6 text-gray-500 cursor-pointer hover:text-indigo-600 transition-colors" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Arte hecho con <span className="text-indigo-600">amor</span>
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Descubre piezas únicas hechas a mano por artesanos locales. Cada producto cuenta una historia y lleva consigo el cariño de su creador.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#productos" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Ver productos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover object-center group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
              <button className="mt-2 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">¿Por qué elegirnos?</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Star className="h-8 w-8 text-indigo-600 mx-auto" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Calidad Artesanal</h3>
                <p className="mt-2 text-base text-gray-500">
                  Cada pieza está hecha a mano con los mejores materiales y atención al detalle.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heart className="h-8 w-8 text-indigo-600 mx-auto" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Hecho con Amor</h3>
                <p className="mt-2 text-base text-gray-500">
                  Nuestros artesanos ponen su corazón en cada creación.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ShoppingBag className="h-8 w-8 text-indigo-600 mx-auto" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Envío Seguro</h3>
                <p className="mt-2 text-base text-gray-500">
                  Empaque especial para proteger tus productos durante el envío.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 LalyCreaciones. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
