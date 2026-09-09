import { useState } from "react";
import {
  LockKeyhole,
  Eye,
  EyeOff,
  PartyPopper,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/users/resetPassword",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "shubh@example.com",
            newPassword: password,
          }),
        },
      );

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

          <h1 className="auth-title">Set New Password</h1>
          <p className="auth-subtitle">
            Create a new password for your account
          </p>
        </div>

        {/* Card */}
        <div className="auth-card">
          <form onSubmit={handleSubmit}>
            {/* New Password */}
            <div className="form-group">
              <label className="form-label">New Password</label>

              <div className="input-wrapper">
                <LockKeyhole className="input-icon" size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
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

            {/* Confirm Password */}
            <div className="form-group">
              <label className="form-label">Confirm Password</label>

              <div className="input-wrapper">
                <LockKeyhole className="input-icon" size={20} />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-input"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="toggle-visibility-btn"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="submit-btn">
              Update Password
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Back to Login */}
          <div className="auth-footer">
            <Link to="/login" className="auth-link">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
