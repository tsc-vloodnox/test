import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import LeftNav from "../components/LeftNav";

export default function Profile() {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );

  const [error, setError] = useState("");
  const { currentUser, upload, logout } = useAuth();
  const history = useHistory();

  // const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const handleUpdateBio = () => {
    setUpdateForm(false);
  };

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
      upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
    window.location.reload();
  }

  return (
    <div className="page-wrapper profil-page">
      <LeftNav />

      <div className="content profil-container">
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <span variant="danger">{error}</span>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          <button variant="link" onClick={handleLogout}>
            Se déconnecter
          </button>
        </div>
        <div className="update-container">
          return (
          <div className="left-part">
            <h3>{currentUser?.displayName}</h3>
            <img src={photoURL} alt="Avatar" className="avatar" />

            <div className="upload">
              <label htmlFor="file">Image:</label>
              <input
                type="file"
                id="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleChange}
              />
              <br />
              <button disabled={loading || !photo} onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-upload"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                  <polyline points="7 9 12 4 17 9" />
                  <line x1="12" y1="4" x2="12" y2="16" />
                </svg>
              </button>
            </div>
          </div>
          );
          <div className="right-part">
            <div className="bio-update">
              <h3>Bio</h3>
              {updateForm === false && (
                <>
                  <p onClick={() => setUpdateForm(!updateForm)}>bio</p>
                  <button onClick={() => setUpdateForm(!updateForm)}>
                    Modifier bio
                  </button>
                </>
              )}
              {updateForm && (
                <>
                  <textarea
                    type="text"
                    id="bio"
                    defaultValue={currentUser?.bio}
                  ></textarea>
                  <button onClick={handleUpdateBio}>
                    Valider modifications
                  </button>
                </>
              )}
            </div>
            <h4>Membre depuis le : </h4>
            <h5>Abonnements : </h5>
            <h5>Abonnés : </h5>
          </div>
          <div className="footer">
            <h3>Completer l'inscription</h3>
            <form className="ft-ctn">
              <input type="text" name="age" placeholder="Age..." />
              <input type="text" name="gender" placeholder="Genre..." />
              <input type="text" name="phone" placeholder="Phone..." />
              <input type="text" name="address" placeholder="Address..." />
              <input type="text" name="country" placeholder="Pays..." />
              <input
                type="text"
                name="nationnality"
                placeholder="Nationnalite..."
              />
              <br />
              <label htmlFor="pet-select">Je suis : </label>
              <select name="pet" id="pet-select">
                <option value="visiteur">Visiteur</option>
                <option value="etudiant">Etudiant</option>
                <option value="prof">Professeur</option>
              </select>
              <br />
              <input
                type="text"
                name="Univercity"
                placeholder="Univercite..."
              />
              <input
                type="text"
                name="departement"
                placeholder="Departement..."
              />
              <input type="text" name="level" placeholder="Niveau..." />
              <br />
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
