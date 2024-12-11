import { useState } from "react";
import db from "../utils/firestore";
import { collection, addDoc } from "firebase/firestore";

const AddItem = () => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.trim()) {
      try {
        await addDoc(collection(db, "items"), {
          name: value,
          createdAt: new Date(),
        });
        setValue("");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new item"
      />
      <button type="submit">Add new item</button>
    </form>
  );
};

export default AddItem;