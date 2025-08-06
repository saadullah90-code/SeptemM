// import { useState, useRef, useEffect } from "react";

// const ModelCard = ({ model }) => {
//   const [show, setShow] = useState(false);
//   const detailsRef = useRef(null);

//   useEffect(() => {
//     const el = detailsRef.current;
//     if (el) {
//       if (show) {
//         el.style.maxHeight = el.scrollHeight + "px";
//         el.style.opacity = "1";
//         el.style.marginTop = "20px";
//       } else {
//         el.style.maxHeight = "0px";
//         el.style.opacity = "0";
//         el.style.marginTop = "0px";
//       }
//     }
//   }, [show]);

//   return (
//     <div className="model-card">
//       <img src={model.image} alt={model.name} className="model-image" />

//       <div className="model-content">
//         <h3 className="model-name">{model.name}</h3>
//         <button className="model-button" onClick={() => setShow(!show)}>
//           {show ? "Hide Details" : "View Model"}
//         </button>

//         <div ref={detailsRef} className="model-details">
//           <div className="model-details-inner">
//             <p><strong>Height:</strong> {model.height}</p>
//             <p><strong>Age:</strong> {model.age}</p>
//             <p><strong>City:</strong> {model.city}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModelCard;

// import { useRouter } from "next/router";
// import { useState, useRef, useEffect } from "react";

// const ModelCard = ({ model }) => {
//   const router = useRouter();

//   const handleViewModel = () => {
//     router.push(`/models/${model.id}`);
//   };

//   return (
//     <div className="model-card">
//       <img src={model.image} alt={model.name} className="model-image" />

//       <div className="model-content">
//         <h3 className="model-name">{model.name}</h3>
//         <button className="model-button" onClick={handleViewModel}>
//           View Model
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ModelCard;

import { useRouter } from "next/router";

const ModelCard = ({ model }) => {
  const router = useRouter();

  const handleViewModel = () => {
    router.push(`/models/${model.id}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* Card with Image only */}
      <div className="model-card">
        <img src={model.image} alt={model.name} className="model-image" />
      </div>

      {/* Name and Button Outside the Card */}
      <h3 className="model-name" style={{ marginTop: "16px" }}>{model.name}</h3>
      <button className="model-button" onClick={handleViewModel}>
        View Model
      </button>
    </div>
  );
};

export default ModelCard;
