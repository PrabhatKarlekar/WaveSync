import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // State to store the message from the backend
  const [message, setMessage] = useState('');

  // useEffect hook to fetch data from the backend once the component is mounted
  useEffect(() => {
    // Fetch message from the Express server running on localhost:3000
    fetch('http://localhost:3000/')
      .then((res) => res.text()) // Parse the response as text
      .then((data) => setMessage(data)) // Set the fetched data to state
      .catch((error) => console.error('Error fetching data:', error)); // Error handling
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div className="App">
      <header className="App-header">
        {/* Display the logo */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Display the message fetched from backend */}
        <p>{message ? message : 'Loading message from server...'}</p>

        {/* Link to learn more about React */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
