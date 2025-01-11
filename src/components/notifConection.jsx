import React from "react";
import DisButton from './disconectButton';
import '../pages/dashboard.css'

function Notifications ({massages}) {
    return (
    <div className="databsae-connection">

        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_857)">
            <path
              d="M20.25 11.25H18.8325C18.4116 9.61987 17.5419 8.14049 16.3222 6.97994C15.1026 5.8194 13.5818 5.02424 11.9328 4.68481C10.2838 4.34538 8.57261 4.4753 6.99374 5.05979C5.41487 5.64429 4.0316 6.65993 3.00111 7.9913C1.97062 9.32268 1.33424 10.9164 1.16427 12.5914C0.994305 14.2664 1.29757 15.9555 2.0396 17.4667C2.78163 18.978 3.93268 20.2508 5.36196 21.1405C6.79123 22.0303 8.44141 22.5013 10.125 22.5H20.25C21.7418 22.5 23.1726 21.9074 24.2275 20.8525C25.2824 19.7976 25.875 18.3668 25.875 16.875C25.875 15.3832 25.2824 13.9524 24.2275 12.8975C23.1726 11.8426 21.7418 11.25 20.25 11.25Z"
              stroke="#1E1E1E"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_857">
              <rect width="27" height="27" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>Connected: {massages}</p>
    </div>
    )
}

export default Notifications;