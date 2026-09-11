import { useState } from "react";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  PartyPopper,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // Redirect based on role
        switch (data.role) {
          case "admin":
            navigate("/admin/dashboard");
            break;
          case "organizer":
            navigate("/organizer/dashboard");
            break;
          case "vendor":
            navigate("/vendor/dashboard");
            break;
          default:
            navigate("/");
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Logo */}
        <div className="auth-header">
          <div className="auth-logo-icon">
            <PartyPopper />
          </div>

          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Log in to manage your events</p>
        </div>

        {/* Card */}
        <div className="auth-card">
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-group">
              <label className="form-label">Email Address</label>

              <div className="input-wrapper">
                <Mail className="input-icon" size={20} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="form-label">Password</label>

              <div className="input-wrapper">
                <LockKeyhole className="input-icon" size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-visibility-btn"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="forgot-link-row">
              <Link to="/forgot-password" className="auth-link">
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? "Logging in..." : "Login"}
              {!loading && <ArrowRight size={20} />}
            </button>
          </form>

          {/* Signup Link */}
          <div className="auth-footer">
            <span className="auth-footer-text">Don't have an account? </span>
            <Link to="/signup" className="auth-link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
