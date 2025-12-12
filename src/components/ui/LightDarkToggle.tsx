import React from 'react';

export default function LightDarkToggle() {

    const [mode, setMode] = React.useState(
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );

    const toggleMode = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.remove(mode);
        document.documentElement.classList.add(newMode);
        localStorage.setItem('mode', newMode);
        setMode(newMode);
    }

    return (
        <label htmlFor="input-light-dark-toggle" className="switch">
            { mode === 'dark' ? '🌒': ' ' }
            <input type="checkbox" onChange={toggleMode} 
                checked={mode === 'dark'} 
                id="input-light-dark-toggle"/>
            <span className="slider"></span> 
            { mode === 'light' ? '🌞': '' }
        </label>
    )
}