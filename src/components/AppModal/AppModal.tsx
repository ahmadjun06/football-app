import React from "react";
import Modal from "react-modal";
import { AppButton } from "../AppButton/AppButton";
import { AppHeader } from "../AppHeader/AppHeader";
import { AppInput } from "../AppInput/AppInput";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type AppModalProps = {
  modalText: string
  actve: boolean
  setActive: ()=>{}
};

 export const AppModal = ({
  actve, setActive,  modalText,
}: AppModalProps) : JSX.Element => {
  return <div>
     <div
     onChange={setActive}
     >
       <div>
          <p>{modalText}</p>
       </div>
     </div>
   </div>;
};
