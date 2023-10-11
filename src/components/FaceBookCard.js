import React from 'react';

const cardStyle = {
  display: 'flex',
  border: '1px solid #000',
  margin: '10px',
  maxWidth: '600px',
  padding: '10px',
  backgroundColor: '#fff',
};

const selectedStyle = {
  backgroundColor: '#61dafb',
};

const imageStyle = {
  flex: 1,
  marginRight: '10px',
};

const imgStyle = {
  maxWidth: '100px',
  height: 'auto',
};

const detailsStyle = {
  flex: 2,
};

const FaceBookCard = ({ profile }) => (
  <div style={{ ...cardStyle, ...(profile.isFind ? selectedStyle : {}) }}>
    <div style={imageStyle}>
      <img
        src={profile.img}
        alt={`${profile.firstName}'s profile picture`}
        style={imgStyle}
      />
    </div>
    <div style={detailsStyle}>
      <p>
        <strong>First Name</strong>: {profile.firstName}
      </p>
      <p>
        <strong>Last Name</strong>: {profile.lastName}
      </p>
      <p>
        <strong>Country</strong>: {profile.country}
      </p>
      <p>
        <strong>Type</strong>: {profile.isStudent ? 'Student' : 'Teacher'}
      </p>
    </div>
  </div>
);

export default FaceBookCard;