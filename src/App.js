import React, {useState} from 'react';

const App = ()=> {
  const [textareaValue, setTextareaValue] = useState("")
  const [grocerys, setGrocerys] = useState([])
  const listgrocerys = grocerys.map((grocery, i)=> <li key={i}>{grocery} <input type="checkbox"/> </li>)

  const storeEnteredText = (event)=> {
    setTextareaValue(event.target.value)
  }
  const handleButtonClick = (event)=> {
    setGrocerys([...grocerys, textareaValue])
  }

  return (
  <div className="App">
    <h1 className="title">Grocery List App</h1>
    <textarea onChange={storeEnteredText}></textarea>
    <div>
    <button onClick={handleButtonClick}>Add Item</button>
    </div>
    <ol>
      {listgrocerys}
    </ol>
  </div> 
  );
}
export default App;