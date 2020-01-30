import React from 'react';
import {ThemeContext} from '../Contexts/ThemeContext'
export default class BookList extends React.Component {    
    
    render() { 
        
        return (
            <ThemeContext.Consumer>
                {(context)=> {
                const {isLightTheme,light,dark}=context
                const theme=isLightTheme? light : dark
                return(
             <div className="book-list" style={{color: theme.syntax, background : theme.bg}} >
                <ul >
                <li style={{background: theme.ui}}>Game of thrones</li>
                <li style={{background: theme.ui}}>Socrates</li>
                <li style={{background: theme.ui}}>Art of war</li>
                </ul>
            </div>
                )
                }
            }
                
            </ThemeContext.Consumer> 
               )
                }
             }
            