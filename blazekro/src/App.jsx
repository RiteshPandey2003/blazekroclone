import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUp from "./component/SignUp"
import SingIn from "./component/SingIn"
import Home from "./component/Home"
import Header from "./component/Header"
import Footer from "./component/Footer"
import ProductPage from "./component/ProductPage"
import SingleProduct from "./component/SingleProduct"
import AddToCart from "./component/AddtoCart"


function App() {


  return (
   <Router className = "main">
    <Header/>
    <Routes>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/signin" element={<SingIn/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/single-product/:id" element={<SingleProduct/>} />
      <Route path="/add-to-cart/:id" element={<AddToCart/>} />
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
