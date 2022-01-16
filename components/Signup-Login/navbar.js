import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import Link from 'next/link';
import { useState } from 'react';


function Navbar() {

    /*     const [value, setValue] = useState(0);
    
        const handleChange = (event, newValue) => {
            setValue(newValue);
            console.log(newValue);
        }; */

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs centered>
                <Link href="/login" passHref>
                    <Tab icon={<LoginIcon />} iconPosition="start" label="Login" />
                </Link>

                <Link href="/signup" passHref>
                    <Tab icon={<AppRegistrationIcon />} iconPosition="start" label="Signup" />
                </Link>
            </Tabs>
        </Box>
    );
}

export default Navbar;
