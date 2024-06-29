"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";




const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const router = useRouter();

    const [currentUser, setcurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const [loggedIn, setLoggedIn] = useState(currentUser !== null);

    const logout = () => {
        localStorage.removeItem("user");
        //remove cookie
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        setcurrentUser(null);
        setloggedIn(false);
        router.push("/login");
    }

    return <AppContext.Provider value={{ currentUser, setcurrentUser, loggedIn, setLoggedIn, logout }}>
        {children}
    </AppContext.Provider>
}


const useAppContext = () => useContext(AppContext);
export default useAppContext;