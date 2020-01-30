import React from 'react'
import {ThemeContext} from '../Contexts/ThemeContext'
import { AuthContext } from '../Contexts/AuthContext'
export default class NavBar extends React.Component{
    

    render(){
    
        return(
            <AuthContext.Consumer>
                {(authContext) => {
                    const {isAuthenticated, toggleAuth}=authContext
                    return(
            <ThemeContext.Consumer>
                {(themecontext) => {
                  const{isLightTheme,light,dark}=themecontext
                  const theme=isLightTheme? light:dark
                  return(
            <nav style={{ background : theme.ui, color : theme.syntax }}>
                <h1>BookList</h1>
                  <div onClick={toggleAuth}>{isAuthenticated ? 'Logged in': 'logged out'}</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </nav>
                    )
                }}
            </ThemeContext.Consumer>
                    )
                }}
            </AuthContext.Consumer>
                )
                }  
    }