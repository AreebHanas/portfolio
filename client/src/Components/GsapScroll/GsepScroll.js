// import React, { useContext, useEffect, useState } from "react";
// import { SwitchTransition, Transition } from "react-transition-group";
// import gsap from "gsap";
// import TransitionContext from "../../Context/TransitionContext.js";

// const ComponentScroll = ({ children, sectionId }) => {
//   const { toggleCompleted } = useContext(TransitionContext);
//   const [currentHash, setCurrentHash] = useState(window.location.hash || "#home");

//   useEffect(() => {
//     const handleHashChange = () => {
//       setCurrentHash(window.location.hash || "#home"); // Update the current hash
//     };

//     window.addEventListener("hashchange", handleHashChange);

//     return () => {
//       window.removeEventListener("hashchange", handleHashChange);
//     };
//   }, []);

//   // Update the hash value when the section comes into view
//   useEffect(() => {
//     const section = document.getElementById(sectionId);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // Update the hash value in the URL
//           if (window.location.hash !== `#${sectionId}`) {
//             window.history.pushState(null, "", `#${sectionId}`);
//             setCurrentHash(`#${sectionId}`);
//           }
//         }
//       },
//       { threshold: 0.5 } // Trigger when 50% of the section is visible
//     );

//     if (section) {
//       observer.observe(section);
//     }
//     console.log(currentHash)
//     return () => {
//       if (section) {
//         observer.unobserve(section);
//       }
//     };
//   }, [sectionId]);

//   return (
//     <SwitchTransition>
//       <Transition
//         key={currentHash} // Use the current hash as the key
//         timeout={500}
//         onEnter={(node) => {
//           toggleCompleted(false);

//           // Determine the direction of the animation
//           const direction = currentHash > `#${sectionId}` ? 100 : -100;

//           gsap.set(node, { autoAlpha: 0, yPercent: direction }); // Move up or down based on direction
//           gsap
//             .timeline({
//               paused: true,
//               onComplete: () => toggleCompleted(true),
//             })
//             .to(node, { autoAlpha: 1, yPercent: 0, duration: 0.5 }) // Animate to the center
//             .play();
//         }}
//         onExit={(node) => {
//           // Determine the direction of the animation
//           const direction = currentHash > `#${sectionId}` ? -100 : 100;

//           gsap
//             .timeline({ paused: true })
//             .to(node, { yPercent: direction, autoAlpha: 0, duration: 0.5 }) // Move out of view
//             .play();
//         }}
//       >
//         {children}
//       </Transition>
//     </SwitchTransition>
//   );
// };

// export default ComponentScroll;
