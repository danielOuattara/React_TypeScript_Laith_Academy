import React, { useState } from "react";
import { PeopleState as PeopleProps } from "../App";

interface PeopleForProps {
  people: PeopleProps["people"];
  setPeople: React.Dispatch<React.SetStateAction<PeopleProps["people"]>>;
}

export default function AddToList(props: PeopleForProps) {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = (): void => {
    if (!input.age || !input.img || !input.name) return;
    props.setPeople([
      ...props.people,
      {
        name: input.name,
        age: Number(input.age),
        img: input.img,
        note: input.note,
      },
    ]);

    setInput({ name: "", age: "", note: "", img: "" });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Image URL"
        className="AddToList-input"
        value={input.img}
        name="img"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <textarea
        placeholder="Add Notes"
        className="AddToList-input"
        value={input.note}
        name="note"
        rows={5}
        onChange={handleChange}
      />

      <button className="AddToList-btn" onClick={handleClick}>
        {" "}
        Add to List
      </button>
    </div>
  );
}
