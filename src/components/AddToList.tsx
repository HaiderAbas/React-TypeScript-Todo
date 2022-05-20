import React, { useState } from "react";
import { IState as Props } from "../App";
interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}
const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: "",
  });
  const hendleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const hendleClick = (): void => {
    if (!input.name || !input.age || !input.note || !input.img) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note
      },
    ]);
    setInput({
        name: "",
        age: "",
        img: "",
        note: "",
    })
  };
  return (
    <div className="AddToList">
      <input
        onChange={hendleChange}
        name="name"
        value={input.name}
        type="text"
        placeholder="Name"
        className="AddToList-input"
      />
      <input
        onChange={hendleChange}
        name="age"
        value={input.age}
        type="number"
        placeholder="Age"
        className="AddToList-input"
      />
      <input
        onChange={hendleChange}
        name="img"
        value={input.img}
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
      />
      <textarea
        onChange={hendleChange}
        name="note"
        value={input.note}
        placeholder="Notes"
        className="AddToList-input"
      />
      <button onClick={hendleClick} className="AddToList-btn">
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
