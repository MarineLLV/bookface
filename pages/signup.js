import SignupForm from '../components/signupForm';
import { useState } from 'react';

function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        bio: "",
        facebook: "",
        youtube: "",
        twitter: "",
        instagram: ""
    });

    const { name, email, password, bio } = user

    //states
    const [showSocialLinks, setSocialLinks] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const [username, setUsername] = useState('')
    const [usenameLoading, setUsernameLoading] = useState(false)
    const [usenameAvailable, setUsernameAvailable] = useState(false)


    return (
        <SignupForm />
    );
}

export default Signup;