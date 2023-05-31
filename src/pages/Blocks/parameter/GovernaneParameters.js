// import { overrides } from 'chart.js/dist/core/core.defaults'
// import React from 'react'

// const GovernaneParameters = () => {
//   return (
//     <div style={{ paddingTop: "40px"  }}>
//         <div style={{ fontSize: "24px", fontFamily: "Poppins" }}>
//             Governance Parameters
//         </div>

//         <div className="d-flex flex-wrap" style={{ gap: "20px", paddingTop: "20px" }}>
//           <div  className='responsive-card'
//             style={{
//               width: "294px",
//               height: "146px",
//               border: "1px solid rgba(128,99,172,1)",
//               borderRadius: "15px",
//               padding: "20px",
//               display: "flex",
//               justifyContent: "start",
//               alignItems: "start",
//               flexDirection: "column",
//               overflow:'hidden'
//             }}
//           >
//             <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
//               voting_period
//             </div>
//             <div
//               style={{
//                 fontSize: "21px",
//                 fontFamily: "Avenir",
//                 padding: "20px",
//               }}
//             >
//               432000s
//             </div>
//           </div>
//           <div  className='responsive-card'
//             style={{
//               width: "294px",
//               height: "146px",
//               border: "1px solid rgba(128,99,172,1)",
//               borderRadius: "15px",
//               padding: "20px",
//               display: "flex",
//               justifyContent: "start",
//               alignItems: "start",
//               flexDirection: "column",
//               overflow:'hidden'
//             }}
//           >
//             <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
//               proposal_voting_periods
//             </div>
//             <div
//               style={{
//                 fontSize: "21px",
//                 fontFamily: "Avenir",
//                 padding: "20px",
//               }}
//             >
//               -
//             </div>
//           </div>
//           <div  className='responsive-card'
//             style={{
//               width: "294px",
//               height: "146px",
//               border: "1px solid rgba(128,99,172,1)",
//               borderRadius: "15px",
//               padding: "20px",
//               display: "flex",
//               justifyContent: "start",
//               alignItems: "start",
//               flexDirection: "column",
//               overflow:'hidden'
//             }}
//           >
//             <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
//               expedited_voting_period
//             </div>
//             <div
//               style={{
//                 fontSize: "21px",
//                 fontFamily: "Avenir",
//                 paddingTop: "20px",
//                 paddingLeft: "20px",
//               }}
//             >
//               86400s
//             </div>
//           </div>
//           <div  className='responsive-card'
//             style={{
//               width: "294px",
//               height: "146px",
//               border: "1px solid rgba(128,99,172,1)",
//               borderRadius: "15px",
//               padding: "20px",
//               display: "flex",
//               justifyContent: "start",
//               alignItems: "start",
//               flexDirection: "column",
//               overflow:'hidden'
//             }}
//           >
//             <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
//               min_deposit
//             </div>
//             <div
//               style={{
//                 fontSize: "21px",
//                 fontFamily: "Avenir",
//                 paddingTop: "20px",
//                 paddingLeft: "20px",
//               }}
//             >
//               {" "}
//               160000000{" "}
//             </div>
//           </div>
//         </div>
//         <div className="d-flex flex-wrap" style={{ gap: "20px", paddingTop: "20px" }}>
//           <div  className='responsive-card'
//             style={{
//               width: "294px",
//               height: "146px",
//               border: "1px solid rgba(128,99,172,1)",
//               borderRadius: "15px",
//               padding: "20px",
//               display: "flex",
//               justifyContent: "start",
//               alignItems: "start",
//               flexDirection: "column",
//               overflow:'hidden'
//             }}
//           >
//             <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
//               max_deposit_period
//             </div>
//             <div
//               style={{
//                 fontSize: "21px",
//                 fontFamily: "Avenir",
//                 padding: "20px",
//               }}
//             >
//               1209600s
//             </div>
//           </div>
//           <div  className='responsive-card'
//             style={{
//               width: "294px",
//               height: "146px",
//               border: "1px solid rgba(128,99,172,1)",
//               borderRadius: "15px",
//               padding: "20px",
//               display: "flex",
//               justifyContent: "start",
//               alignItems: "start",
//               flexDirection: "column",
//               overflow:'hidden'
//             }}
//           >
//             <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
//               min_expedited_deposit
//             </div>
//             <div
//               style={{
//                 fontSize: "21px",
//                 fontFamily: "Avenir",
//                 padding: "20px",
//               }}
//             >
//               5000000000
//             </div>
//           </div>
//           <div  className='responsive-card'
//             style={{
//               width: "294px",
//               height: "146px",
//               border: "1px solid rgba(128,99,172,1)",
//               borderRadius: "15px",
//               padding: "20px",
//               display: "flex",
//               justifyContent: "start",
//               alignItems: "start",
//               flexDirection: "column",
//               overflow:'hidden'
//             }}
//           >
//             <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
//               min_initial_deposit_ratio
//             </div>
//             <div
//               style={{
//                 fontSize: "21px",
//                 fontFamily: "Avenir",
//                 paddingTop: "20px",
//                 paddingLeft: "20px",
//               }}
//             >
//               25%
//             </div>
//           </div>
//           <div  className='responsive-card'
//             style={{
//               width: "294px",
//               height: "146px",
//               border: "1px solid rgba(128,99,172,1)",
//               borderRadius: "15px",
//               padding: "20px",
//               display: "flex",
//               justifyContent: "start",
//               alignItems: "start",
//               flexDirection: "column",
//               overflow:'hidden'
//             }}
//           >
//             <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
//             quorum
//             </div>
//             <div
//               style={{
//                 fontSize: "21px",
//                 fontFamily: "Avenir",
//                 paddingTop: "20px",
//                 paddingLeft: "20px",
//               }}
//             >
//               20%
//             </div>
//           </div>
//         </div>
//         <div className="d-flex flex-wrap" style={{ gap: "20px", paddingTop: "20px" }}>
//           <div  className='responsive-card'
//             style={{
//               width: "280px",
//               height: "146px",
//               border: "1px solid rgba(128,99,172,1)",
//               borderRadius: "15px",
//               padding: "20px",
//               display: "flex",
//               justifyContent: "start",
//               alignItems: "start",
//               flexDirection: "column",
//               overflow:'hidden'
//             }}
//           >
//             <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
//               threshold
//             </div>
//             <div
//               style={{
//                 fontSize: "21px",
//                 fontFamily: "Avenir",
//                 padding: "20px",
//               }}
//             >
//               50%
//             </div>
//           </div>
//           <div  className='responsive-card'
//             style={{
//               width: "294px",
//               height: "146px",
//               border: "1px solid rgba(128,99,172,1)",
//               borderRadius: "15px",
//               padding: "20px",
//               display: "flex",
//               justifyContent: "start",
//               alignItems: "start",
//               flexDirection: "column",
//               overflow:"hidden"
//             }}
//           >
//             <div style={{ fontSize: "21px", fontFamily: "Poppins",textOverflow:'ellipsis', }}>
//               veto_threshold
//             </div>
//             <div
//               style={{
//                 fontSize: "21px",
//                 fontFamily: "Avenir",
//                 padding: "20px",
//               }}
//             >
//               33.4%
//             </div>
//           </div>
//           <div  className='responsive-card'
//             style={{
//               width: "294px",
//               height: "146px",
//               border: "1px solid rgba(128,99,172,1)",
//               borderRadius: "15px",
//               padding: "20px",
//               display: "flex",
//               justifyContent: "start",
//               alignItems: "start",
//               flexDirection: "column",
//               overflow:'hidden',
//             }}
//           >
//             <div style={{ fontSize: "21px", fontFamily: "Poppins", textOverflow:'ellipsis', }}>
//               expected_threshold
//             </div>
//             <div
//               style={{
//                 fontSize: "21px",
//                 fontFamily: "Avenir",
//                 paddingTop: "20px",
//                 paddingLeft: "20px",
//               }}
//             >
//               66.67%
//             </div>
//           </div>
         
//         </div>
//       </div>
//   )
// }

// export default GovernaneParameters
