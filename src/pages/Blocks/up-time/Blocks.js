import React from "react";
import green from "../../../assets/Blocks/Green Blocks.svg";
import red from "../../../assets/Blocks/Red Blocks.svg";

const list = [
  { id: 1, title: "reynisfjara", status: true, num: 120 },
  { id: 1, title: "reynisfjara", status: true, num: 120 },
  { id: 1, title: "reynisfjara", status: true, num: 120 },
  { id: 1, title: "reynisfjara", status: false, num: 120 },
  { id: 1, title: "reynisfjara", status: true, num: 120 },
  { id: 1, title: "reynisfjara", status: true, num: 120 },
  { id: 1, title: "reynisfjara", status: true, num: 120 },
  { id: 1, title: "reynisfjara", status: false, num: 120 },
  { id: 1, title: "reynisfjara", status: true, num: 120 },
  { id: 1, title: "reynisfjara", status: true, num: 120 },
  { id: 1, title: "reynisfjara", status: true, num: 120 },
  { id: 1, title: "reynisfjara", status: true, num: 120 },
];

const Blocks = () => {
  return (
    <>
      <div>
        <h5
          style={{
            fontSIze: "20px",
            fontFamily: "Poppins",
            padding: "20px 0px",
          }}
        >
          Key words to filter Validators
        </h5>
      </div>
      <div>
        {list.map((data, index) => (
          <div className="d-flex justify-content-between" style={{paddingBottom:'10px'}}>
             <div className="d-flex flex-column" style={{paddingBottom:'10px'}}>
              <div className="d-flex justify-content-between">
                <div style={{fontFamily:'Poppins', fontSize:'20px'}}>
                 <span style={{fontFamily:'Avenir', fontSize:'20px'}}> {data.id}. </span >{data.title}
                </div>
                <div style={{color:'#D45857', fontFamily:'Avenir', fontSize:'20px'}}>{data.num}</div>{" "}
              </div>
              <div>
              {data.status === true ? (
                <img src={green} alt="green" />
              ) : (
                <img src={red} alt="red" />
              )}
            </div>
            </div>

            <div className="d-flex flex-column" style={{paddingBottom:'10px'}}>
              <div className="d-flex justify-content-between">
                <div style={{fontFamily:'Poppins', fontSize:'20px'}}>
                 <span style={{fontFamily:'Avenir', fontSize:'20px'}}> {data.id}. </span >{data.title}
                </div>
                <div style={{color:'#D45857', fontFamily:'Avenir', fontSize:'20px'}}>{data.num}</div>{" "}
              </div>
              <div>
              {data.status === true ? (
                <img src={green} alt="green" />
              ) : (
                <img src={red} alt="red" />
              )}
            </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blocks;
