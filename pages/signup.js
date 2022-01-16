import SignUpForm from '../components/Signup-Login/signupForm';

import { useState } from 'react';
import Navbar from '../components/Signup-Login/navbar';
import ImageDropDiv from '../components/Signup-Login/imageDrop';
import { Box, Container } from '@mui/material';
import Copyright from '../components/copyright';


const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

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

    const [media, setMedia] = useState(null)
    const [mediaPreview, setMediaPreview] = useState(null)
    const [highlighted, setHighlighted] = useState(false)
    //const inputRef = useRef()

    const handleSubmit = e => e.preventDefault();

    return (
        <Container>
            <Navbar />
            <SignUpForm onSubmit={handleSubmit} />
            <ImageDropDiv
                mediaPreview={mediaPreview}
                setMediaPreview={setMediaPreview}
                setMedia={setMedia}
                //inputRef={inputRef}
                highlighted={highlighted}
                setHighlighted={setHighlighted}
            //handleChange={handleChange}
            />
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default Signup;