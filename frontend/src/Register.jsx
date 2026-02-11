import { useState } from "react";
import "./Register.css";

export default function Register() {
  const [registered, setRegistered] = useState(false);

  return (
    <div className="register">
      <div className="register-left">
        <h4 className="batch">🚀 BATCH OF 2026</h4>
        <h1>
          Build things that <span>matter.</span>
        </h1>
        <p>
          Join a focused community of developers building real-world products
          and growing together.
        </p>
      </div>

      <div className="register-right">
        {registered ? (
          <>
            <h2 className="success">✅ Successfully Registered</h2>
            <p className="sub">
              Your registration is complete. Welcome to Codes Club!
            </p>
          </>
        ) : (
          <>
            <h2>Create your account</h2>
            <p className="sub">Enter your details to get started</p>

            <input placeholder="Full Name" />
            <input placeholder="College Mail" />
            <select>
              <option>Select Year</option>
              <option>I Year</option>
              <option>II Year</option>
              <option>III Year</option>
            </select>

            <button
              className="submit-btn"
              onClick={() => setRegistered(true)}
            >
              Complete Registration
            </button>
          </>
        )}
      </div>
    </div>
  );
}
