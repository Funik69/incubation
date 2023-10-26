import React ,{useEffect,useState} from 'react';
import axios from 'axios';

 function Getdata(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/v1/data/getdata')
        .then(response =>{
            setData(response.data);
        })
        .catch(error=>{
            console.error(error);
        });
    },[]); 
  return (
    <div>
      {data.map(item => (
        <div key={item._id}>{item.location}</div>
      ))}
    </div>
  )
}

export default Getdata