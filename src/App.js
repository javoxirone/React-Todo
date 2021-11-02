import React, {useState, useEffect, useRef, useMemo} from "react";
import List from "./components/List/List";
import "./styles/App.css"
import Button from '@mui/material/Button';
function App() {
  const [items, setItems] = useState([
    {id:1, title: 'Hello World!'},
    {id:2, title: 'Javohir!'},
  ])
  const [searchValue, setSearchValue] = useState('')
  const inputRef = useRef(null)
  const sendItem = () => {
    setItems([...items, {id: Date.now(), title: inputRef.current.value}])
    inputRef.current.value = ''
  }
  const removeItem = (item) => {
    setItems(items.filter(i => i.id !== item.id))
  }
  const manageItem = (item, newValue) => {
    item.title = newValue
    setItems([...items, item])
    setItems([...items])
  }
  const searchHandler = useMemo(() => {
    if(!searchValue) return items

    return items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue, items])
  useEffect(() => {
    console.log(items);
  }, [items])
  
  return (
    <div className="App">
      <div className="app__content">
        <div className="app__header">
          <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search your todo..." />
        </div>
        <List items={searchHandler} manage={manageItem} remove={removeItem} />
        <div className="app__header">
          <input type="text" ref={inputRef} placeholder="Input todo..." style={{width: '100%'}} />
          <Button variant="contained" color="primary" onClick={sendItem}>Send</Button>
        </div>
      </div>
    </div>
  );
}

export default App;