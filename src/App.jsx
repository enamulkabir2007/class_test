
import Header from './Components/Header'
import Footer from './Components/Footer'
import Carousel from './Components/Carousel'
import Products from './Components/Products'

function App() {
  
  return (
     <>
      <Header></Header>
      <Carousel></Carousel>
      <div>
        <h1 className='text-center text-4xl font-bold my-10'>Our Products</h1>
        <Products></Products>
      </div>
      
      

      <Footer></Footer>
      
     
     </>
  )
}

export default App
