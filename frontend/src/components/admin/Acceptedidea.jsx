import React, {useState } from 'react';
import { useDataContext } from '../../context/DataContext';
import { Link } from 'react-router-dom';

const Acceptedidea = () => {
  const { data } = useDataContext();
  const [searchQuery, setSearchQuery] = useState('');

  const containsSearchQuery = (item, query) => {
    // Define the fields you want to search in
    const searchFields = [item.startupName, item.founderName, item.email];
    // Check if any field contains the query
    return searchFields.some((field) => field.toLowerCase().includes(query.toLowerCase()));
  };

  const filteredData = data.filter((item) => item.status === 'accepted' && containsSearchQuery(item, searchQuery));
  const len = filteredData.length;
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="portCover">
        <h1>List of Approved Startups({len})</h1>
        <input
          type="text"
          placeholder="startupName/founderName/email"
          value={searchQuery}
          onChange={handleSearch}
          className='search_data'
        />
      </div>
      <div className="showdata">
        {filteredData.map((item) => (
          <div className="cardData" key={item._id}>
            <div className="card-item"><strong>Startup Name:</strong> {item.startupName}</div>
            <div className="card-item"><strong>Founder Name:</strong> {item.founderName}</div>
            <div className="card-item"><strong>Email:</strong> {item.email}</div>
            <a href={item.linkedinProfile} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <div className="admin_center">
              <Link to={`/singlepage/${item._id}`}><u>View Startup</u></Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Acceptedidea;
