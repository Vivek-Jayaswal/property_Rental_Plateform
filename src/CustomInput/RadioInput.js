const RadioInput = ({ id, type, lableText, setState, name, value }) => {
    return (
        <div>
            <label htmlFor={id}>
                <input type={type} name={name} value={value} id={id} onChange={(e) => setState(e.target.value)} />
                {lableText}
            </label>
        </div>
    )
}
export default RadioInput;