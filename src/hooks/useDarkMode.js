import React from "react";
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (key, initialValues) => {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValues)
    console.log(key, initialValues);
    console.log(someValue);
    
    const handleChange = (e) =>  {
        setSomeValue({
            ...someValue, 
            [e.target.name]: e.target.value

        });
    }
    const darkMode = 
        darkMode ? "dark-mode App" : "App"
     
        
    return [darkMode, someValue, handleChange]
}