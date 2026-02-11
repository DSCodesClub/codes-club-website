import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login-box">
        <h2>Login</h2>

        <input placeholder="Username or Email" />
        <input type="password" placeholder="Password" />

        <div className="forgot">Forgot password?</div>

        <button className="login-btn">Login</button>

        <div className="divider">
          <span>Or Sign up using</span>
        </div>

        <div className="social-icons">
          <button className="icon google" title="Google">
            G
          </button>
          <button className="icon github" title="GitHub">
            <i className="fab fa-github"></i>
          </button>
          <button className="icon facebook" title="Facebook">
            f
          </button>
        </div>
      </div>
    </div>
  );
}


