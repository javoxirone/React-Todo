import React, {useState, useRef} from "react"
import classes from './Item.module.css'
const Item = (props) => {
    const [check, setCheck] = useState(false)
    const inputRef = useRef(null)
    return(
        <li 
            style={{backgroundColor: props.id % 2 !== 0 ? '#f1f1f1' : '#fff'}}
            className={classes.Item}
        >
            <div 
                className="item__start" 
                style={{fontWeight: 500, textDecoration: check === true ? 'line-through' : 'none'}}
                onClick={() => check === false ? setCheck(true) : setCheck(false)} 
            >
                <span style={{fontWeight: 700}}>{props.id}</span> {props.children}
            </div> 
            <input type="text" ref={inputRef} />
            <div className="buttons" style={{display: 'flex', gap: 16}}>
                <button onClick={() => props.manage(inputRef.current.value)} className={classes.Manage}>Manage</button>
                <button onClick={() => props.remove(props.items)} className={classes.Delete}>Delete</button>
            </div>
        </li>
    )
}
export default Item