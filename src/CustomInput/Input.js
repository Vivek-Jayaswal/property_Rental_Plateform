const Input = ({id,type,lableText,setState,name,value,placeholder}) => {
    return (
        <div>
            <label htmlFor={id}>{lableText}</label><br />
            <input type={type} name={name} value={value} id={id} onChange={(e) => setState(e.target.value)} placeholder={placeholder}/>
        </div>
    )
}

export default Input;