import profiles from '../data/berlin.json'
import FaceBookCard from './FaceBookCard';
import React, { useState } from 'react';

const FaceBook = () => {
  const [filterCountry, setFilterCountry] = useState('');
  const [search, setSearch] = useState('');
  const [sortLastName, setSortLastName] = useState(false);
  const countries = profiles.map((i) => i.country);
  const uniqueCountries = Array.from(new Set(countries));

  const filterByCountry = (profile) => {
    return filterCountry === '' || profile.country === filterCountry;
  };

  const filterByName = (profile) => {
    return search === '' || profile.firstName.toLowerCase().includes(search.toLowerCase());
  };

  const sortProfilesByLastName = (profiles) => {
    return sortLastName
      ? profiles.slice().sort((a, b) => a.lastName.localeCompare(b.lastName))
      : profiles;
  };

  const filteredProfiles = profiles
    .filter(filterByCountry)
    .filter(filterByName);

  const sortedProfiles = sortProfilesByLastName(filteredProfiles);

  return (
    <div>
      <div className="d-flex form-home justify-content-center">
        <input
          className="form-control me-2 mb-1"
          style={{ width: '300px' }}
          type="text"
          placeholder="Search First Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className={`border mb-1 ${sortLastName ? 'btn btn-info' : 'btn btn-light'}`}
          onClick={() => setSortLastName(!sortLastName)}
        >
          Sort Last Name
        </button>
      </div>
      <button onClick={() => setFilterCountry('')} style={{ marginRight: '2px' }}>
        All
      </button>
      {uniqueCountries.map((i) => (
        <button
          key={i}
          onClick={() => setFilterCountry(i)}
          style={{
            marginRight: '2px',
            backgroundColor: i === filterCountry ? '#61dafb' : '',
          }}
        >
          {i}
        </button>
      ))}
      <div className="d-flex flex-column align-items-center">
        {sortedProfiles.map((i) => (
          <FaceBookCard key={i.firstName} profile={i} />
        ))}
      </div>
    </div>
  );
};

export default FaceBook;