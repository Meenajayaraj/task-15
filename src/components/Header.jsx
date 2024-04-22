import React from "react";

function Header() {
  return (
    <header className="bg-dark mb-5 py-5">
      <div className="container px-3 px-lg-4 my-4">
        <div className="text-center text-white">
           <img
            src="/image/BG1.png"
            alt="banner"
            className="text-center"
            style={{ width: "1050px", height: "280px" }}
          />
          {/* <h1 style={{ fontFamily: "cursive" }}>HARSHA ORGANICS</h1> */}
          {/* <h6 style={{ fontFamily: "cursive" }}>Eat Healthy Stay Healthy</h6> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
