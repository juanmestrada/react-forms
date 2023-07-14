import { useEffect, useState } from "react";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";
import Box from "./Box";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const [formActive, setFormActive] = useState(false);
    const toggleForm = () => {
        setFormActive(!formActive);
    }

    const addBox = (boxData) => {
        setBoxes(boxes => [...boxes, boxData]);
    }

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(b => b.id !== id));
    }
    return (
        <div className="BoxList">
            <NewBoxForm formActive={formActive} createNewBox={addBox} toggleForm={toggleForm} />
            <div className="BoxList-library">
                <h1>Box Library</h1>
                <div className="BoxList-container">
                    {boxes.map(b => (
                        <Box
                        key={b.id}
                        id={b.id}
                        width={b.width}
                        height={b.height}
                        handleRemove={removeBox}
                        backgroundColor={b.backgroundColor}
                        />
                    ))}
                </div>
            </div>
            <button className="BoxList-addbtn" onClick={toggleForm}>+</button>
        </div>
    )
};

export default BoxList;