import axios from 'axios';
function sendPostRequest(data){

    const url =`${import.meta.env.VITE_API_BASE_URL}/test/${data.Testid}`;
    axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json' 
        }
    }) 
}
async function fetchData(id) {
    const url = `${import.meta.env.VITE_API_BASE_URL}/test/${id}`;
    try {
      const response = await axios.get(url);
      return response.data; 
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; 
    }
  }
  async function sendLoginRequest(credentials) {
    const url = `${import.meta.env.VITE_API_BASE_URL}/user/login`;
  
    try {
      const response = await axios.post(url, credentials);
      console.log(response.data);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      throw error; 
    }
  }
  async function sendRegisterRequest(credentials) {
    const url = `${import.meta.env.VITE_API_BASE_URL}/user/register`;
  
    try {
      const response = await axios.post(url, credentials);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      throw error; 
    }
  }
export {sendPostRequest , fetchData , sendLoginRequest , sendRegisterRequest};