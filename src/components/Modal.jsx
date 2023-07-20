/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";

const Modal = ({ children, handleClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] text-center">
      <div className="p-[30px] max-w-[480px] mt-[400px]  ml-[auto] mr-[auto] bg-[#fff] rounded-[10px]">
        {children}
        <br />
        <button className="m-2" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
