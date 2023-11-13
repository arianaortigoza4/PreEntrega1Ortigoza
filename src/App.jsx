import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/Navbar/Navbar'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { NotificationProvider } from './notificacion/NotificationContext.jsx'

function App() {
  return (
    <>
    <NotificationProvider>
        <CartProvider>

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a THE TRUE HELL CAPS" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenido a THE TRUE HELL CAPS'} />} clas/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        
        
      </Routes>
    </BrowserRouter>  
    </CartProvider>
    </NotificationProvider>
   
      
    </>
  )
}

export default App
