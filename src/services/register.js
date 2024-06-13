// registerUser.js
import axios from 'axios';

const registerUser = async (formData) => {
    console.log("data",formData);
  
        const response = await axios.post('http://localhost:8080/api/saigonwaterbus/register', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        
        })
        return response

};

export default registerUser;
