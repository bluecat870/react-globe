import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";
import "./index.css"

function App() {
  // const [globe, setGlobe] = useState();
  // useEffect(() => {
  //   if(globe)
  //   globe.isLocked = true;
  // }, [globe])
  
  // const [zoom, setZoom] = useState(false);
  // const handleZoomIn = () => {
  //   const globe = document.getElementById("globe-wrapper");
  //   globe.style.transform = "translate3d(-60%, -30%, 0)";
  //   globe.style.width = "70vh"
  //   globe.style.height = "70vh"

  //   const button = document.getElementById("button-wrapper");
  //   button.style.display = "none";
  //   const close = document.getElementById("close-wrapper");
  //   close.style.display = "block";
  //   setZoom(true);
  // }
  // const handleZoomOut = () => {
  //   const globe = document.getElementById("globe-wrapper");
  //   globe.style.transform = "translate3d(-50%, 30%, 0)";
  //   globe.style.width = "70vw"
  //   globe.style.height = "70vw"

  //   const button = document.getElementById("button-wrapper");
  //   button.style.display = "block";
  //   const close = document.getElementById("close-wrapper");
  //   close.style.display = "none";
  //   setZoom(false);
  // }

  // useEffect(() => {
  //   const scrolling = document.getElementById("scrolling-wrapper-mobile");
  //   const tooltip = document.getElementById("tooltip");
  //   const back = document.getElementById("back-effect");
  //   const gauge = document.getElementById("mobile-svg-id");
  //   const pageNumber = document.getElementById("page-number");

  //   if (zoom) {
  //     scrolling.style.display = "none";
  //     tooltip.style.display = "block";
  //     back.style.display = "none";
  //     gauge.style.display = "none";
  //     pageNumber.style.display = "none"
  //   } else {
  //     scrolling.style.display = "block";
  //     tooltip.style.display = "none";
  //     back.style.display = "block";
  //     gauge.style.display = "block";
  //     pageNumber.style.display = "block";
  //   }
  // }, [zoom]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let scrollingWrapper = document.getElementById("scrolling-wrapper-mobile");
  //     const top = scrollingWrapper.scrollTop;
  //     const height = scrollingWrapper.scrollHeight - scrollingWrapper.clientHeight;
  //     const percent = top / height;

  //     let gauge = document.getElementById("mobile-gauge-path");
  //     gauge.style.strokeDashoffset = 745 + 283 * (1 - percent);

  //     let sections = document.getElementsByClassName("copy-section-mobile");

  //     const step = 0.2;
  //     let max = -1000, maxi = -1;
  //     for (let i = 0; i < 5; i++) {
  //       let opacity = 1 - Math.abs(step * i - percent) * 5
  //       sections[i].style.opacity = opacity;
  //       if (max < opacity) {
  //         max = opacity;
  //         maxi = i;
  //       }
  //     }
  //     document.getElementById("page-number").innerHTML = `<h1>0${maxi + 1}</h1>`
  //   }
  //   handleScroll();

  //   window.addEventListener("scroll", handleScroll, { capture: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [])
  // const handleMarkerTouchEnd = (marker) => {
  //   console.log(`Marker ${marker.id} touched`);
  // };

  // const markers = [
  //   {
  //     country: "Switzerland", coordinates: [46.8, 8.22], project: "Traccy AG", id: "0", value: 1
  //   },
  //   {
  //     country: "Switzerland", coordinates: [46.8, 8.22], project: "Traccy Connect", id: "1", value: 1
  //   },
  //   {
  //     country: "DRC Congo", coordinates: [4.0, 21.75], project: "Traccy Solar", id: "2", value: 1
  //   },
  //   {
  //     country: "Indonesia(jakarta)", coordinates: [6.2, 106.8], project: "Lynx VR", id: "3", value: 1
  //   },
  //   {
  //     country: "Indonesia(Semarang)", coordinates: [7, 110.4], project: "Green Protocol", id: "4", value: 1
  //   },
  //   {
  //     country: "Indonesia(Megalang)", coordinates: [7.4, 110.2], project: "DecentaCity", id: "5", value: 1
  //   },
  //   {
  //     country: "DRC Congo", coordinates: [4.0, 21.75], project: "Tomato Project", id: "6", value: 1
  //   },
  //   {
  //     country: "Indonesia(jakarta)", coordinates: [6.2, 106.8], project: "Mosquito Solution", id: "7", value: 1
  //   }
  // ];

  // const [currentMaker, setCurrentMaker] = useState(markers[0]);

  // function onMouseOverMarker(previousMarker, markerObject, event) {
  //   if (zoom && (!currentMaker || currentMaker.id != previousMarker.id)) {
  //     setCurrentMaker(previousMarker);
  //     const tooltip = document.getElementById("tooltip");
  //     tooltip.style.display = "block";
  //     tooltip.style.left = `${event.clientX}px`;
  //     tooltip.style.top = `${event.clientY}px`;
  //   }
  // }

  return null;
  // return (
  //   <div class="wrapper">
  //     <div id="back-effect"></div>
  //     <div class="globe-wrapper" id="globe-wrapper">
  //       <svg
  //         version="1.2"
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 92 92"
  //         width="92"
  //         height="92"
  //         class="mobile-gauge-svg"
  //         id="mobile-svg-id"
  //       >
  //         <g id="Layer" fill="none">
  //           <path
  //             id="Layer"
  //             style={{ opacity: "0.25", stroke: "#7b1558", strokeWidth: "0.5" }}
  //             d="m45.9 1c24.8 0 44.9 20.1 44.9 44.9 0 24.8-20.1 44.9-44.9 44.9-24.8 0-44.9-20.1-44.9-44.9 0-24.8 20.1-44.9 44.9-44.9z"
  //           />
  //           <path
  //             id="mobile-gauge-path"
  //             class="mobile-gauge-path"
  //             style={{ opacity: "1", stroke: "#7b1558", strokeWidth: "0.5", strokeDasharray: "1028", strokeDashoffset: "1012" }}
  //             d="m45.9 1c24.8 0 44.9 20.1 44.9 44.9 0 24.8-20.1 44.9-44.9 44.9-24.8 0-44.9-20.1-44.9-44.9 0-24.8 20.1-44.9 44.9-44.9z"
  //           />
  //         </g>
  //       </svg>
  //       <ReactGlobe
  //         width="100%"
  //         height="100%"
  //         // globeTexture="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
  //         focus={null}
  //         globeBackgroundTexture={null}
  //         options={{
  //           enableMarkerTooltip: false,
  //           enableCameraZoom: false,
  //           ambientLightColor: 'red',
  //           cameraAutoRotateSpeed: 1,
  //         }}
  //         markers={zoom ? markers : []}
  //         onMouseOutMarker={onMouseOverMarker}
  //         onMouseOverMarker={onMouseOverMarker}
  //         onClickMarker={onMouseOverMarker}
  //         onGetGlobe={setGlobe}
  //         onTouchEnd ={onMouseOverMarker}
  //       />
  //     </div>
  //     <div class="button-wrapper" id="button-wrapper">
  //       <button onClick={handleZoomIn}>Zoom</button>
  //     </div>
  //     <div class="close-wrapper" id="close-wrapper" onClick={handleZoomOut}>
  //       <span className="text-3xl leading-7 select-none text-primary font-light">
  //         &times;
  //       </span>
  //     </div>
  //     <div id="scrolling-wrapper-mobile">
  //       <div id="scrolling-content-mobile">
  //         <div id="scrolling-area-mobile">
  //           <div class="copy-section-mobile topic-globekit" style={{ opacity: "1" }}>
  //             <h1 class="animated-text in">
  //               Powerful
  //             </h1>
  //             <div>
  //               <span class="emdash" />
  //               <h1>
  //                 Impact
  //               </h1>
  //             </div>
  //           </div>
  //           <div class="copy-section-mobile topic-globekit" style={{ opacity: "1" }}>
  //             <h1 class="animated-text in">
  //               Constant
  //             </h1>
  //             <div>
  //               <span class="emdash" />
  //               <h1>
  //                 Performance
  //               </h1>
  //             </div>
  //             <p class="animated-body">Mission, how do we get there</p>
  //           </div>
  //           <div class="copy-section-mobile topic-globekit" style={{ opacity: "1" }}>
  //             <h1 class="animated-text in">
  //               Unfolding
  //             </h1>
  //             <div>
  //               <span class="emdash" />
  //               <h1>
  //                 Visions
  //               </h1>
  //             </div>
  //             <p class="animated-body">
  //               Our Vision is assist every person regardless of social class
  //               or background in achieving financial stability and security.
  //               We want to create a bridge between the digital and real world
  //               to contribute to the stability of the crypto market
  //             </p>
  //           </div>
  //           <div class="copy-section-mobile topic-globekit" style={{ opacity: "1" }}>
  //             <h1 class="animated-text in">
  //               Customer
  //             </h1>
  //             <div>
  //               <span class="emdash" />
  //               <h1>
  //                 Value
  //               </h1>
  //             </div>
  //             <p class="animated-body">
  //               Customizable <br />
  //               Transparent <br />
  //               Secure <br />
  //               Reliable <br />
  //               Traceable
  //             </p>
  //           </div>
  //           <div class="copy-section-mobile topic-globekit" style={{ opacity: "1" }}>
  //             <h1 class="animated-text in">
  //               Why
  //             </h1>
  //             <div>
  //               <span class="emdash" />
  //               <h1>
  //                 Traccy
  //               </h1>
  //             </div>
  //             <p class="animated-body">
  //               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  //               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
  //             </p>
  //           </div>
  //           <div class="copy-section-mobile topic-globekit" style={{ opacity: "1" }} />
  //         </div>
  //       </div>
  //     </div>
  //     <div id="page-number">
  //       <h1>01</h1>
  //     </div>
  //     <div id="tooltip">
  //       {currentMaker &&
  //         <>
  //           <h1>{currentMaker.country}</h1>
  //           <h2>{currentMaker.project}</h2>
  //         </>
  //       }
  //     </div>
  //   </div>
  // )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
