import React from "react";
import "./shop-each-type.styles.scss"
import EachItem from "../shop-each-item/shop-each-item.component"


const ShopEachType = ({title,items}) => (
    <div className="holder-by-category">
    <div className="category-title">
        {title}
    </div>
    <div className="items-holder">
    {
            items.map(
            item => (
                <EachItem item={item } key={item.id}/>
            )
        )
        }
    </div>
    </div>
)
export default ShopEachType;