import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function Dashboard() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const filesRef = collection(db, "files");
    const q = query(filesRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const files = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFiles(files);
    });
  }, []);

  return (
    <div className="dashbord">
      <div className="dashbord-container">
        {files.length > 0 && (
          <div className="childFiles">
            {files.map((file) => (
              <div key={file.id} style={{ maxWidth: "250px" }} className="p-2">
                <a
                  href={file.url}
                  target="_blank"
                  className="file-btn"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-file"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  </svg>{" "}
                  {file.name}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
