import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {v4} from 'uuid';
import { todosActions } from '../../store/todos';

import Todo from '../../models/todo';
import Button from "../UI/Button"
import styles from "./AddTodo.module.css";

const AddTodo = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch();
    const id = v4();

    const addTodo = () => {
        
        if(title === '') {
            return
        }

        const todo = new Todo(id, title);
        dispatch(todosActions.addTodo(todo))
        setTitle('');
    } 

    const userInput = (event) => {
        setTitle(event.target.value);
    }

    return <div className={styles.form}>
<Button add={addTodo} />
<input type='text' placeholder="Enter a Todo..." onChange={userInput} value={title} />
    </div>
}

export default AddTodo 