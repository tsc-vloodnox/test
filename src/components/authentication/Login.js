import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import LeftNav from "../LeftNav";

export default function Login() {
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try { 
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="page-wrapper profil-page">
      <LeftNav />
      <div className="content">
        <div className="log-container">
          <div className="connection-form">
            <div className="form-container">
              <h2>Conection</h2>
              {error && <span variant="danger">{error}</span>}
              <form onSubmit={handleSubmit} className="form">
                <input
                  type="email"
                  name="email"
                  placeholder="Email..."
                  required
                />
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Mot de passe..."
                  required
                />
                <br />

                <button disabled={loading} type="submit">
                  Se connecter
                </button>
              </form>
              <div>
                <Link to="/forgot-password">Mot de passe oublié ?</Link>
              </div>
              <div>
                Créer un compte ? <Link to="/signup">S'inscrire</Link>
              </div>
            </div>
          </div>
          <div className="img-container">
            <img src="./img/log-img.jpg" alt="img-log" />
          </div>
        </div>
      </div>
    </div>
  );
}
