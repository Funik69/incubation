import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import './getdata.css';
import { useDataContext } from '../../context/DataContext';
import { Link } from 'react-router-dom';

 function Getdata(){
  const { data } = useDataContext();
  const [searchQuery, setSearchQuery] = useState('');
 
  const containsSearchQuery = (item, query) => {
    const searchFields =[item.startupName, item.founderName, item.email];
    return searchFields.some((field) => field.toLowerCase().includes(query.toLowerCase()));
  };

  const filteredData = data.filter((item) => item.status === 'pending' && containsSearchQuery(item, searchQuery));
  const len = filteredData.length;
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
    <div className='portCover'>
    <h1>List of Applied Startups({len})</h1>
    <input
          type="text"
          placeholder="startupName/founderName/email"
          value={searchQuery}
          onChange={handleSearch}
          className='search_data'
        />
    </div>
     <div className='showdata'>
      {filteredData.map(item => (
        <div className='cardData' key={item._id}>
          <div className='card-item'><strong>Startup Name:</strong> {item.startupName}</div>
          <div className='card-item'><strong>Founder Name:</strong> {item.founderName}</div>
          <div className='card-item'><strong>Email :</strong> {item.email}</div>
          <a href={item.linkedinProfile} target="_blank" rel="noopener noreferrer"><strong>LinkedIn</strong></a>
          <div className='admin_center'><Link to={`/viewdata/${item._id}`}><u>View Startup</u></Link></div>
        </div>
      ))}
    </div>
    </>
   
  )
}

export default Getdata