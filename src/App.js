import React from 'react'
import NavBar from './components/NavBar'
import BookList from './components/BookList'
import ThemeContextProvider from './Contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
     <NavBar />
     <BookList/>
     </ThemeContextProvider>  
    </div>
  );
}

export default App;
