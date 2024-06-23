import React from 'react';
import './App.css'; // Import the CSS file for App component
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Job Application Form</h1>
      <div className="FormContainer">
        <Form />
      </div>
    </div>
  );
}

export default App;