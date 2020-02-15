import React, {useState} from 'react';

const App = ()=> {
  const[textareaValue, setTextareaValue] = useState("")

  const storeEnteredText = (event)=> {
    setTextareaValue(event.target.value)
  }

  return (
  <div className="App">
    <textarea onChange={storeEnteredText}></textarea>
    <button>Add Item</button>
    <ul></ul>
  </div> 
  );
}
export default App;