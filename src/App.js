import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInterestChange = (interest) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(item => item !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action with the form data, such as sending it to a server
    // For now, let's just set formSubmitted to true
    setFormSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />

        <label>Interests:</label>
        <div>
          <input type="checkbox" id="music" checked={interests.includes('music')} onChange={() => handleInterestChange('music')} />
          <label htmlFor="music">Music</label>
        </div>
        <div>
          <input type="checkbox" id="sports" checked={interests.includes('sports')} onChange={() => handleInterestChange('sports')} />
          <label htmlFor="sports">Sports</label>
        </div>
        {/* Add more interest checkboxes as needed */}

        <button type="submit">Subscribe</button>
      </form>

      {formSubmitted && (
        <p>Thank you for subscribing, {name}! Your interests: {interests.join(', ')}.</p>
      )}
    </main>
  );
}

export default App;
