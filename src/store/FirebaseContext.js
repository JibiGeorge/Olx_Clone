import { createContext, useState } from "react";

export const FirebaseContext = createContext(null)


// Another way of creating context
export const AuthContext = createContext(null)
export default function Context ({children}){
    const [user,setUser] = useState(null)

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
        )
}