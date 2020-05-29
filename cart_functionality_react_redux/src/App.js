import React from "react";
import { Route, Switch} from "react-router-dom"
import "./App.css"
import Header from "./Components/Header/header.component"
import ShopPageBody from "../src/Components/shop-body/shop-body.components"
import CheckoutPage from "../src/pages/checkout-page/checkout-page"

class App extends React.Component{
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={ShopPageBody}></Route>
         <Route exact path="/checkout" component = {CheckoutPage}></Route>
        </Switch>
      </div>
    )
  }
}
export default App;
