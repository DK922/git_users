import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [error, setError] = useState(null);

  const handleUserSubmit = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((userData) => {
        return Promise.all([
          userData,
          fetch(userData.repos_url).then((response) => response.json())
        ]);
      })
      .then(([userData, reposData]) => {
        setUserData(userData);
        setReposData(reposData);
        setError(null);
      })
      .catch((error) => {
        setUserData(null);
        setReposData([]);
        setError('Error fetching data');
      });
  };

  return (
    <div className="App">
      <h1>GitHub User Details</h1>
      <UserForm onUserSubmit={handleUserSubmit} />
      {error && <p>{error}</p>}
      {userData && <UserDetails user={userData} repositories={reposData} />}
    </div>
  );
}

export default App;
