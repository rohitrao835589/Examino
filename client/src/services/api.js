import axios from "axios";

function sendPostRequest(data) {
  const url = `${import.meta.env.VITE_API_BASE_URL}/test/${data.Testid}`;
  axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
}

async function fetchData(id) {
  const url = `${import.meta.env.VITE_API_BASE_URL}/test/${id}`;
  try {
    const response = await axios.get(url, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function sendLoginRequest(credentials) {
  const url = `${import.meta.env.VITE_API_BASE_URL}/user/login`;

  try {
    const response = await axios.post(url, credentials, {
      withCredentials: true,
    });
    return response.status;
  } catch (error) {
    return "Login Failed" + (error.response?.data?.error || error.message);
  }
}

async function sendRegisterRequest(credentials) {
  const url = `${import.meta.env.VITE_API_BASE_URL}/user/register`;

  try {
    const response = await axios.post(url, credentials , {
      withCredentials:true,
    });
    return response.status;
  } catch (error) {
    return "Register Failed: " + error.response?.data?.error || error.message;
  }
}

async function verifyUser(){
  try {
    const url = `${import.meta.env.VITE_API_BASE_URL}/verifyUser`;
    const response = await axios.get(url , {
      withCredentials:true,
    })
    return response.status;
  } catch (error) {
    console.log(error);
    return 401;
  }
}
export { sendPostRequest, fetchData, sendLoginRequest, sendRegisterRequest , verifyUser };
