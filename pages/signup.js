import SignupForm from '../components/signupForm';
import { Fragment, useState } from 'react';
import ImageDropDiv from '../components/Signup-Login/imageDrop';

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
    const inputRef = useRef()

    const handleSubmit = e => e.preventDefault();

    return (
        <Fragment>
            <ImageDropDiv
                mediaPreview={mediaPreview}
                setMediaPreview={setMediaPreview}
                setMedia={setMedia}
                inputRef={inputRef}
                highlighted={highlighted}
                setHighlighted={setHighlighted}
                handleChange={handleChange}
            />

            <SignupForm onSubmit={handleSubmit} />
        </Fragment>
    );
}

export default Signup;