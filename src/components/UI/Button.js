

import styles from './Button.module.css';

const Button = (props) => {


    return (
        <button className={styles.btn} onClick={props.add}>Add</button>
    );
}

export default Button