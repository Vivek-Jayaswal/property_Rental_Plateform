import { useState } from "react";
import Input from "../CustomInput/Input";

const RegisterUser = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobileNumber,setMobileNumber] = useState("");
    const [password,setPassword] = useState("");

    return (
        <div>
            <Input type={"text"} id={"fullName"} lableText={"Name"} setState={setName} name={"fullName"} />
        </div>
    )
}

export default RegisterUser;