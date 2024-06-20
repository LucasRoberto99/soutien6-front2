import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e, input) => {
    if (input === "username") {
      setUsername(e.target.value);
    }
    if (input === "email") {
      setEmail(e.target.value);
    }
    if (input === "password") {
      setPassword(e.target.value);
    }
    if (input === "description") {
      setDescription(e.target.value);
    }
    if (input === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && username && description && password) {
      setErrorMessage("");
      if (password === confirmPassword) {
        try {
          const response = await axios.post(
            "https://site--back-soutien6--fhx5w78hhgzd.code.run/user/signup",
            {
              email,
              password,
              description,
              username,
            }
          );
          console.log(response.data);
        } catch (error) {
          // alert("error with axios request");
          console.log(error.response.data.error);
          setErrorMessage(error.response.data.error);
        }
      } else {
        setErrorMessage("Passwords don't match");
      }
    } else {
      setErrorMessage("Missing paramaters - front");
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={(e) => {
            handleInputChange(e, "username");
          }}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => {
            handleInputChange(e, "email");
          }}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => {
            handleInputChange(e, "password");
          }}
        />
        <input
          type="password"
          placeholder="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            handleInputChange(e, "confirmPassword");
          }}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          value={description}
          onChange={(e) => {
            handleInputChange(e, "description");
          }}
        />
        <div>
          <button>Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
