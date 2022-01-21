import SignUpForm from '../components/Signup-Login/signupForm';

import { useState } from 'react';
import Navbar from '../components/Signup-Login/navbar';
import { Box, Container } from '@mui/material';
import Copyright from '../components/copyright';




function Signup() {




    return (
        <Container>
            <Navbar />
            <SignUpForm />
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default Signup;