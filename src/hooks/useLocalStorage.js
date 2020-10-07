import React, { useState }  from "react";

export const useLocalStorage = (key, initialValues) => {
    const [storedValue, setStoredValue] = useState((key, initialValues) =>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValues;
    });
    console.log(key, initialValues);

    const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue, initialValues]
}