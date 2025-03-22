import axios from 'axios';
function sendPostRequest(id , data){

    const url =`${import.meta.env.VITE_API_BASE_URL}/${id}`;
    axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json' 
        }
    }) 
}

export {sendPostRequest};