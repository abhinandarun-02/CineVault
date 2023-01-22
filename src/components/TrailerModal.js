import React, { useState } from "react";
import Popup from "reactjs-popup";
import ReactPlayer from 'react-player'

const TrailerModal = ({ trailerKey, isOpen, setIsOpen }) => {

  return (
    <>
      <Popup
        open={isOpen}
        onClose={() => setIsOpen(false)}
        contentStyle={{ width: "80%", height: "80%" }}
        overlayStyle={{ background: "rgba(0, 0, 0, 0.6)" }}
      >
        <ReactPlayer width="100%" height="100%" controls url={trailerKey}/>
      </Popup>
    </>
  );
};

export default TrailerModal;