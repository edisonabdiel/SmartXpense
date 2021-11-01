import { useState } from 'react';
import { createTheme } from '@material-ui/core';

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? true : false);
    
    // useEffect(() => {
    //     if(darkMode) {
    //         document.body.classList.add('dark-mode');
    //         localStorage.setItem('theme', 'dark');
    //     } else {
    //         document.body.classList.remove('dark-mode');
    //         localStorage.setItem('theme', 'light');
    //     }
    // }, [darkMode]);

    const toggleDarkMode = () => {
        if (darkMode) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
        setDarkMode(!darkMode);
    };

    const theme = createTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
        },
    });
    
    return [theme, darkMode, toggleDarkMode];
}