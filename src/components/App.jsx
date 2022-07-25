import React, { useState } from "react";
import Todoitem from "./Todoitem";
function App() {
    const [inputText,setInputText]=useState("");
    const [items, setitems]=useState([]);

    function handleChange(event){
       const newvalue=event.target.value;
       setInputText(newvalue);
    }

    function addItem(){
         setitems(previtem=>{
            return [...previtem,inputText];
         });
         setInputText("");
        }
     
      function deleteitem(id){
        setitems(previtem=>{
           return previtem.filter((item,index)=>{
              return index!=id;
           })
         });
      }  
    return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
        <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem,index)=>(
            <Todoitem 
            key={index}
            id={index}
            text={todoitem}
            onChecked={deleteitem}
            />
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
