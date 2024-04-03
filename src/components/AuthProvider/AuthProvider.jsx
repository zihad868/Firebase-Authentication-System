import PropTypes from 'prop-types';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase.config';


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error)
        })
    }


    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error)
        })
    }

    const authInfo = {registerUser, loginUser}

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