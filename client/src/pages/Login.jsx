import { useState } from "react";
import { styled } from "styled-components";
import { apiUrl } from "../api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import image from "../assets/login.jpg";

const Log = styled.section`
  min-height: 100vh;
  background: url(${image}) no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .frm {
    display: flex;
    flex-direction: column;
    background: rgba(225, 213, 224, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 4rem;
    width: 500px;
    text-align: center;
    box-shadow: 0px 4px 15px rgba(71, 66, 66, 0.3);
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: blue;rgb(51, 20, 160);
    margin-bottom: 2rem;
  }

  .input-container {
    margin-bottom: 1.5rem;
    text-align: left;
    position: relative;

    label {
      font-size: 1.5rem;
      font-weight: bold;
      color: black;
    }

    input {
      width: 100%;
      padding: 16px;
      font-size: 1.5rem;
      border-radius: 8px;
      border: none;
      background: rgba(72, 70, 70, 0.2);
      color: white;
      caret-color: white;
      transition: background 0.3s ease;
    }

    input::placeholder {
      color: #ddd;
      font-size: 1.4rem;
    }

    input:focus {
      background: white;
      color: black;
    }
  }

  .password-container {
    position: relative;

    .toggle-password {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      font-size: 1.8rem;
      color: black;
    }
  }

  button {
    width: 100%;
    padding: 16px;
    font-size: 1.6rem;
    border-radius: 8px;
    border: none;
    background: #0071f3;
    color: white;
    cursor: pointer;
    margin-top: 1.5rem;
    transition: 0.3s;
  }

  button:hover {
    background: #005ec2;
  }

  .da {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    color: #fff;
  }

  a {
    color:rgb(51, 20, 160);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const SignIn = async () => {
    try {
      let response = await axios.post(
        apiUrl + "/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        await login();
        toast.success(response.data.msg);
        navigate(response.data.role === "admin" ? "/admin" : "/");
        window.location.reload();
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      toast.error("Server error, try again.");
    }
  };

  return (
    <Log>
      <div className="frm">
        <h2>Login</h2>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-container password-container">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <button onClick={SignIn}>SIGN IN</button>

        <div className="da">
          Don't have an account? <a href="/register">Register</a>
        </div>
      </div>
    </Log>
  );
};

export default Login;
