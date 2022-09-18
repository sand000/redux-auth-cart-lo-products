import './App.css';
import CartItems from './Pages/MyCartItems';
import Products from './Pages/Products';
import Navbar from "./Components/Navbar";
import Login from './Pages/Login';
import RequireAuth from './HOC/RequireAuth';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
        <Route path="login" element={<Login/>}></Route>
        <Route path="" element={<Products/>}></Route>
        <Route path="cart" element={
          <RequireAuth>
            <CartItems/>
          </RequireAuth>}>
        </Route>
       </Routes>
    </div>
  );
}

export default App;
