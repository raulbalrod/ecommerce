import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ProductDetail from 'containers/ProductDetail';
import AllProducts from 'containers/AllProducts';
import Home from 'containers/Home';
import Collections from 'containers/Collections';
import Shirts from 'containers/Collections/shirts';
import Tees from 'containers/Collections/tees';
import Caps from 'containers/Collections/caps';
import { CartProvider } from 'context/cart';
import Hoodies from 'containers/Collections/hoodies';

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collections/all' element={<AllProducts />} />
          <Route path='/collections/' element={<Collections />} />
          <Route path='/collection/shirts' element={<Shirts />} />
          <Route path='/collection/tees' element={<Tees />} />
          <Route path='/collection/hoodies' element={<Hoodies />} />
          <Route path='/collection/caps' element={<Caps />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
