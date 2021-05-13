import React, {useState} from 'react'; //rfce autogenerate component
const TodoItem =({list,removeList})=>{
    
   
    return list.map((l,index)=>(
     
         <div key={index} >

         <div className="item" key={l.id} onClick={()=>removeList(l.id)} >

             {l.text}
         </div>

         </div>

    ))

}

export default TodoItem;