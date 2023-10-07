"use client";
import React, { useState, SetStateAction, Dispatch } from "react";
import PopUpBox from "./PopUpBox";
import ListGenerator from "./ListGenerator";

type Props = {};
const PopUp = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  console.log(active);
  return (
    <>
      {active ? (
        <div>
          <ListGenerator setActive={setActive} />
        </div>
      ) : (
        <button onClick={()=>setActive(true)} className="bg-blue-500 p-2 rounded text-white">
        add to list
      </button>
      )}
    </>
  );
};

export default PopUp;
