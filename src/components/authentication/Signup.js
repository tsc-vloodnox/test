import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import LeftNav from "../LeftNav";

export default function Signup() {
  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target.pseudo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;

    if (password !== passwordConfirm) {
      return setError("Les mots de passe ne correspondent pas");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password).then(async (userAuth) => {
        await userAuth.user.updateProfile({
          displayName,
        });
        console.log(userAuth);
      });
      history.push("/");
    } catch {
      setError("Erreur lors de la creeation du compte");
    }
    window.location.reload();
    setLoading(false);
  };

  return (
    <div className="page-wrapper profil-page">
      <LeftNav />
      <div className="content">
        <div className="log-container">
          <div className="connection-form">
            <h2>Inscription</h2>
            <div className="form-container">
              {error && <span variant="danger">{error}</span>}
              <form onSubmit={handleSubmit}>
                <div className="signup">
                  <div>
                    <input
                      type="text"
                      placeholder="Pseudo..."
                      required
                      name="pseudo"
                    />
                    <br />
                    <input
                      type="email"
                      placeholder="Email..."
                      name="email"
                      required
                    />
                    <br />
                    <input
                      type="password"
                      placeholder="Mot de passe..."
                      name="password"
                      required
                    />
                    <br />
                    <input
                      type="password"
                      placeholder="Confirmer le mot de passe..."
                      name="passwordConfirm"
                      required
                    />
                    <br />
                  </div>
                </div>
                <button disabled={loading} type="submit">
                  S'inscrire
                </button>
              </form>
              <div>
                Vous avez déja un compte ? <Link to="/login">Se connecter</Link>
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
