import React, { useState } from 'react';
import styles from './list.module.css'; 
const List = () => {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');}};
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); };
  return (<div className={styles.container}>
      <h1>Todo List</h1>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Add a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        <button onClick={addTask}>Add</button>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} className={styles.taskItem}>
            {task}
            <button onClick={() => removeTask(index)} className={styles.removeButton}>
              Remove
            </button>
          </li>))}
      </ul>
    </div>);};
export default List;
