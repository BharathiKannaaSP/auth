import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Tab, Tabs, AppBar, Box } from "@material-ui/core";
import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import { AuthState } from '../../Context';
import video from '../../assets/videos/video.mp4';
import './Auth.css'
const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        color: "white",
        borderRadius: 10,
    },
    google: {
        padding: 24,
        paddingTop: 0,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: 20,
        fontSize: 20,
    },
}));

export default function AuthModal() {
    const { setAlert } = AuthState();
    const classes = useStyles();
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                setAlert({
                    open: true,
                    message: `Login Successful! Welcome ${res.user.email}`,
                    type: 'success'

                })

                handleClose();
            })
            .catch((error) => {
                console.log(error);
                return;
            });
    };

    return (
        <div className="app__video">


            <video autoPlay muted loop id="myVideo" style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                top: 0,
                left: 0,

            }}>
                <source src={video} type="video/mp4" />

            </video>
            <div className="app__video-overlay flex__center">
                <div
                    className="app__video-overlay_circle flex__center"
                >

                </div>
            </div>
            <Button
                style={{

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: "50%",
                    left: "50%",
                    borderRadius: "5px",
                    transform: "translate(-50%, -50%)",
                    position: "absolute",
                    color: "gold",
                    fontSize: "20px",
                }}
                onClick={handleOpen}
            >
                Login

            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <AppBar
                            position="static"
                            style={{
                                backgroundImage: "linear-gradient(to right, #B78628 0%, #C69320 25%,#DBA514 50%,#EEB609 75%,#FCC201 100%)",
                                color: "black",
                            }}
                        >
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="fullWidth"
                                style={{ borderRadius: 10, color: 'black' }}

                            >
                                <Tab label="Login" />
                                <Tab label="Sign Up" />
                            </Tabs>
                        </AppBar>
                        {value === 0 && <Login handleClose={handleClose} />}
                        {value === 1 && <Signup handleClose={handleClose} />}
                        <Box className={classes.google}>
                            <span style={{ color: 'black' }}>OR</span>
                            <FcGoogle
                                style={{ width: "100%", fontSize: 30, cursor: "pointer" }}
                                onClick={signInWithGoogle}
                            />
                        </Box>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}





