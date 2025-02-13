function HeroSection() {
  return (
    <div className="relative bg-gray-100 h-[500px] mb-12">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Naturlig Skønhed Starter Her</h1>
          <p className="text-xl mb-8">Opdag vores eksklusive kollektion af økologiske og naturlige skønhedsprodukter</p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Shop Nu
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 