import "./Todo.css";

const Todo = ({id, task, remove}) => {
    const handleRemove = () => {
        remove(id);
    }
    return (
        <li >
            {task}
            <button onClick={handleRemove}>x</button>
        </li>
    );
};

export default Todo;