import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth';
const firebaseConfig = {

    apiKey: "AIzaSyCeB2mfRQ8LlDBHz_pspoPuS0GC4kFWOAw",
    authDomain: "gericht-2919e.firebaseapp.com",
    projectId: "gericht-2919e",
    storageBucket: "gericht-2919e.appspot.com",
    messagingSenderId: "96071642374",
    appId: "1:96071642374:web:2228abff1d7c3876f34287"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;