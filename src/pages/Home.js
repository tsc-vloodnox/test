import React, { useState, useEffect } from "react";
import LeftNav from "../components/LeftNav";
import NewPostForm from "../components/Posts/NewPostForm";
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import CardLeaf from "../components/Posts/CardLeaf";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Footer from "../components/Footer";

const Home = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const [leafs, setLeafs] = useState([]);

  useEffect(() => {
    const leafRef = collection(db, "Leafs");
    const q = query(leafRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const leafs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLeafs(leafs);
    });
  }, []);

  return (
    <div className="page-wrapper home">
      <LeftNav />
      <div className="content">
        <div className="main">
          <div className="home-header">
            <NewPostForm />
          </div>
          <div className="thread-container">
            <ul>
              {leafs.length > 0 &&
                leafs
                  .sort((a, b) => b.date - a.date)
                  .map((leaf) => (
                    <CardLeaf leaf={leaf} key={leaf.id} user={user} />
                  ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
