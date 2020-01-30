import React from 'react'
export default class NavBar extends React.Component{
    render(){
        return(
            <nav>
                <h1>Context app</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        )
    }
}