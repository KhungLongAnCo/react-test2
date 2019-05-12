import React , {Component} from 'react';
import './App.css';
import Header from './components/header';
import ProductsContainer from './container/productsContainer';
import Footer from './components/footer';
import Message from './components/Message';
import Cart from './components/cart';
class App extends Component {
    render(){
  return (
<div>      
    <div>
        <Header />
        <ProductsContainer />   
        {/* <!-- Footer --> */}
        <Message />
        <Cart />
        <Footer />
        </div>
    </div>
  );
}
}

export default App;
