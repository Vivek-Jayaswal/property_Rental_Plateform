import { useState } from "react";
import RegisterUser from "./RegisterUser";
import LoginUser from "./LoginUser";

const AuthenticateUser = () => {
    const [toggle,setToggle] = useState(false)

    return (
        <div>
            User Authentication
        </div>
    )
}

export default AuthenticateUser;