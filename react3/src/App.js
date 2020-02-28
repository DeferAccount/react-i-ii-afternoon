import React from 'react'
import './App.css'
import List from './Components/List'

function App() {
  return (
    <div className='App'>
        <header className='header'>
          <h1>Home</h1>
        </header>
        <List />
            
        
            <button href="#" class="myButton4">Previous</button>
            <button href="#" class="myButton1">Edit</button>
            <button href="#" class="myButton1">Delete</button>
            <button href="#" class="myButton1">New</button>
            <button href="#" class="myButton4">Next ></button>
            
    </div>
  )
}

export default App; 
