import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.
          </p>
          <p className="mb-8">
            But don't worry, you can find plenty of other things on our
            homepage.
          </p>
          <Link to="/">
            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              back to homepage
            </button>
          </Link>
        </div>
        <div className="max-w-lg">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 2395 1800"
            width="400"
          >
            <defs>
              <style>
                {`.cls-1{fill:#d6b49a;}.cls-1,.cls-10,.cls-11,.cls-13,.cls-14,.cls-15,.cls-17,.cls-2,.cls-4,.cls-5,.cls-6{stroke:#000;}.cls-1,.cls-11,.cls-13,.cls-14,.cls-16,.cls-8{stroke-linecap:round;stroke-linejoin:round;}.cls-1,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:3px;}.cls-2{fill:#020202;}.cls-10,.cls-12,.cls-15,.cls-17,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-9{stroke-miterlimit:10;}.cls-3{fill:#818181;}.cls-12,.cls-16,.cls-3,.cls-7,.cls-8,.cls-9{stroke:#191818;}.cls-4{fill:#dcdbda;}.cls-5{fill:#4ea7f1;}.cls-14,.cls-6{fill:#f8f3ed;}.cls-16,.cls-7{fill:#333;}.cls-13,.cls-8{fill:none;}.cls-9{fill:#f8f59c;}.cls-10,.cls-11{fill:#f3d2c9;}.cls-15{fill:#8bb174;}.cls-17{fill:#da4e22;}`}
              </style>
            </defs>
            <title>Artboard 1 copy</title>
            <path
              className="cls-1"
              d="M1073.3,1016.93c-43.75-72.44-119.63-96.48-144.56-103.2h0a121.1,121.1,0,0,1-6-58.67c5.65-38.81,14.87-101.89,15.77-106.5L750,821.89,558.27,886.31c3.64,3,51.12,45.51,80.31,71.69a121.07,121.07,0,0,1,33,48.89h0c-14.84,21.13-57.72,88.19-44.92,171.84,12.09,79,67.16,129,103.83,162.39a396.42,396.42,0,0,0,88,60.44,121.54,121.54,0,0,0,98.43,19.6c5.76-1.34,16.84-4.18,27.22-7.38,4.58-1.42,10.4-3.23,17.06-5.57v0l1.1-.41,1.1-.39h0c6.61-2.47,12.24-4.8,16.67-6.65,10-4.19,20.35-9.11,25.63-11.77a121.54,121.54,0,0,0,63-78.09,396.28,396.28,0,0,0,28.85-102.77C1104.37,1159.06,1114.61,1085.35,1073.3,1016.93Z"
            />
            <ellipse
              className="cls-2"
              cx="748.2"
              cy="816.89"
              rx="202.22"
              ry="30.98"
              transform="translate(-233.49 303.67) rotate(-19.91)"
            />
            <path
              className="cls-3"
              d="M959,1447l-.09,82.82c0,6.19,6.66,11.22,14.88,11.23h.3c8.22,0,14.9-5,14.9-11.2l.09-81.9c0-.53-6.95-1-15.39-1H959"
            />
            <path
              className="cls-3"
              d="M1749,1447l-.09,82.82c0,6.19,6.66,11.22,14.88,11.23h.3c8.22,0,14.9-5,14.9-11.2l.09-81.9c0-.53-7-1-15.39-1H1749"
            />
            <path
              className="cls-4"
              d="M1825.5,1426.5H755.25a10.75,10.75,0,0,0-10.75,10.75h0A10.75,10.75,0,0,0,755.25,1448H1815a10.75,10.75,0,0,0,10.74-11l-.24-10.5"
            />
            <path
              className="cls-5"
              d="M701.74,867.5S663.12,1015,669.56,1076.79c3.84,36.88,2.64,98,1,141.4a52.4,52.4,0,0,1-104.76-1.3c-.27-22-2.78-38.74-.5-51.2,13.67-74.81-7.27-76,5.08-144.26q3.17-11.08,6.56-22.29c11.82-39,24.77-75.25,38.5-110.61,14.74-1.39,31.2-5.77,48.93-9.73C678,875.76,690.47,871.22,701.74,867.5Z"
            />
            <path
              className="cls-5"
              d="M1752.76,867.5s38.62,147.53,32.18,209.32c-3.84,36.88-2.64,98-1,141.4a52.4,52.4,0,0,0,104.76-1.3c.27-22,2.78-38.74.5-51.2-13.67-74.81,7.27-76-5.08-144.26q-3.17-11.08-6.56-22.29c-11.82-39-24.77-75.25-38.5-110.61-14.74-1.39-31.2-5.77-48.93-9.73C1776.49,875.76,1764,871.22,1752.76,867.5Z"
            />
            <path
              className="cls-6"
              d="M763.07,1121.07s26.51,16.11,33.88,18.69,37.17,14.18,45.63,16.62c9.36,2.78,26.25,7.33,45.35,10.3,36.08,5.52,72.53,8.72,110.47,8.72s74.39-3.2,110.47-8.72c19.1-2.93,35.99-7.49,45.35-10.3,8.46-2.44,29.54-11.18,45.63-16.62s33.88-18.69,33.88-18.69"
            />
            <path
              className="cls-7"
              d="M856.41,1246.09a63.07,63.07,0,0,0-6.51-9.46c-13-15.49-32.32-32.4-51.3-45.36-23.39-16.35-49.37-28.43-76.86-37.1-26.93-8.6-55.07-13.5-83.79-14.79l-1.85-.08c-29.34-.11-59.14,4.61-86.44,13.62-27.17,9-52.75,22.45-74.91,39-19,13.41-37,30.39-49.92,46.58a62.79,62.79,0,0,0-6.48,9.46"
            />
            <path
              className="cls-7"
              d="M1368.91,1246.09a63.07,63.07,0,0,1,6.51-9.46c13-15.49,32.32-32.4,51.3-45.36,23.39-16.35,49.37-28.43,76.86-37.1,26.93-8.6,55.07-13.5,83.79-14.79l1.85-.08c29.34-.11,59.14,4.61,86.44,13.62,27.17,9,52.75,22.45,74.91,39,19,13.41,37,30.39,49.92,46.58a62.79,62.79,0,0,1,6.48,9.46"
            />
            <path
              className="cls-8"
              d="M778.41,1104.59a208.11,208.11,0,0,1-8.76-15.24c-19.64-39.68-30.71-88.18-28.54-139.7q.62-12.23,1.84-24.26c8.5-92.62,41.22-173.45,73.82-229.82,13.26-23.89,27.11-41.25,37.75-50.65,10.3-9.13,18.49-14,18.49-14"
            />
            <path
              className="cls-8"
              d="M1392.49,1104.59a208.11,208.11,0,0,0,8.76-15.24c19.64-39.68,30.71-88.18,28.54-139.7q-.62-12.23-1.84-24.26c-8.5-92.62-41.22-173.45-73.82-229.82-13.26-23.89-27.11-41.25-37.75-50.65-10.3-9.13-18.49-14-18.49-14"
            />
            <path
              className="cls-9"
              d="M744.83,1265.75c-7.85-2.33-14.18-6.42-14.17-10.33v-2c0-4.36,8.35-8.16,19.25-8.16s19.24,3.8,19.24,8.16v2c.01,3.91-6.33,8-14.17,10.33Z"
            />
            <path
              className="cls-9"
              d="M1427.24,1265.75c7.85-2.33,14.18-6.42,14.17-10.33v-2c0-4.36-8.35-8.16-19.25-8.16s-19.24,3.8-19.24,8.16v2c0,3.91,6.33,8,14.17,10.33Z"
            />
            <path
              className="cls-10"
              d="M901.24,918.33c-5.43-7.67-16.05-10.72-27.07-8.55-11.15,2.21-20.7,9.25-26.94,18.47a69.06,69.06,0,0,0-6.94,14.21c-6.63,15.15-8.86,31.36-5.78,45.41,3.17,15.75,12.36,28.32,24.48,34.88a68.54,68.54,0,0,0,15.71,5.69c12.56,2.92,28.79-.64,45.14-9.61,16.71-9.22,31.88-21.83,40.52-34.07,9.94-13.82,13.7-27.07,10.44-36.14C921.67,932.36,914.67,925,901.24,918.33Z"
            />
            <path
              className="cls-10"
              d="M1217.57,918.33c5.43-7.67,16.05-10.72,27.07-8.55,11.15,2.21,20.7,9.25,26.94,18.47a69.06,69.06,0,0,1,6.94,14.21c6.63,15.15,8.86,31.36,5.78,45.41-3.17,15.75-12.36,28.32-24.48,34.88a68.54,68.54,0,0,1-15.71,5.69c-12.56,2.92-28.79-.64-45.14-9.61-16.71-9.22-31.88-21.83-40.52-34.07-9.94-13.82-13.7-27.07-10.44-36.14C1197.13,932.36,1204.13,925,1217.57,918.33Z"
            />
            <path
              className="cls-11"
              d="M1257.78,1052.52c-12.86,6.39-25.65,12.73-37.91,18.9-10.62,5.35-21.7,10.82-33.06,16-19.44,8.85-40.33,17.78-61.49,25.9-41.28,16.09-84.7,29.55-125.23,40.4l-2.72.93c-42.68,14.52-84.29,24.07-121.3,29.22-39.1,5.51-82.18,5.25-125.61-.59-37.37-5.19-77.16-14.94-117.78-29.3l-2.71-.94c-42.53-10.83-84.96-24.29-126.37-40.37-21.08-8.12-42-17-61.51-25.85-11.36-5.18-22.44-10.64-33.07-16-12.25-6.16-25-12.5-37.86-18.89-7.7-3.87-15.48-7.74-23.18-11.6-6.49-3.27-13-6.53-19.41-9.83-3.26-1.66-6.51-3.33-9.77-5C.64,1008.43-.13,985,5.23,970.35c6.21-15.55,23.47-23.91,47.61-23.58l2.22.09c38.15,1.64,83.9,11.26,130.8,27.3,21.32,7.27,43.39,15.24,65.76,23.43,21.7,7.91,43.84,16.11,65.9,24.13,36.87,13.61,74.38,27.65,111.05,40.52,40.07,13.34,80.44,24.71,119.36,33.56,37.15,8.64,73.1,14.5,105.5,17.37,38.93,3.47,72.66-1.51,96.77-11.54,17.83-7.53,29.22-17.76,28.91-25.53a20.28,20.28,0,0,0-6.34-13.72C1273.33,1044.89,1265.56,1048.65,1257.78,1052.52Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;