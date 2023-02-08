import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";

export default function NewPostForm() {
  const [user] = useAuthState(auth);

  const [formData, setFormData] = useState({
    message: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.message) {
      alert("Veuillez entrer un message");
      return;
    }
    if (formData.message && !formData.image) {
      const leafRef = collection(db, "Leafs");
      addDoc(leafRef, {
        message: formData.message,
        imageUrl: null,
        createdAt: Timestamp.now().toDate(),
        createdBy: user.displayName,
        posterPic: user.photoURL,
        userId: user.uid,
        likes: [],
        comments: [],
      })
        .then(() => {
          toast("Leaf added successfully", { type: "success" });
          setProgress(0);
          setFormData({
            message: "",
            image: "",
          });
        })
        .catch((err) => {
          toast("Error adding leaf", { type: "error" });
        });
    }

    if (formData.message && formData.image) {
      const storageRef = ref(
        storage,
        `/images/${Date.now()}${formData.image.name}`
      );
      const uploadImage = uploadBytesResumable(storageRef, formData.image);
      uploadImage.on(
        "state_changed",
        (snapshot) => {
          const progressPercent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progressPercent);
        },
        (err) => {
          console.log(err);
        },
        () => {
          setFormData({
            message: "",
            image: "",
          });

          getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            const leafRef = collection(db, "Leafs");
            addDoc(leafRef, {
              message: formData.message,
              imageUrl: url,
              createdAt: Timestamp.now().toDate(),
              createdBy: user.displayName,
              posterPic: user.photoURL,
              userId: user.uid,
              likes: [],
              comments: [],
            })
              .then(() => {
                toast("Leaf added successfully", { type: "success" });
                setProgress(0);
              })
              .catch((err) => {
                toast("Error adding leaf", { type: "error" });
              });
          });
        }
      );
    }
  };
  const cancelPost = () => {
    setFormData({
      message: "",
      image: "",
    });
  };

  return (
    <div className="post-container group">
      <div className="top-form">
        <NavLink exact to="/user">
          <div className="user-info">
            <img src={user?.photoURL} alt="avatar" />
          </div>
        </NavLink>
        <div className="post-form">
          <textarea
            name="message"
            id="message"
            placeholder="Quoi de neuf ?"
            value={formData.message}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="icon">
          <img src="./img/icons/picture.svg" alt="img" />
          <input
            type="file"
            id="file-upload"
            name="image"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => handleImageChange(e)}
          />
        </div>
      </div>
      <div className="footer-form">
        <div className="btn-send">
          {formData.message || formData.image > 20 ? (
            <>
              <li className="card-container">
                <div className="card-left">
                  <div className="user-infos">
                    <img src={user.photoURL} alt="avatar" />
                  </div>
                </div>
                <div className="card-right">
                  <div className="card-header">
                    <div className="pseudo">
                      <h3>{user.displayName}</h3>
                    </div>
                  </div>
                  <p>{formData.message}</p>
                  <img
                    src={formData.image}
                    alt="card-pic"
                    className="card-pic"
                  />
                </div>
              </li>
              <button className="cancel" onClick={cancelPost}>
                Annuler message
              </button>
            </>
          ) : null}
          <button className="send" onClick={handlePublish}>
            Envoyer
          </button>
        </div>
        {progress === 0 ? null : (
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped mt-2"
              style={{ width: `${progress}%` }}
            >
              {`uploading image ${progress}%`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
