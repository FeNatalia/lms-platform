// NPM Package
import { createContext, useContext, useState } from "react";

// Properties
const AuthContext = createContext(null);

export function AuthProvider({ children}) {
    // Local state
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({});

    return (
        <AuthContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}