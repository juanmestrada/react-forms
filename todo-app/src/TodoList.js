import { useEffect, useState } from "react";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const [formActive, setFormActive] = useState(false);
    const [todos, setTodos] = useState([]);
    const toggleForm = () => {
        setFormActive(!formActive);
    }

    const createTodo = (todoData) => {
        setTodos(todos => [...todos, todoData]);
    }

    const removeTodo = id => {
        setTodos(todos => todos.filter(b => b.id !== id));
    }
    return (
        <div className="TodoList">
            <h3>Your Tasks</h3>

            <ul className="TodoList-container">
                {todos.map(t => (<Todo id={t.id} key={t.id} task={t.task} remove={removeTodo} />))}
            </ul>

            <NewTodoForm isActive={formActive} addTodo={createTodo} toggleModal={toggleForm} />
            <button className="TodoList-addbtn" onClick={toggleForm}>+</button>
        </div>
    )
}

export default TodoList;