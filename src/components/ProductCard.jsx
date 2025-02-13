import { useState } from 'react'

function ProductCard({ product, onAddToCart }) {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    onAddToCart(product)
    
    // Reset animation efter 500ms
    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xl font-bold text-gray-900">{product.price} kr</span>
          </div>
          <button 
            onClick={handleAddToCart}
            className={`w-full mt-4 py-3 rounded-lg transition-all transform
              ${isAdding 
                ? 'bg-green-500 text-white scale-95' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            disabled={isAdding}
          >
            {isAdding ? 'Tilføjet ✓' : 'Læg i kurv'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard 