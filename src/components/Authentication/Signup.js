import React from 'react'
import { Box, Button, TextField } from "@material-ui/core";
import { AuthState } from '../../Context'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
const Signup = ({ handleClose }) => {
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const { setAlert } = AuthState();
    const handleSumbit = async () => {
        if (password !== confirmPassword) {
            setAlert({
                open: true,
                message: 'Passwords do not match',
                type: 'error'
            })
            return;
        }
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            console.log(result)
            setAlert({
                open: true,
                message: `Account created successfully!.Welcome ${result.user.email}`,
                type: 'success'
            })
            handleClose()
        } catch (error) {
            setAlert({
                open: true,
                message: error.message,
                type: 'error'
            })

        }
    }
    return (
        <Box
            p={3}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
            }}
        >
            <TextField
                variant="outlined"
                type="username"
                placeholder='Enter username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
            />
            <TextField
                variant="outlined"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
            />
            <TextField
                variant="outlined"
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
            />
            <TextField
                variant="outlined"
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
            />
            <Button
                variant="contained"
                size="large"
                style={{ backgroundImage: "linear-gradient(to right, #B78628 0%, #C69320 25%,#DBA514 50%,#EEB609 75%,#FCC201 100%)" }}
                onClick={handleSumbit}
            >
                Sign Up
            </Button>
        </Box>
    )
}

export default Signup