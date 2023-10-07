import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

import NavBar from './componentes/Navbar/Navbar'


function App() {
  return (
    <>
   <NavBar />
   <ItemListContainer greeting={'Bienvenido a mi eCommerce'}/>
      
    </>
  )
}

export default App
