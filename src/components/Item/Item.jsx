import React, {useState} from "react"
import classes from './Item.module.css'
const Item = (props) => {
    const [check, setCheck] = useState(false)
    return(
        <li 
            onClick={() => check === false ? setCheck(true) : setCheck(false)} className={classes.Item} 
            style={{backgroundColor: props.id % 2 !== 0 ? '#f1f1f1' : '#fff'}}

        >
            <div className="item__start" style={{fontWeight: 500, textDecoration: check === true ? 'line-through' : 'none'}}>
                <span style={{fontWeight: 700}}>{props.id}</span> {props.children}
            </div> 
            <button onClick={() => props.remove(props.items)}>Delete</button>
        </li>
    )
}
export default Item