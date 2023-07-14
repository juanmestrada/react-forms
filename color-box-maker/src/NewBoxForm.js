import { useState } from "react";
import { v4 as uuid } from 'uuid';
import "./NewBoxForm.css";

const NewBoxForm = ({formActive, createNewBox, toggleForm}) => {
    const [boxDetails, setBoxDetails] = useState({
        height: "100",
        width: "200",
        backgroundColor: "#ff0000"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setBoxDetails(boxDetails => ({
            ...boxDetails,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewBox({...boxDetails, id: uuid()});
        toggleForm();
        setBoxDetails({height: "100", width: "200", backgroundColor: "#ff0000"});
    }
    return (
        <div className={`NewBoxForm ${formActive ? 'active' : ''}`}>
            <div className="NewBoxForm-backdrop">
                <form onSubmit={handleSubmit}>
                    <h2>Box Details</h2>
                    <div className="NewBoxForm-input-group">
                        <label htmlFor="height">Height</label>
                        <input id="height" name="height" type="text" placeholder="height in pixels..." value={boxDetails.height} onChange={handleChange} />
                    </div>
                    <div className="NewBoxForm-input-group">
                        <label htmlFor="width">Width </label>
                        <input id="width" name="width" type="text" placeholder="width in pixels..." value={boxDetails.width} onChange={handleChange} />
                    </div>
                    <div className="NewBoxForm-input-group">
                        <label htmlFor="backgroundColor">Color </label>
                        <input id="backgroundColor" name="backgroundColor" type="color"  value={boxDetails.backgroundColor} onChange={handleChange} />
                    </div>
                    <div className="NewBoxForm-input-group text-end">
                        <button className="NewBoxForm-btn">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default NewBoxForm;