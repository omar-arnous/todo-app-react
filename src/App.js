import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import './App.css';

// const todos = [
//   {id: 't1', title: 'Learn JSX', chekced: false},
//   {id: 't2', title: 'Learn Props', chekced: false},
//   {id: 't3', title: 'Learn Components', chekced: false}
// ];

function App() {
  // const [todos, setTodos] = useState([]);

  //   const todosStore = useSelector((state) => state.todos.todos);
   
    // useEffect(() => {
    //   setTodos(todosStore);
    // }, [todosStore]);

  return (
    <div className="App">
      <h1 className="logo">Todo List</h1>
      <Layout />
    </div>
  );
}

export default App;
