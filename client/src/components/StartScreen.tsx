import Modal from 'react-modal';
import React, { useState } from 'react';

export default function StartModal() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <div id="StartScreen">
      <Modal isOpen={modalIsOpen}><p>Start</p>
      <button onClick={() => setModalIsOpen(false)}>Play</button>
      </Modal>
    </div>
  );
}