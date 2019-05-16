import React , {Component} from 'react';
import './App.css';
import Header from './components/header';
import ProductsContainer from './container/productsContainer';
import Footer from './components/footer';
import MessageContainer from './container/messageContainer';
import CartContainer from './container/cartContainer';
class App extends Component {
    render(){
  return (
<div>      
    <div>
        <Header />
        <ProductsContainer />   
        {/* <!-- Footer --> */}
        <MessageContainer />
        <CartContainer />
        <Footer />
        </div>
    </div>
  );
}
}

export default App;
