import react from "react";

const InputField = (props) => {
    return (
        <div>
            <label> {props.label} </label>
            <input type='text' value={props.value} onChange={(event) => {
                props.setValue(event.target.value);
            }}></input>
        </div>
    )

}

export default InputField;