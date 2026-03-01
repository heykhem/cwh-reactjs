import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [credentails, setCredentails] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const port = "http://localhost:5000";

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (credentails.password === credentails.cpassword) {
      const url = `${port}/api/auth/createuser`;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: credentails.name,
          email: credentails.email,
          password: credentails.password,
        }),
      });

      const json = await response.json();
      console.log(json);
      if (json.success) {
        // redirect
        localStorage.setItem("token", json.authToken);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } else console.log("Both are not same");
  };

  const onChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSumbit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="name"
          name="name"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          name="email"
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
          onChange={onChange}
          minLength={5}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="cpassword"
          name="cpassword"
          onChange={onChange}
          minLength={5}
          required
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

export default Signup;
