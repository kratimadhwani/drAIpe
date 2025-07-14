import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

function Login() {
  const [tab, setTab] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [message, setMessage] = useState("");

  const { setUser } = useUser();
    const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  setMessage('');
  if (!loginEmail || !loginPassword) {
    setMessage('Please enter email and password.');
    return;
  }
  try {
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    });
    const data = await res.json();
    if (res.ok) {
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        setMessage('Logged in! Welcome, ' + (data.user?.name || data.user?.email));
        setTimeout(() => navigate('/'), 1000); // Redirect after 1s delay

    } else {
      setMessage(data.error || 'Login failed.');
    }
  } catch (err) {
    setMessage('Server error. Please try again.');
  }
};

const handleSignup = async (e) => {
  e.preventDefault();
  setMessage('');
  if (!signupName || !signupEmail || !signupPassword) {
    setMessage('Please fill all fields.');
    return;
  }
  try {
    const res = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: signupName,
        email: signupEmail,
        password: signupPassword,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage('Account created! Welcome, ' + (data.user?.name || data.user?.email));
      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
      setTimeout(() => navigate('/'), 1000);
    } else {
      setMessage(data.error || 'Signup failed.');
    }
  } catch (err) {
    setMessage('Server error. Please try again.');
  }
};

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button
          className={tab === "login" ? "active" : ""}
          onClick={() => {
            setTab("login");
            setMessage("");
          }}
        >
          Login
        </button>
        <button
          className={tab === "signup" ? "active" : ""}
          onClick={() => {
            setTab("signup");
            setMessage("");
          }}
        >
          Sign Up
        </button>
      </div>
      {tab === "login" ? (
        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form className="auth-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      )}
      {message && <div className="auth-message">{message}</div>}
    </div>
  );
}

export default Login;
