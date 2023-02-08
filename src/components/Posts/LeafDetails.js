import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import LikeButton from "./LikeButton";
import Comment from "./Comment";
import LeftNav from "../LeftNav";

export default function LeafDetails() {
  const { id } = useParams();
  const [leaf, setLeaf] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "Leafs", id);
    onSnapshot(docRef, (snapshot) => {
      setLeaf({ ...snapshot.data(), id: snapshot.id });
    });
  }, [id]);

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
    <div className="page-wrapper">
      <LeftNav />
      <div className="content">
        LeafDetails
        {leaf && (
          <div className="leaf-details">
            <div className="card-header">
              <div className="pseudo">
                <h3>Auteur : {leaf.createdBy}</h3>
              </div>
              <span>
                Posté {dateFormater(leaf.createdAt.toDate().toDateString())}
              </span>
            </div>
            <div>
              <p>{leaf.message}</p>
              <img
                src={leaf.imageUrl}
                alt={leaf.title}
                style={{ width: "100%", padding: 10 }}
                className="card-pic"
              />
            </div>
            <div className="col-9 mt-3">
              <hr />

              <div className="d-flex flex-row-reverse">
                <LikeButton id={id} likes={leaf.likes} />
              </div>
              comment 
              <Comment id={leaf.id} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
