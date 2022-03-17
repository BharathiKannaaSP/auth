import React from 'react'
import { AuthState } from '../Context'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
const Alerts = () => {
    const { alert, setAlert } = AuthState();



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert({ open: false });
    };
    return (
        <Snackbar
            open={alert.open}
            autoHideDuration={3000}
            onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity={alert.type}
                variant="filled"
                elevation={10}>
                {alert.message}
            </Alert>

        </Snackbar>
    )
}

export default Alerts