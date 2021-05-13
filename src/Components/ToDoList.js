import React, {useState,useEffect} from 'react';
import TodoItem from './TodoItem';

const ToDoList =(props)=>{

    const [input,setInput] = useState("");
    const [list,setList] = useState([]);
    
   useEffect(()=>{
       
    //localstorage
    const data=localStorage.getItem("listItem");
    if(data){
        setList(JSON.parse(data));
    }
    
    localStorage.setItem('listItem',JSON.stringify(list))
   

},[])

   useEffect(()=>{
       
        //localstorage
        
        localStorage.setItem('listItem',JSON.stringify(list))
       

    },)
    const add =(e) =>{
      e.preventDefault();

   if(!input || /^\s*$/.test(input)){
       return;
   }
 
 //  const localdata=localStorage.getItem('listItem');
  //const newList =[...list,newitem];
 // console.log(localdata);
  // list=JSON.parse(localdata);
   //setList(JSON.parse(localdata));
   const newitem={
    id: Math.floor(Math.random()*1000),
    text:input
}
   //console.log(list);
  const newList =[...list,newitem]

  setList(newList);
 

  setInput('');
    }
const handleChange = e =>{
  setInput(e.target.value);

}

   const removeList =id =>{
       const removeArr= [...list].filter(l=>l.id !==id);

       setList(removeArr);
   }
    return(

        <div className="listfrm">
           <h2 className="font-family">To-Do List</h2>
        <form>
        <input className="inputTxt" onChange={handleChange}  type="text" name="todolist" id="todolist" placeholder="add item..." value={input}/>
        <button className="btnAdd" onClick={add}>Add</button>
        </form>
        <  TodoItem  list={list} removeList={removeList}/> 


                 </div>
    )


}

export default ToDoList;