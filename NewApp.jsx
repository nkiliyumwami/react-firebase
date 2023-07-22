import { useState } from "react";

import Modal from "./components/Modal";
import Title from "./components/Title";
import Products from "./components/Products";

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
        title="Cheap Apple Products"
        subtitle="We have the good deals on market!"
      />
      <div className="fixed top-40 left-120">
        <button onClick={toggleModal}>Discount!!</button>
      </div>
      <Products />
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
