import { useDispatch, useSelector } from 'react-redux';

import { todosActions } from '../../store/todos';
import styles from './TodoList.module.css'

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);


  const handleTrigger = (id) => {
    dispatch(todosActions.isCheckedTodo(id)); 
  }

    return (
        <ul className={styles.list}>
       {todos.map((todo) => {
         return <div className={styles.listitem}><li key={todo.payload.id} className={todo.payload.isChecked ? styles.check : ''}>{todo.payload.title}</li> <input type="checkbox" onChange={() => {
           handleTrigger(todo.payload.id)
         }}/></div>
       })}
    </ul>
    );
}

export default TodoList