import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.config';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
 } from "firebase/auth";
 


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user)
            }
            else{
                setUser('')
            }
        })

        return () => {
            unSubscribe;
        }

    },[])

    const logOut = () => {
        return signOut(auth) 
    }

    const googleRegister = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const registerUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }


    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {registerUser, loginUser, googleRegister, user, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;