import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";
import { auth } from "../../firebaseConfig";

export default function Comment({ id }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [currentlyLoggedinUser] = useAuthState(auth);
  const commentRef = doc(db, "Leafs", id);
  useEffect(() => {
    const docRef = doc(db, "Leafs", id);
    onSnapshot(docRef, (snapshot) => {
      setComments(snapshot.data().comments);
    });
  }, [id]);

  const handleChangeComment = (e) => {
    e.preventDefault();

    updateDoc(commentRef, {
      comments: arrayUnion({
        user: currentlyLoggedinUser.uid,
        userName: currentlyLoggedinUser.displayName,
        userPic: currentlyLoggedinUser.photoURL,
        comment: comment,
        createdAt: new Date(),
        commentId: uuidv4(),
      }),
    }).then(() => {
      setComment("");
    });
  };

  // delete comment function
  const handleDeleteComment = (comment) => {
    console.log(comment);
    updateDoc(commentRef, {
      comments: arrayRemove(comment),
    })
      .then((e) => {
        console.log(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  return (
    <div className="comments-container">
      {comments !== null &&
        comments.map(({ commentId, user, comment, userName, userPic, createdAt }) => (
          <div
            key={commentId}
            className={
              user === currentlyLoggedinUser.uid
                ? "comment-container client"
                : "comment-container"
            }
          >
            <div className="left-part">
              <img src={userPic} alt="commenter-pic" />
            </div>
            <div className="right-part">
              <div className="pseudo">
                <h3>{userName}</h3>
                {/* <span>
                  <button className="follow-btn">Suivre</button>
                </span> */}
              </div>
              <span>{dateFormater(createdAt.toDate().toDateString())}</span>
              <p>{comment}</p>
              {user === currentlyLoggedinUser.uid && (
                <div
                  className="edit-comment"
                  onClick={() =>
                    handleDeleteComment({
                      commentId,
                      user,
                      comment,
                      userName,
                      createdAt,
                    })
                  }
                >
                    <span>
                      <img src="./img/icons/trash.svg" alt="trash" />
                    </span>
                </div>
              )}
            </div>
          </div>
        ))}
      {currentlyLoggedinUser && (
        <div className="comment-form">
          <input
            type="text"
            name="text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            placeholder="Laisser un commentaire"
          />
          <br />
          <button onClick={handleChangeComment}>Envoyer</button>
        </div>
      )}
    </div>
  );
}
