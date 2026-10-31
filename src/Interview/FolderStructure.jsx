import React from "react";

const FolderStructure = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <ul>
      {data.map((node) => (
        <li key={node.id}>
          {node.type === "directory" ? "F" : "f"} {node.name}
          {node.children && node.children.length > 0 && (
            <FolderStructure data={node.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default FolderStructure;
