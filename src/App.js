import ToDoList from "./Components/ToDoList";
import Particles from "react-particles-js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Particles  className="particles"
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "black",
            					blur: 5
            				}
            			}
            		}
            	}}
             
            />
                   
                 
     <ToDoList/> 
   
    </div>
  );
}

export default App;
