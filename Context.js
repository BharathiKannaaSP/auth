import React, { createContext, useContext, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase'
const Auth = createContext();
const Context = ({ children }) => {

    const [user, setUser] = React.useState(null);
    const [alert, setAlert] = React.useState({
        open: false,
        message: '',
        type: 'success'
    })

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        });
    }, [])

    return (
        <Auth.Provider value={{ alert, setAlert, user }}>
            {children}
        </Auth.Provider>
    )
}

export default Context

export const AuthState = () => {
    return useContext(Auth);
};