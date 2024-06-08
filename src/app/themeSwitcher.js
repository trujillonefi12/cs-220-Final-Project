import { useEffect, useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ darkClassName }) => {
    // Check the user's preferred color scheme
    const prefersDarkMode = useMemo(() => {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }, []);

    // State to hold the selected theme
    const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

    // Apply the selected theme by adding/removing a class to the body element
    const applyTheme = useCallback(() => {
        if (isDarkMode) {
            document.body.classList.add(darkClassName);
        } else {
            document.body.classList.remove(darkClassName);
        }
    }, [isDarkMode, darkClassName]);

    // Apply the selected theme (dark or light) when the component mounts
    useEffect(() => {
        applyTheme();
    }, [applyTheme]);

    // Toggle between dark and light mode
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div>
            <button className="btn" data-testid="themeSwitcherButton" onClick={toggleTheme}>
                {isDarkMode ? 'To Light Mode' : 'To Dark Mode'}
            </button>
        </div>
    );
};

ThemeSwitcher.propTypes = {
    darkClassName: PropTypes.string,
};

ThemeSwitcher.defaultProps = {
    darkClassName: 'dark',
};

export default ThemeSwitcher;
