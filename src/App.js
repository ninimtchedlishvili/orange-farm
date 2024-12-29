import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/marketplace/Login';
import Register from './pages/marketplace/Register';
import Contact from './pages/dashboard/Contact';
import NotFound from './pages/NotFound';
import AllProducts from './components/marketplace/Product/AllProducts';
import Sidebar from './pages/dashboard/Sidebar/sidebar';
import SingleProduct from './pages/marketplace/SingleProduct';
import Dashboard from './pages/dashboard/index';
import Header from './components/marketplace/Layout/Header';
import Footer from './components/marketplace/Layout/Footer';

function App() {

  const user = {
    name: "John",
    email: "john@gmail.com",
    isAdmin: false,
  }

  return (
    <BrowserRouter>
      {user?.isAdmin ? (
        <div className="flex p-4 gap-4 bg-off_white">
          <Sidebar />
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='customers' element={<div>customers</div>}></Route>
            <Route path='allproducts' element={<AllProducts />}></Route>
            <Route path='geography' element={<div>geography</div>}></Route>
            <Route path='conversations' element={<div>conversations</div>}></Route>
            <Route path='deals' element={<div>deals</div>}></Route>
            <Route path='export' element={<div>export</div>}></Route>
            <Route path='products/:id' element={<SingleProduct />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      ) : (
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<AllProducts />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='products/:id' element={<SingleProduct />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
