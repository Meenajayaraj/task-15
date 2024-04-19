import React from "react";

function Header() {
  return (
    <header className="bg-dark mb-5 py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
           <img
            src="/image/BG1.png"
            alt="banner"
            className="text-center"
            style={{ width: "750px", height: "100px" }}
          />
          {/* <h1 style={{ fontFamily: "cursive" }}>HARSHA ORGANICS</h1> */}
          {/* <h6 style={{ fontFamily: "cursive" }}>Eat Healthy Stay Healthy</h6> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
