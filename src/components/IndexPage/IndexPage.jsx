import React from "react";
import ArrowIcon from "../../assets/icons/arrow.svg";
import ArrowWhiteIcon from "../../assets/icons/arrowWhite.svg";

import "./IndexPage.css";

const IndexPage = ({ pageActual, setPageActual, indexPages, cantPages }) => {
  return (
    <div className="index-pages">
      <button
        onClick={() => setPageActual(pageActual - 1)}
        disabled={pageActual === 1}
      >
        <img src={ArrowWhiteIcon} alt="" />
        <img src={ArrowIcon} alt="" />
      </button>
      {indexPages.map((index) => (
        <div
          key={index}
          onClick={() => setPageActual(index)}
          className={`index-page ${pageActual === index ? "selected" : ""}`}
        >
          <p>{index}</p>
        </div>
      ))}

      <button
        disabled={pageActual === cantPages}
        onClick={() => setPageActual(pageActual + 1)}
      >
        <img src={ArrowWhiteIcon} alt="" />
        <img src={ArrowIcon} alt="" />
      </button>
    </div>
  );
};

export default IndexPage;
