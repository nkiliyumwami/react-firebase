import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UseState from "./components/UseState";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const toggleModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Title
        title="Mario Kingdon Events"
        subtitle="All the latest events in Mario Kingdom"
      />
      <div className="fixed top-40 left-120">
        <button onClick={toggleModal}>Discount!!</button>
      </div>
      <UseState />
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>10% Off Coupon Code!!</h2>
          <p>Use the code EMMA10 at the checkout.</p>
        </Modal>
      )}
    </>
  );
}

export default App;
