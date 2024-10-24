import React from "react";

const AddNewItemButton = ({ onAdd }) => {
  return (
    <button onClick={onAdd} className="add-button">
      新規登録
    </button>
  );
};

export default AddNewItemButton;
