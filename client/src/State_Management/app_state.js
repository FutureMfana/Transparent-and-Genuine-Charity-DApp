import React, {useState, createContext} from 'react'

export const AppContext = createContext(null);

export const AppContextProvider = ({children}) =>{
    const [state, setAppState] = useState({
        //userData: ["SGqxaZmHI5u66YK0hxbM","cptbank","Capitec Bank"], //[userId,username,firstName] => Donor
        //userData: ["dUOWrXR3cte04yZ8MfaZ","future","Shoprite"], //[userId,username,firstName] => Verifier
        //userData: ["aHc5JWWKP6seFgA5Hd8a","mjndlela","Musawenkosi"], //[userId,username,firstName] => Needy
        userData:[],
        loginRegisterActive:'login', // Login or Register Tab Button
        isLoggedin:false, //User isLoggedin: true or false
        userType:'',
        account:'',
    });
    return (
        <AppContext.Provider value={{state, setAppState}}>
            {children}
        </AppContext.Provider> 
    );
}