import { useState } from "react";
import { v4 as uuid } from 'uuid';
import "./NewTodoForm.css";

const NewTodoForm = ({isActive, addTodo, toggleModal}) => {
    const [formData, setFormData] = useState({task: ""});

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTodo({...formData, id: uuid()});
        toggleModal();
        setFormData({task: ""});
    }
    return (
        <div className={`NewTodoForm ${isActive ? "active" : ""}`}>
            <div className="NewTodoForm-backdrop">
                <form action="#" id="todoForm" onSubmit={handleSubmit}>
                    <input type="text" name="task" id="task" placeholder="Add a new task..." required="" value={formData.task} onChange={handleChange} />
                    <input type="submit" value="Add Task" />
                </form>
            </div>
        </div>
    );
}

export default NewTodoForm;