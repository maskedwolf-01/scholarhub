import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login Page</h1>
      <p>This is a placeholder page for login.</p>
      <p>
        <a href="/">Back to Home</a>
      </p>

      <button
        onClick={() => signIn("github")}
        style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}
      >
        Login with GitHub
      </button>
    </div>
  );
}
