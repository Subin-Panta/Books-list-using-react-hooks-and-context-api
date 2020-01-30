import React from 'react'
import NavBar from './components/NavBar'
import BookList from './components/BookList'
import ThemeContextProvider from './Contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import AuthContextProvider from './Contexts/AuthContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookList/>
          <ThemeToggle />
        </AuthContextProvider>
     </ThemeContextProvider>
    </div>
  );
}

export default App;
