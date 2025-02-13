import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CartDropdown from './CartDropdown'
import { 
  ShoppingCartIcon, 
  MagnifyingGlassIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

function NavBar({ cart, cartItemCount, removeFromCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const cartButtonRef = useRef(null)
  const searchInputRef = useRef(null)

  const menuItems = [
    { name: 'Hjem', path: '/' },
    { name: 'Hårpleje', path: '/haircare' },
    { name: 'Hudpleje', path: '/skincare' },
    { name: 'Makeup', path: '/makeup' },
    { name: 'Tilbud', path: '/offers' },
    { name: 'Nyheder', path: '/new' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-pink-500 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold text-gray-800">
                Beauty & Hair
              </span>
              <span className="text-pink-500 text-xl font-semibold">Paradise</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen)
                  setTimeout(() => {
                    searchInputRef.current?.focus()
                  }, 100)
                }}
                className="p-2 hover:text-pink-500 transition-colors"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>

              {/* Search overlay */}
              {isSearchOpen && (
                <>
                  {/* Overlay baggrund */}
                  <div 
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity z-40"
                    onClick={() => setIsSearchOpen(false)}
                  />
                  
                  {/* Search container */}
                  <div className="absolute right-0 mt-2 w-screen md:w-96 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200/50 p-4 z-50 animate-slideDown">
                    <div className="flex items-center">
                      <div className="flex-1 relative">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          ref={searchInputRef}
                          type="text"
                          placeholder="Søg produkter..."
                          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                      </div>
                      <button
                        onClick={() => setIsSearchOpen(false)}
                        className="ml-2 p-2 text-gray-500 hover:text-gray-700"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    </div>
                    
                    {/* Quick links */}
                    <div className="mt-4">
                      <h3 className="text-xs font-medium text-gray-500 uppercase mb-2">Populære søgninger</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Shampoo', 'Hårkur', 'Foundation', 'Mascara'].map((term) => (
                          <button
                            key={term}
                            className="px-3 py-1 text-sm bg-white/80 hover:bg-white border border-gray-200/50 text-gray-700 rounded-full transition-colors"
                            onClick={() => {
                              if (searchInputRef.current) {
                                searchInputRef.current.value = term
                                searchInputRef.current.focus()
                              }
                            }}
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* User */}
            <Link 
              to="/profile"
              className="p-2 hover:text-pink-500 transition-colors"
            >
              <UserIcon className="h-5 w-5" />
            </Link>

            {/* Cart */}
            <div className="relative">
              <button
                ref={cartButtonRef}
                className="p-2 hover:text-pink-500 transition-colors relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingCartIcon className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              <CartDropdown
                cart={cart}
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                removeFromCart={removeFromCart}
              />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-pink-500 transition-colors px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar 