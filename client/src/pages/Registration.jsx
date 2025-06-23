import { useState } from "react";
import { styled } from "styled-components";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Eye Icons
import { apiUrl } from "../api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthContext";
import toast from "react-hot-toast";
import image from "../assets/IMG1.webp";

const Reg = styled.section`
  min-height: 100vh;
  background: url(${image}) no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .frm {
    display: flex;
    flex-direction: column;
    padding: 4rem;
    width: 450px;
    border-radius: 12px;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: blue;
    margin-bottom: 2rem;
  }

  .input-container {
    position: relative;
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    font-size: 1.6rem;
    font-weight: bold;
    color: black;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 14px;
    font-size: 1.6rem;
    border-radius: 6px;
    border: none;
    background: rgba(72, 70, 70, 0.2);
    color: white;
    caret-color: white;
    transition: background 0.3s ease;
  }

  input:focus {
    background: white;
    border: 2px solid #0071f3;
  }

  .password-container {
    position: relative;
    width: 100%;
  }

  .password-container input {
    width: 100%;
    padding-right: 40px; 
  }

  .eye-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }

  button {
    width: 100%;
    padding: 14px;
    font-size: 1.8rem;
    font-weight: bold;
    border-radius: 6px;
    border: none;
    background: #0071f3;
    color: white;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #005ec2;
  }

  .da {
    text-align: center;
    font-size: 1.6rem;
    margin-top: 1.5rem;
    color: white;
  }

  a {
    color: #00c3ff;
    font-weight: bold;
    font-size: 1.6rem;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isMentor, setIsMentor] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const SignUp = async (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/signup`,
        { name, email, password, isMentor, phone, address },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success(response.data.msg);
        login();
        navigate("/");
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Reg>
      <form className="frm" onSubmit={SignUp}>
        <h2>Register</h2>

        <div className="input-container">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label>Address:</label>
          <input
            type="text"
            placeholder="Enter your address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label>Phone:</label>
          <input
            type="number"
            placeholder="Enter phone number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label>Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <AiFillEye className="eye-icon" onClick={() => setShowPassword(false)} />
            ) : (
              <AiFillEyeInvisible className="eye-icon" onClick={() => setShowPassword(true)} />
            )}
          </div>
        </div>

        

        <div className="input-container">
          <label>
            <input
              type="checkbox"
              id="check"
              checked={isMentor}
              onChange={(e) => setIsMentor(e.target.checked)}
            />
            Are you a Mentor?
          </label>
        </div>

        <button type="submit">SIGN UP</button>

        <div className="da">
          Have an account? <a href="/login">Login here</a>
        </div>
      </form>
    </Reg>
  );
};

export default Registration;
