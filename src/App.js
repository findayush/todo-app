import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [currentInp, setcurrentInp] = useState('');
  const [taskList, setTaskList] = useState([]);

  function currentTodo(e) {
    console.log(e.target.value);
    setcurrentInp(e.target.value);
  }
  function addTask() {
    setTaskList(taskList.concat([{id: Math.random(),taskVal: currentInp, isDone:false}]));

  }

  function listItemClick(id){

    console.log("id",id);


  }
  return (
    <div className="App">
      <header className="wrapper">
      <input type="text" defaultValue="" placeholder="Enter your todo here" onChange={currentTodo}/>
    <button onClick={addTask}>Add</button>
      </header>
      <ul className="list">
      {taskList &&
      taskList.length>0 &&
      taskList.map(item => {
        return (
          <li className="task"id={item.id} onClick={() => listItemClick(item.id)}>{item.taskVal}</li>
        );
      })}
        
      </ul>
    </div>
  );
}

export default App;
