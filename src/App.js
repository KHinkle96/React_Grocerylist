import React, {useState} from 'react';

const App = ()=> {
  const [textareaValue, setTextareaValue] = useState("")
  const [grocerys, setGrocerys] = useState([])
  const listgrocerys = grocerys.map((grocery, i)=> <li key={i}>{grocery}</li>)

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
    <ul>{listgrocerys}</ul>
  </div> 
  );
}
export default App;