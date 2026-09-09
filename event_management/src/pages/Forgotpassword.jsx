import { useState } from "react";
import { Mail, PartyPopper, ArrowRight, MailCheck } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3000/users/forgotPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setEmailSent(true);
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

          <h1 className="auth-title">Forgot Password</h1>
          <p className="auth-subtitle">
            Enter your email to receive a reset link
          </p>
        </div>

        {/* Card */}
        <div className="auth-card">
          {emailSent ? (
            <div className="success-box">
              <div className="success-icon-wrapper">
                <MailCheck />
              </div>

              <h2 className="success-title">Check your inbox</h2>

              <p className="success-text">
                We've sent a password reset link to{" "}
                <span className="success-email">{email}</span>
              </p>

              <Link to="/login" className="auth-link">
                Back to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="form-group">
                <label className="form-label">Email Address</label>

                <div className="input-wrapper">
                  <Mail className="input-icon" size={20} />

                  <input
                    type="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <button type="submit" disabled={loading} className="submit-btn">
                {loading ? "Sending link..." : "Send Reset Link"}
                {!loading && <ArrowRight size={20} />}
              </button>

              {/* Back to Login */}
              <div className="auth-footer">
                <Link to="/login" className="auth-link">
                  Back to Login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
