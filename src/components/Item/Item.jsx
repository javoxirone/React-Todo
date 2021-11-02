import React, {useState, useRef} from "react"
import classes from './Item.module.css'
import Button from '@mui/material/Button';
const Item = (props) => {
    const [check, setCheck] = useState(false)
    const changeTodoRef = useRef(null)
    const [show, setShow] = useState(false)
    return(
        <li 
            style={{backgroundColor: props.id % 2 !== 0 ? '#f1f1f1' : '#fff'}}
            className={classes.Item}
        >
            <div 
                className="item__start" 
                style={{
                    fontWeight: 500, 
                    textDecoration: check === true ? 'line-through' : 'none',
                    cursor: 'pointer'
                }}
                title="Click to line through!"
                onClick={() => check === false ? setCheck(true) : setCheck(false)} 
            >
                <span style={{fontWeight: 700}}>{props.id}</span> {props.children}
            </div> 
            
            <div className="buttons" style={{display: 'flex', gap: 16}}>
                <div className="manage-content" style={{display: show === false ? 'none' : 'flex', gap: 16}}>
                    <input type="text" ref={changeTodoRef} placeholder="Manage your todo..." />
                    <Button 
                        variant="outlined"
                        color="success"
                        onClick={() => props.manage(props.items, changeTodoRef.current.value) + setShow(false)} 
                    >
                        Save
                    </Button>
                </div>
                <Button 
                    variant="contained"
                    color="success"
                    onClick={() => setShow(show === false ? true : false)}
                    style={{display: show === true ? 'none' : 'flex'}}
                >
                    Manage
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => props.remove(props.items)}
                >
                    Delete
                </Button>
            </div>
        </li>
    )
}
export default Item