import { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

import Logo from '../logo';
import Link from 'next/link';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const initialValues = {
    firstName: '',
    lastName: '',
    /* username: '', */
    email: '',
    password: '',
    showPassword: false,
    emailHelper: ''
};

const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

function SignUpForm() {
    const classes = useStyles();

    const [user, setUser] = useState(initialValues);
    const { name, email, password } = user;


    const [username, setUsername] = useState('');
    const [usernameAvailable, setUsernameAvailable] = useState(false);

    //const [emailHelper, setEmailHelper] = useState('');


    //const [errorMessage, setErrorMessage] = useState(null);

    const [submitDisabled, setSubmitDisabled] = useState(true);

    function handleChange(event) {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        });
    }

    const handleClickShowPassword = () => {
        setUser({
            ...user,
            showPassword: !user.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => event.preventDefault();

    /* const handleCheck = (event) => {
        switch (event.target.id) {
            case 'email':
                const { name, value } = event.target;
                setUser({
                    ...user,
                    [name]: value,
                });

                regexEmail.test(user.email)

                if (!regexEmail) {
                    setUser({
                        ...user,
                        emailHelper: 'Invalid email'
                    })
                } else {
                    setUser({
                        ...user,
                        emailHelper: ''
                    })
                }
                break;
            default:
                break;
        }
    } */


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Logo />
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            {/* First name */}
                            <FormControl
                                variant="outlined"
                                required
                                fullWidth
                            >
                                <InputLabel>
                                    First name
                                </InputLabel>
                                <OutlinedInput
                                    id="firstName"
                                    autoFocus
                                    name="firstName"
                                    /* autoComplete="current-first-name" */
                                    type="text"
                                    value={user.firstName}
                                    onChange={handleChange}
                                    label="First name"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {/* Last name */}
                            <FormControl
                                variant="outlined"
                                required
                                fullWidth
                            >
                                <InputLabel>
                                    Last name
                                </InputLabel>
                                <OutlinedInput
                                    name="lastName"
                                    id="lastName"
                                    /* autoComplete="current-last-name" */
                                    type="text"
                                    value={user.lastName}
                                    onChange={handleChange}
                                    label="Last name"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            {/* Username */}
                            <FormControl
                                variant="outlined"
                                required
                                fullWidth
                            >
                                <InputLabel>
                                    Username
                                </InputLabel>
                                <OutlinedInput
                                    /* error={!usernameAvailable} */
                                    name="username"
                                    id="userName"
                                    /* autoComplete="current-username" */
                                    type="text"
                                    value={username}
                                    onChange={event => {
                                        setUsername(event.target.value)
                                        if (regexUserName.test(event.target.value)) {
                                            setUsernameAvailable(true);
                                        } else {
                                            setUsernameAvailable(false);
                                        }
                                    }}
                                    label="Username"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            {/* Email */}
                            <FormControl
                                variant="outlined"
                                required
                                fullWidth
                            >
                                <InputLabel>
                                    Email
                                </InputLabel>
                                <OutlinedInput
                                    name="email"
                                    /*  error={user.emailHelper.length !== 0} */
                                    id="email"
                                    /* autoComplete="current-email" */
                                    type="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    label="Email"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            {/* Password */}
                            <FormControl
                                variant="outlined"
                                required
                                fullWidth
                            >
                                <InputLabel
                                    htmlFor="outlined-adornment-password"
                                >
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    id="password"
                                    name="password"
                                    /* autoComplete="current-password" */
                                    type={user.showPassword ? 'text' : 'password'}
                                    value={user.password}
                                    onChange={handleChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {user.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Log in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default SignUpForm;