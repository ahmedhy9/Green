import React from "react";
import ContentSec1 from "./ContentSec1";
import { DataCont } from "./Data";
import "./Section1.css";
function Section1() {
  return (
    //=======Start Section 1=======//
    <div className="section1">
      <div className="container">
        <h2></h2>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img src="img/img2.png" alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="con-con">
              <ContentSec1 {...DataCont} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="con-con">
              <ContentSec1 {...DataCont} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img src="img/img3.png" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img src="img/img4.png" alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="con-con">
              <ContentSec1 {...DataCont} />
            </div>
          </div>
        </div>
      </div>
    </div>
    //=============================//
  );
}
export default Section1;
