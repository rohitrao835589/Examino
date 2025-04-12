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
export {sendPostRequest , fetchData};