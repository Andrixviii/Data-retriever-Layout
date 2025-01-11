import React from 'react';
import '../pages/dashboard.css'

//bubble chat pengirim
const SenderBubble = ({ message }) => {
    return (
      <div className="bubble-wrapper sender-wrapper">
        <div className="bubble sender-bubble">
          <p>{message}</p>
        </div>
      </div>
    );
  };

//bubble chat penerima
const ReceiverBubble = ({ message }) => {
    return (
      <div className="bubble-wrapper receiver-wrapper">
        <div className="bubble receiver-bubble">
          <p>{message}</p>
        </div>
      </div>
    );
  };

export{ SenderBubble, ReceiverBubble};
