import { useState } from "react";
import {useNavigate} from "react-router-dom"
import {sendLoginRequest , sendRegisterRequest} from '../../services/api'
function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: loginDetails.email,
    password: loginDetails.password,
  });
  function toggleLogin() {
    setLogin((prev) => !prev);
  }

  async function handleLogin(e) {
    e.preventDefault();
    const response = await sendLoginRequest(loginDetails);
    if(response===200){
      navigate('/dashboard');
    }else{
      alert(response);
    }
  }
  async function handleSingUp(e) {
    e.preventDefault();
    const response = await sendRegisterRequest(registerDetails);
    if(response===201){
      navigate('/dashboard');
    }else{
      alert(response);
    }
  }
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-10">
        {login ? (
          <form className="space-y-6" onSubmit={handleLogin}>
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Login
            </h1>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={loginDetails.email}
                onChange={(e) =>
                  setLoginDetails((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                minLength="8"
                value={loginDetails.password}
                onChange={(e) =>
                  setLoginDetails((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                placeholder="Enter your password"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Login
            </button>

            <p className="text-sm text-center text-gray-500 mt-4">
              Don't have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={toggleLogin}
              >
                Sign Up
              </span>
            </p>
          </form>
        ) : (
          <form className="space-y-6" onSubmit={handleSingUp}>
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Sign Up
            </h1>

            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={registerDetails.name}
                onChange={(e) =>
                  setRegisterDetails((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                placeholder="Enter your name"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={registerDetails.email}
                onChange={(e) =>
                  setRegisterDetails((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                placeholder="Enter your email"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                minLength="8"
                value={registerDetails.password}
                onChange={(e) =>
                  setRegisterDetails((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                placeholder="Create a password"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Sign Up
            </button>

            <p className="text-sm text-center text-gray-500 mt-4">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={toggleLogin}
              >
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
