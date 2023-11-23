import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useNavigate ,Link} from "react-router-dom";

const InvestorList = () => {
    const [investor, setInvestor] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    
      const getAllInvestor = async () => {
        try {
          const { data } = await axios.get("http://localhost:8000/api/v1/invest/get_investor");
          console.log(data);
          setInvestor(data.investor);
        } catch (error) {
          console.log(error);
        }
      };
    
      //lifecycle method
      useEffect(() => {
        getAllInvestor();
      }, []);

      const handleSearch = (e) => {
        setSearchQuery(e.target.value);
      };
    
      // Filter mentor data based on search query
      const filteredMentor = investor.filter(
        (m) =>
          m.investorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.iemail.toLowerCase().includes(searchQuery.toLowerCase()) 
      );
      return (
            <div>
              <div className='portCover'>
                <h1>Investor List</h1>
                <input
                  type="text"
                  placeholder="Search by Name/Email"
                  value={searchQuery}
                  onChange={handleSearch}
                  className='search_data'
                />
              </div>
              <div className='pagee'>
                <table className='userTable'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Linkedin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMentor?.map((i) => (
                      <tr key={i._id}>
                        <td>{i.investorName}</td>
                        <td>{i.iemail}</td>

                        {/* <td>{i.createdAt.substring(0, 10)}</td> */}
                        <td><Link to ={i.linkedin}>{i.linkedin}</Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )    
        }
    

export default InvestorList
