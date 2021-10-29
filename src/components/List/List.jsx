import React from "react"
import Item from "../Item/Item"
import classes from './List.module.css'
const List = ({items, remove}) => {
    // const deleteHandler = () => {
    // }
    
    return(
        <ul className={classes.List}>
            {/* <Item>Hello World</Item> */}
            {items.map((item, index) => 
                <Item id={index + 1} remove={remove} items={item} key={item.id}>{item.title}</Item>
            )}
        </ul>
    )
}
export default List