import { useState } from "react";
import {
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  Phone,
  PartyPopper,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";
function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/login");
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

          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">
            Join the platform to explore and manage events
          </p>
        </div>

        {/* Card */}
        <div className="auth-card">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-group">
              <label className="form-label">Full Name</label>

              <div className="input-wrapper">
                <User className="input-icon" size={20} />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
            </div>

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

            {/* Phone */}
            <div className="form-group">
              <label className="form-label">Phone Number</label>

              <div className="input-wrapper">
                <Phone className="input-icon" size={20} />

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
            </div>

            {/* Role */}
            <div className="form-group">
              <label className="form-label">Register As</label>

              <div className="input-wrapper">
                <Briefcase className="input-icon" size={20} />

                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-select"
                >
                  <option value="user">User</option>
                  <option value="organizer">Organizer</option>
                  <option value="vendor">Vendor</option>
                </select>
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="form-label">Password</label>

              <div className="input-wrapper">
                <LockKeyhole className="input-icon" size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
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

            {/* Submit */}
            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? "Creating account..." : "Sign Up"}
              {!loading && <ArrowRight size={20} />}
            </button>
          </form>

          {/* Login Link */}
          <div className="auth-footer">
            <span className="auth-footer-text">Already have an account? </span>
            <Link to="/login" className="auth-link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
