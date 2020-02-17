import React, {useState} from 'react';

const App = ()=> {
  const [textareaValue, setTextareaValue] = useState("")
  const [grocerys, setGrocerys] = useState([])
  const listgrocerys = grocerys.map((grocery, i)=> <li key={i}>{grocery} <input name="groceryList" type="checkbox" />  </li>)

  const storeEnteredText = (event)=> {
    setTextareaValue(event.target.value)
  }
  const handleButtonClick = (event)=> {
    setGrocerys([...grocerys, textareaValue])
  }

  return (
  <div className="App">
    <textarea onChange={storeEnteredText}></textarea>
    <button onClick={handleButtonClick}>Add Item</button>
    <ui>
      {listgrocerys}
      <input name="groceryList" type="checkbox" /> 
    </ui>
  </div> 
  );
}
export default App;