import React from 'react'
import {ThemeContext} from '../Contexts/ThemeContext'
export default class NavBar extends React.Component{
    

    render(){
    
        return(
            <ThemeContext.Consumer>
                {(context) => {
                  const{isLightTheme,light,dark}=context
                  const theme=isLightTheme? light:dark
                  return(
            <nav style={{ background : theme.ui, color : theme.syntax }}>
                <h1>Context app</h1>
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
                }  
    }