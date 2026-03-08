import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function Login() {
  const { showAlert } = useOutletContext();

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
      showAlert(": Successfully Logged In", "success");
    } else {
      showAlert(": Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
