import React, { useState } from 'react';

export default function Cards({ type }) {
  let cost = {
    day1: '5',
    night1: '6',
    day2: '7',
    night2: '8',
  };
  switch (type) {
    case 'bootcamp':
      cost = {
        day1: '40',
        night1: '48',
        day2: '56',
        night2: '64',
      };
      break;
    case 'vip':
      cost = {
        day1: '12',
        night1: '14',
        day2: '14',
        night2: '16',
      };
      break;
    case 'vip6':
      cost = {
        day1: '60',
        night1: '66',
        day2: '63',
        night2: '69',
      };
      break;
    case 'tv':
      cost = {
        day1: '15',
        night1: '17',
        day2: '16',
        night2: '18',
      };
      break;
  }
  return (
    <div className="cards">
      <div className="card_shadow">
        <div className="first-card">
          <p> Monday-Friday</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48px"
              height="48px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="1.5" />
              <path
                d="M12 2V4"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 20V22"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M4 12L2 12"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M22 12L20 12"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19.7778 4.22266L17.5558 6.25424"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M4.22217 4.22266L6.44418 6.25424"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6.44434 17.5557L4.22211 19.7779"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19.7778 19.7773L17.5558 17.5551"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="ww">Day</span>
          </p>
          <p className="card-line">
            <span>1 Hour</span>
            <span>10 A.M - 10 P.M</span>
            <span>{cost.day1}$</span>
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
              width="48px"
              height="48px"
              viewBox="-5 0 32 32"
              version="1.1"
            >
              <title>moon</title>
              <desc>Created with Sketch Beta.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                sketchtype="MSPage"
              >
                <g
                  id="Icon-Set"
                  sketchtype="MSLayerGroup"
                  transform="translate(-573.000000, -827.000000)"
                  fill="#fff"
                >
                  <path
                    d="M587.23,857 C582.287,856.641 575.047,850.732 575.047,843 C575.047,835.269 582.132,829.434 587.23,829 C588.764,828.87 587.953,828.875 589.372,829 C586.035,831.104 582.216,836.962 582.216,843 C582.216,849.038 584.994,854.619 589.372,857 C588.024,857.125 588.698,857.106 587.23,857 L587.23,857 Z M584.256,843 C584.256,836.1 588.735,830.236 595,827.991 C593.243,827.361 591.353,827 589.372,827 C580.33,827 573,834.164 573,843 C573,851.837 580.33,859 589.372,859 C591.353,859 593.243,858.639 595,858.009 C588.735,855.764 584.256,849.901 584.256,843 L584.256,843 Z"
                    id="moon"
                    sketchtype="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </svg>
            <span className="ww">Night</span>
          </p>
          <p className="card-line">
            <span>1 Hour</span>
            <span>10 P.M - 10 P.M</span>
            <span>{cost.night1}$</span>
          </p>
        </div>
      </div>
      <div className="card_shadow_sec">
        <div className="second-card">
          <p>Weekends</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48px"
              height="48px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="1.5" />
              <path
                d="M12 2V4"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 20V22"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M4 12L2 12"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M22 12L20 12"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19.7778 4.22266L17.5558 6.25424"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M4.22217 4.22266L6.44418 6.25424"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6.44434 17.5557L4.22211 19.7779"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19.7778 19.7773L17.5558 17.5551"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="ww">Day</span>
          </p>
          <p className="card-line">
            <span>1 Hour</span>
            <span>10 A.M - 10 P.M</span>
            <span>{cost.day2}$</span>
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
              width="48px"
              height="48px"
              viewBox="-5 0 32 32"
              version="1.1"
            >
              <title>moon</title>
              <desc>Created with Sketch Beta.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                sketchtype="MSPage"
              >
                <g
                  id="Icon-Set"
                  sketchtype="MSLayerGroup"
                  transform="translate(-573.000000, -827.000000)"
                  fill="#fff"
                >
                  <path
                    d="M587.23,857 C582.287,856.641 575.047,850.732 575.047,843 C575.047,835.269 582.132,829.434 587.23,829 C588.764,828.87 587.953,828.875 589.372,829 C586.035,831.104 582.216,836.962 582.216,843 C582.216,849.038 584.994,854.619 589.372,857 C588.024,857.125 588.698,857.106 587.23,857 L587.23,857 Z M584.256,843 C584.256,836.1 588.735,830.236 595,827.991 C593.243,827.361 591.353,827 589.372,827 C580.33,827 573,834.164 573,843 C573,851.837 580.33,859 589.372,859 C591.353,859 593.243,858.639 595,858.009 C588.735,855.764 584.256,849.901 584.256,843 L584.256,843 Z"
                    id="moon"
                    sketchtype="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </svg>
            <span className="ww">Night</span>
          </p>
          <p className="card-line">
            <span>1 Hour</span>
            <span>10 P.M - 10 P.M</span>
            <span>{cost.night2}$</span>
          </p>
        </div>
      </div>
    </div>
  );
}
