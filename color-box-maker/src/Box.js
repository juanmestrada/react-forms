import "./Box.css";

const Box = ({id, height, width, backgroundColor, handleRemove}) => {
    const remove = () => handleRemove(id);

    return (
        <div className="Box" style={{
            height: `${height}px`,
            width: `${width}px`,
            backgroundColor
        }}>
            <button className="Box-btn" onClick={remove}>x</button>
        </div>
    );
};

export default Box;