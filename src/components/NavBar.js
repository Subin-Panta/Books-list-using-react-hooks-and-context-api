import React, {useContext}from 'react'
import {ThemeContext} from '../Contexts/ThemeContext'
import { AuthContext } from '../Contexts/AuthContext'

const NavBar = () => {
    const{isLightTheme,light,dark}= useContext(ThemeContext)
    const {isAuthenticated, toggleAuth}=useContext(AuthContext)
    const theme=isLightTheme? light:dark
    return ( 
        <nav style={{ background : theme.ui, color : theme.syntax }}>
                <h1>BookList</h1>
                  <div onClick={toggleAuth}>{isAuthenticated ? 'Logged in': 'logged out'}</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </nav>
     );
}
 
export default NavBar;