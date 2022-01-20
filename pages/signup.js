import SignUpForm from '../components/Signup-Login/signupForm';

import { useState } from 'react';
import Navbar from '../components/Signup-Login/navbar';
import { Box, Container } from '@mui/material';
import Copyright from '../components/copyright';


const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

function Signup() {


    /* //states
    const [showSocialLinks, setSocialLinks] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const [username, setUsername] = useState('')
    const [usenameLoading, setUsernameLoading] = useState(false)
    const [usenameAvailable, setUsernameAvailable] = useState(false)

    const [media, setMedia] = useState(null)
    const [mediaPreview, setMediaPreview] = useState(null)
    const [highlighted, setHighlighted] = useState(false)
    //const inputRef = useRef() */

    return (
        <Container>
            <Navbar />
            <SignUpForm />
            {/* <ImageDropDiv
                mediaPreview={mediaPreview}
                setMediaPreview={setMediaPreview}
                setMedia={setMedia}
                //inputRef={inputRef}
                highlighted={highlighted}
                setHighlighted={setHighlighted}
            /> */}
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default Signup;