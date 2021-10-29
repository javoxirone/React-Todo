import React, {useState} from "react";
import List from "./components/List/List";
import "./styles/App.css"
function App() {
  const [items, setItems] = useState([
    {id:1, title: 'Hello World!'},
  ])
  const [value, setValue] = useState('')
  const sendItem = () => {
    setItems([...items, {id: Date.now(), title: value}])
  }
  const removeItem = (item) => {
    setItems(items.filter(i => i.id !== item.id))
  }
  return (
    <div className="App">
      <div className="app__content">
        <div className="app__header">
          <input type="text" value={value} onChange={e => setValue(e.target.value)} />
          <button onClick={sendItem}>Send</button>
        </div>
        
        <List items={items} remove={removeItem} />
      </div>
    </div>
  );
}

export default App;