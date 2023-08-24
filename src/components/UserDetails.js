import React from 'react';
import PropTypes from 'prop-types';

function UserDetails({ user, repositories }) {
  return (
    <div>
      <img src={user.avatar_url} alt={`${user.name}'s avatar`} />
      <h2>{user.name}</h2>
      <p>Location: {user.location}</p>
      <p>Bio: {user.bio}</p>
      <h3>Repositories:</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  repositories: PropTypes.array.isRequired,
};

export default UserDetails;
