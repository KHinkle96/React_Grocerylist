import React, {useState} from 'react';

const App = ()=> {
  const[textareaValue, setTextareaValue] = useState("")

  const storeEnteredText = (event)=> {
    setTextareaValue(event.target.value)
  }
  const handleButtonClick = (event)=> {
    
  }

  return (
  <div className="App">
    <textarea onChange={storeEnteredText}></textarea>
    <button onClick={handleButtonClick}>Add Item</button>
    <ul></ul>
  </div> 
  );
}
export default App;