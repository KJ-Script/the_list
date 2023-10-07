'use client'
import React, {SetStateAction, Dispatch} from "react";

type Props = {
    setActive: Dispatch<SetStateAction<Boolean>>
}

const ListGenerator = ({setActive}: Props) => {
  return (
    <dialog  className="w-[35%] bg-gray-300 flex justify-center">
    <div className="w-full rounded-md shadow-lg bg-white text-black space-y-2 pb-2">
      <div className="w-full flex justify-between">
        <div></div>
        <div className="flex">
          <p>Add your</p>&nbsp;<p className="line-through"> shitty </p>&nbsp;<p>reccomendations here</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 m-1 hover:text-red-800"
          onClick={() => setActive(false)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
            
          />
        </svg>
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input
          name="title"
          placeholder="title"
          className="p-1 border w-[85%] rounded-md"
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <br />
        <input
          name="description"
          placeholder="description"
          className="p-1 border w-[85%] rounded-md"
        />
      </div>

      <div>
        <button className="bg-blue-500 p-2 rounded text-white">
          Reccomend
        </button>
      </div>
    </div>
    </dialog>
  );
};

export default ListGenerator;
