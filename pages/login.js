import { Container, Box } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/Signup-Login/navbar";
import LoginForm from "../components/Signup-Login/loginForm";
import Copyright from "../components/copyright";

const initialValues = {
    firstName: '',
    lastName: '',
    /* username: '', */
    email: '',
    password: '',
    showPassword: false,
    emailHelper: ''
};

function Login() {


    return (
        <Container>
            <Navbar />
            <LoginForm />
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>

        // form inputs email + password + button
    )
}

export default Login;