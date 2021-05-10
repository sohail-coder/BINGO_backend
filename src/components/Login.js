import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "../components/css/login.css";
import Button from "@material-ui/core/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    return console.log("hello");
  }, []);
  const handleSubmit = () => {
    return alert("hello");
  };
  return (
    <div className="login__box">
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        className="login__form"
      >
        <div className="login__email">
          <label
            htmlFor="email"
            style={{ marginBottom: "10px", marginTop: "10px" }}
          >
            Email
          </label>
          <TextField
            name="email"
            placeholder="Email"
            style={{ backgroundColor: "white" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            Email
          </TextField>
        </div>
        <div className="login__password">
          <label
            htmlFor="Password"
            style={{ marginBottom: "10px", marginTop: "10px" }}
          >
            Password
          </label>
          <TextField
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            style={{ backgroundColor: "white" }}
          ></TextField>
        </div>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="secondary"
          style={{
            marginBottom: "10px",
            marginTop: "10px",
            width: "70px",
            marginLeft: "auto",
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Login;
