import React, {SetStateAction, Dispatch} from 'react'
import ListGenerator from './ListGenerator'

type Props = {
    setActive: (open: boolean) => void
}

const PopUpBox = (setActive: Props) => {
  return (
    <dialog className="w-[35%] bg-gray-300 flex justify-center">
    <ListGenerator setActive={setActive}/>
  </dialog>
  )
}

export default PopUpBox