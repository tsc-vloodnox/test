import React, { useState } from "react";
import { Link } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useAuth } from "../../contexts/AuthContext";
import Comment from "./Comment";
import DeleteCard from "./DeleteCard";
import LikeButton from "./LikeButton";


const CardLeaf = ({ leaf }) => {
  const { currentUser } = useAuth();

  const [edit, setEdit] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [editMess, setEditMess] = useState(null);

  const dateFormater = (createdAt) => {
    let days = Math.floor(
      (new Date() - new Date(createdAt)) / (1000 * 3600 * 24)
    );

    if (days === 0) {
      return "aujourd'hui";
    } else if (days === 1) {
      return "il y a 1 jour";
    } else {
      return "il y a " + days + " jours";
    }
  };

  const handleEdit = () => {
    setEdit(false);

    if (editMess) {
      updateDoc(doc(db, "Leafs", leaf.id), { message: editMess });
    }
  };

  return (
    <li className="card-container">
      <div className="card-left">
        <div className="user-infos">
          <img src={leaf.posterPic} alt="avatar" />
        </div>
      </div>
      <div className="card-right">
        <div className="card-header">
          <div className="pseudo">
            <h3>{leaf.createdBy}</h3>
          </div>
          <span>
            Posté {dateFormater(leaf.createdAt.toDate().toDateString())}
          </span>
          {leaf.userId === currentUser?.uid && (
            <div className="button-container">
              <div onClick={() => setEdit(!edit)}>
                <img src="./img/icons/edit.svg" alt="edit" />
              </div>
              <DeleteCard id={leaf.id} imageUrl={leaf.imageUrl} />
            </div>
          )}
        </div>
        {edit ? (
          <div className="update-post">
            <textarea
              autoFocus
              defaultValue={editMess ? editMess : leaf.message}
              onChange={(e) => setEditMess(e.target.value)}
            ></textarea>
            <button className="edit-btn" onClick={() => handleEdit()}>
              Modifier message
            </button>
          </div>
        ) : (
          <p>{editMess ? editMess : leaf.message}</p>
        )}
        <Link to={`/${leaf.id}`}>
          {leaf.imageUrl && (
            <img src={leaf.imageUrl} alt="card-pic" className="card-pic" />
          )}
        </Link>

        <div className="card-footer">
          {leaf.comments && (
            <div className="comment-icon">
              <img
                onClick={() => setShowComments(!showComments)}
                src="./img/icons/message1.svg"
                alt="comment"
              />
              <span>{leaf.comments?.length}</span>
            </div>
          )}
          <LikeButton id={leaf.id} likes={leaf.likes} />
          <img src="./img/icons/share.svg" alt="share" />
        </div>
        {showComments && <Comment id={leaf.id} />}
      </div>
    </li>
  );
};

export default CardLeaf;
