import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  sendEmailVerification,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState({});
   const [loading, setLoading] = useState(true); 
   const handleSignInProvider = (provider) => {
      setLoading(true); 
      return signInWithPopup(auth, provider); 
   } 

   const EmailSignIn = (email, password) => {
         setLoading(true); 
         return signInWithEmailAndPassword(auth, email, password); 
   }

   const CreateUser = (email, password) => {
      setLoading(true); 
      return createUserWithEmailAndPassword(auth, email, password); 
   }
   const logOut = () => {
      return signOut(auth); 
   }

   const updateUserDetails = (name, photoURL) => {
      return updateProfile(auth.currentUser, {
         displayName: name, 
         photoURL: photoURL, 
      })
   }

   const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser); 
   }
   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
          
      if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser); 
      }
         setLoading(false);
      })

      return () => {
         unsubscribe()
      }; 
   },[])

   const authInfo = { user , handleSignInProvider, logOut,  EmailSignIn, CreateUser, updateUserDetails , loading, verifyEmail , setLoading };
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
