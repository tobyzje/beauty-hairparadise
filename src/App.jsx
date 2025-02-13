import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import TopBar from './components/TopBar'
import HeroSection from './components/HeroSection'
import FeaturedProducts from './components/FeaturedProducts'
import CategorySection from './components/CategorySection'
import Toast from './components/Toast'
import Checkout from './components/Checkout'
import PaymentConfirmation from './components/PaymentConfirmation'
import AdminDashboard from './components/admin/AdminDashboard'
import OrdersList from './components/admin/OrdersList'
import ProductsList from './components/admin/ProductsList'
import CustomersList from './components/admin/CustomersList'
import CustomerProfile from './components/CustomerProfile'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Sitemap from './components/Sitemap'

function App() {
  const [cart, setCart] = useState([])
  const [showToast, setShowToast] = useState(false)
  const [lastAddedProduct, setLastAddedProduct] = useState(null)
  const [orderDetails, setOrderDetails] = useState(null)

  const addToCart = (product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id)
      
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      
      return [...currentCart, { ...product, quantity: 1 }]
    })

    // Vis toast notification
    setLastAddedProduct(product)
    setShowToast(true)
  }

  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId))
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <TopBar />
        <NavBar 
          cart={cart}
          cartItemCount={cart.length}
          removeFromCart={removeFromCart}
        />
        
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <FeaturedProducts onAddToCart={addToCart} />
              <CategorySection />
              <Testimonials />
            </main>
          } />
          <Route 
            path="/checkout" 
            element={
              <Checkout 
                cart={cart}
                removeFromCart={removeFromCart}
                onPaymentComplete={(details) => {
                  setOrderDetails(details)
                  setCart([]) // Tøm kurven efter betaling
                }}
              />
            } 
          />
          <Route 
            path="/payment-confirmation" 
            element={
              <PaymentConfirmation 
                orderDetails={orderDetails}
              />
            } 
          />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/orders" element={<OrdersList />} />
          <Route path="/admin/products" element={<ProductsList />} />
          <Route path="/admin/customers" element={<CustomersList />} />
          <Route path="/profile" element={<CustomerProfile />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>

        <Footer />

        <Toast 
          show={showToast}
          product={lastAddedProduct}
          onClose={() => setShowToast(false)}
        />
      </div>
    </Router>
  )
}

export default App
