import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const port = "http://localhost:5000";

  const [credentails, setCredentails] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    const url = `${port}/api/auth/login`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentails.email,
        password: credentails.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      // redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSumbit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          name="email"
          value={credentails.email}
          onChange={onChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={credentails.password}
          onChange={onChange}
        />
      </div>
      <div className="mb-3 form-check text-muted">
        <input
          type="checkbox"
          className="form-check-input"
          id="terms"
          name="terms"
          required
        />
        <label className="form-check-label" htmlFor="terms">
          Agree to Terms and Conditions *
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Login;
