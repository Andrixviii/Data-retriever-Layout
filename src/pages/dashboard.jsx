import React, { useState } from 'react';
import DisButton from '../components/disconectButton';
import { SenderBubble, ReceiverBubble } from '../components/massage';
import Notifications from '../components/notifConection';
import './dashboard.css';
import { ReactComponent as DisconnectIcon } from '../api-svgrepo-com.svg';

function Dashboard() {
  const [isChatMode, setIsChatMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleArrowClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsChatMode(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 100);
  };

  return (
    <>
      {!isChatMode ? (
        <div className={`container-dashboard ${isTransitioning ? 'fade-exit fade-exit-active' : ''}`}>
          <h1>Start Yapping</h1>
          <div className="input-container">
            <div className="propm-input">
              <textarea type="text" placeholder='How many users?'/>
              <button className="promptButton" onClick={handleArrowClick}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.41663 10H17.5833M17.5833 10L9.99996 2.41667M17.5833 10L9.99996 17.5833" 
                    stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <Notifications massages='Database Sakila'/>
            </div>
          </div>
          <div className="disconect-button">
            <DisButton label="Disconnect" image={<DisconnectIcon />}/>
          </div>
        </div>
      ) : (
        <div className={`container-chat ${isTransitioning ? 'fade-enter' : 'fade-enter-active'}`}>
          <div className="input-container2">
            <div className="propm-input2">

              <div className='databsae-connection'>
              <Notifications massages='Database Sakila'/>
                <div className="disconect-button2">
                  <DisButton label="Disconnect" image={<DisconnectIcon />}/>
                </div>
              </div>


              <SenderBubble message="How Many Users? " />
              <ReceiverBubble message="Dont know lol" />
              <SenderBubble message="How Many Users? dashl hfalkjf afj lsdfja " />
              <ReceiverBubble message="Dont know lol dfajsldjf j kdlfjlk sdjf ka dj falj flkjsf jlka jsfj a jsla" />
              <SenderBubble message="How Many Users?  dfjakjdfl kjdfal" />
              <ReceiverBubble message="Dont know lol dfasdkjf kjdlfalk dfjalksjdf flkj al  ldkfjalksjf s kfdj al" />
             
              <div className="promptComponent">
                <textarea type="text" placeholder='How many users?'/>
                <button className="promptButton">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.41663 10H17.5833M17.5833 10L9.99996 2.41667M17.5833 10L9.99996 17.5833" 
                      stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;