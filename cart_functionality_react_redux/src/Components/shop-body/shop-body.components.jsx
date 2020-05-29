import React from "react"
import "./shop-body.styles.scss"
import SHOP_DATA from "../../Datas/shop-data"
import ShopEachType from "../shop-each-type/shop-each-type.component"

class ShopPageBody extends React.Component{
  constructor( props ){
      super( props )
      this.state = {
          allCollcetionItems : SHOP_DATA
      }
  }
    
  render(){
      const { allCollcetionItems } = this.state;
      return(
          <div className="shop-page-body">
          {
            allCollcetionItems.map(
                ({id, ...otherProps}) => (
                    <ShopEachType key={id} {...otherProps}/>
                )
            )
          }
          </div>
      )
  }
}
export default ShopPageBody;