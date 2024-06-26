import axios from 'axios';

const registerUser = async (formData,emailCode) => {
    console.log("data", formData);

    const response = await axios.post(`http://localhost:8080/api/saigonwaterbus/register?codeGmailVerifyRegister=${emailCode}`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response;
};
const sendMailCode = async (email) => {
    // console.log("sending email to", 'http://localhost:8080/api/saigonwaterbus/send-mail-code?emailAddress=${encodeURIComponent(emailAddress)}');
    
    const url = `http://localhost:8080/api/saigonwaterbus/send-mail-code?email=${encodeURIComponent(email)}`;
    
    const response = await axios.post(url, null, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response;
};


// Export registerUser as default
export default registerUser;

// Export sendMail as named export
export { sendMailCode };
