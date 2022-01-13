import { useState } from "react";

function Login() {

    const [user, setUser] = useState({

        email: "",
        password: "",

    });

    const { email, password } = user;

    // useEffect()




    // States
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    // + submitDisabled


    // handleChange function



    // handleSubmit


    return (
        <div>Login</div>
        // form inputs email + password + button
    )
}

export default Login;