import './DarkMode.css';
import { useThemeContext } from '../../context/ThemeContext';

export function DarkModeToggle() {
const themeProps = useThemeContext();
 return (
        <div className='toggle'>
            <div className='toggle-bar' onClick={themeProps.isChecked} data-theme = {themeProps?.theme ? "dark": "light"} >
            <div className={`toggle-sphere ${themeProps.theme ? "dark": "light"}`}></div>
        </div>
        </div>
    )
};