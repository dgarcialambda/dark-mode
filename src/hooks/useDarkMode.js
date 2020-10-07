
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = (key, initialValues) => {
    const [value, setValue] = useLocalStorage(initialValues, key);

    const handleChanges = newValue => {
        setValue(newValue)
    };

    return [value, setValue, handleChanges]
}