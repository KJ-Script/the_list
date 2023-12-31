"use client";
import React, {useState} from "react";
import ListGenerator from "./ListGenerator";

type Props = {};
const PopUp = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
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
