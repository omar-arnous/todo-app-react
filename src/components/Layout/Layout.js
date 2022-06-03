import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';

import styles from './Layout.module.css';

const Layout = () => {
    return<main className={styles.main}>
        <AddTodo />
        <TodoList />
    </main>
}

export default Layout;