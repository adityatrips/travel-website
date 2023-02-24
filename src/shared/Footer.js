import React from "react";

const Footer = () => {
  return (
      <footer className="border-top bg-white py-5">
        <div
            className="container flex-column text-muted d-flex justify-content-center align-items-center"
        >
          <p className={"text-center w-100 p-0 m-0"}>Copyright © {
            (new Date()).getFullYear()
          }</p>
          <p className="text-center w-100 m-0 p-0">So Far Tours and Travels</p>
        </div>
      </footer>
  );
};

export default Footer;
