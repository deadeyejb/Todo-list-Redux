import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addList,
  clearList,
  deleteList,
  toggleComplete,
} from "../features/todo/toDoSLice";
import { nanoid } from "@reduxjs/toolkit";

const Item = () => {
  const { items, active } = useSelector((store) => store.toDo);

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      return;
    }
    dispatch(addList({ text: value, id: nanoid(), iscomplete: true }));

    setValue("");
  };

  const handleClear = () => {
    dispatch(clearList());
  };
  const handleDelete = (id) => {
    dispatch(deleteList(id));
  };
  const handleToggle = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="h-[600px]  bg-[#F7F9FC] rounded-md  mx-auto ">
      <div className="join  flex justify-center p-2 w-full ">
        <input
          className="input input-bordered join-item m-2 text-[#333333]"
          placeholder="Add a item "
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="btn join-item rounded-md m-2 bg-[#4A90E2] hover:bg-[#357ABD] "
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      <div className="flex justify-center align-center flex-col mx-auto items-center rounded-md  bg-white w-[450px] ">
        {items.map((list, id) => (
          <ul key={id} className="flex justify-between w-[300px] m-3">
            <input
              type="checkbox"
              onClick={() => handleToggle(list.id)}
            ></input>
            <li
              className={`list-none bg-zinc-300 p-2 rounded-md h-10 w-56 ${
                list.isComplete ? "bg-[#A1B09F] line-through" : ""
              }`}
            >
              {list.text}
            </li>
            <button
              className="bg-[#FF6F61] hover:bg-[#E64A44] p-2 rounded  "
              onClick={() => handleDelete(list.id)}
            >
              Delete
            </button>
          </ul>
        ))}
        <span className="p-2 ">You have {active} active task left.</span>

        <button
          className="btn join-item rounded-md m-2 bg-[#F5A623] hover:bg-[#E68A1F] "
          onClick={handleClear}
        >
          CLear
        </button>
      </div>
    </div>
  );
};

export default Item;
