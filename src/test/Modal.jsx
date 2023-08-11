import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] text-center">
      <div className="p-[30px] max-w-[480px] mt-[400px]  ml-[auto] mr-[auto] bg-[#fff] rounded-[10px]">
        {children}
        <br />
      </div>
    </div>
  );
};

export default Modal;
