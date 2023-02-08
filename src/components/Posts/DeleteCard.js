import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";
import { db, storage } from "../../firebaseConfig";
import { deleteObject, ref } from "firebase/storage";

const DeleteCard = ({id, imageUrl}) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        if (id && !imageUrl) {
          await deleteDoc(doc(db, "Leafs", id));
          toast("Leaf deleted successfully", { type: "success" });
        }
        if (id && imageUrl) {
          await deleteDoc(doc(db, "Leafs", id));
          toast("Leaf deleted successfully", { type: "success" });
          const storageRef = ref(storage, imageUrl);
          await deleteObject(storageRef);
        }
      } catch (error) {
        toast("Error deleting article", { type: "error" });
      }
    }
  };
  return (
    <div onClick={handleDelete}>
      <img src="./img/icons/trash.svg" alt="trash" />
    </div>
  );
};

export default DeleteCard;
