import React from "react";
import { Link } from "react-router-dom";
import { ROOT_FOLDER } from "../../hooks/useFolder";

export default function FolderBreadcrumbs({ currentFolder }) {
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) path = [...path, ...currentFolder.path];

  return (
    <div className="breadcrumb">
      {path.map((folder, index) => (
        <Link
          key={folder.id}
          to={{
            pathname: folder.id ? `/library/folder/${folder.id}` : "/library",
            state: { folder: { ...folder, path: path.slice(1, index) } },
          }}
          className="breadcrumb-item"
          style={{ maxWidth: "150px" }}
        >
          {folder.name}
        </Link>
      ))}
      {currentFolder && (
        <Link className="breadcrumb-item" style={{ maxWidth: "200px" }} active>
          {currentFolder.name}
        </Link>
      )}
    </div>
  );
}
