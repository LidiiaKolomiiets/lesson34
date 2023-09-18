import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const editProduct = () => {
    const editProd = {
        id,
        name: editedName,
        number: editedNumber,
    }
    const action = {
        type: 'editProduct',
        payload: editProd
    }
    dispatch(action)
  };

  return (
    <li>
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedNumber}
            onChange={(e) => setEditedNumber(e.target.value)}
          />
          <button onClick={editProduct}>Save</button>
        </>
    </li>
  );
};
