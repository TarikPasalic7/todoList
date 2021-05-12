import React, {useState} from 'react'; //rfce autogenerate component
import ToDoList from './ToDoList';
const TodoItem =({list,remove})=>{
    
   
    return list.map((l,index)=>(
     
         <div key={index}>

         <div key={l.id} onClick={()=>remove(l.id)} >

             {l.text}
         </div>

         </div>

    ))

}

export default TodoItem;