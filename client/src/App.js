/*
 * @Author: G.F
 * @Date: 2021-07-24 00:08:10
 * @LastEditTime: 2021-07-28 23:37:54
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /React-Node/client/src/App.js
 */
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Productdes from './screens/Productdes';
import Cartscreen from './screens/cartScreen';
import Loginscreen from './screens/Login';
import Registerscreen from './screens/Register';
import Orderscreen from './screens/Orderscreen';
import OrderInfo from './screens/OrderInfo';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Route path="/" component={Homescreen} exact/>
        <Route path="/product/:id" component={Productdes}/>
        <Route path="/cart" component={Cartscreen} />
        <Route path="/login" component={Loginscreen}/>
        <Route path="/register" component={Registerscreen}/>
        <Route path='/order'component={Orderscreen}/>
        <Route path='/orderInfo/:orderId'component={OrderInfo}/>
      </BrowserRouter>
      {/* <Homescreen/> */}
    </div>
  );
}

export default App;
