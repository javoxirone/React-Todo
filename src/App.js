import React, {useState, useEffect, useRef} from "react";
import List from "./components/List/List";
import "./styles/App.css"
function App() {
  const [items, setItems] = useState([
    {id:1, title: 'Hello World!'},
  ])
  const inputRef = useRef(null)
  const sendItem = () => {
    setItems([...items, {id: Date.now(), title: inputRef.current.value}])
    inputRef.current.value = ''
  }
  const removeItem = (item) => {
    setItems(items.filter(i => i.id !== item.id))
  }
  const manageItem = (value) => {
    setItems(items.forEach(item => [...items, item.title = value]))
  }
  useEffect(() => {
    console.log('render items!')
  })
  return (
    <div className="App">
      <div className="app__content">
        <div className="app__header">
          <input ref={inputRef} type="text" />
          <button onClick={sendItem}>Send</button>
        </div>
        
        <List items={items} manage={manageItem} remove={removeItem} />
      </div>
    </div>
  );
}

export default App;