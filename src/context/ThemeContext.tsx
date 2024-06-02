import { useContext } from 'react';
import {createContext} from 'react';
import { themeProps } from '../App';


 export const ThemeContext = createContext<themeProps | undefined>(undefined);

 export const useThemeContext = ()=>{
    const themeProps = useContext(ThemeContext);
    if(themeProps === undefined){
        throw new Error('received undefined value as Theme Props');
    }
    return themeProps;
 }

 