import React, {useState} from 'react';
import TodoItem from './TodoItem';

const ToDoList =(props)=>{

    const [input,setInput] = useState("");
    const [list,setList] = useState([]);
    const add =(e) =>{
      e.preventDefault();

   if(!input || /^\s*$/.test(input)){
       return;
   }
   const newitem={
       id: Math.floor(Math.random()*1000),
       text:input
   }
  
  const newList =[...list,newitem];
  console.log(... newList);
  setList(newList);
 

  setInput('');
    }
const handleChange = e =>{
  setInput(e.target.value);

}

   const remove =(id) =>{
       console.log("remove");
   }
    return(

        <div>

        <form>
        <input onChange={handleChange}  type="text" name="todolist" id="todolist" placeholder="add item..." value={input}/>
        <button onClick={add}>Add</button>
        </form>
        <  TodoItem list={list} romeve={remove}/> 


                 </div>
    )


}

export default ToDoList;