import React, { useState } from "react";

function Card({ cardData, setCartValue }) {
  const [toggle, setToggle] = useState(true);

  return (
    // <div className='bg-secondary'>
    <div className="card m-2">
      {/* Card img */}
      {cardData.img1 && (
        <img src="./image/bangles.jpg" className="card-img-top" alt="Product" />
      )}
      {cardData.img2 && (
        <img src="/image/bracelet.jpg" className="card-img-top" alt="Product" />
      )}
      {cardData.img3 && (
        <img
          src="/image/earings.jpg"
          className="card-img-top"
          alt="Product"
        />
      )}
      {cardData.img4 && (
        <img src="/image/kammal.jpg" className="card-img-top" alt="Product" />
      )}
      {cardData.img5 && (
        <img src="/image/haaram.jpg" className="card-img-top" alt="Product" />
      )}
      {cardData.img6 && (
        <img
          src="/image/long chain.jpg"
          className="card-img-top"
          alt="Product"
        />
      )}
      {cardData.img7 && (
        <img src="/image/lakshmi chain.jpg" className="card-img-top" alt="Product" />
      )}
      {cardData.img8 && (
        <img src="/image/necklace.jpg" className="card-img-top" alt="Product" />
      )}
      {cardData.isSale && (
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Sale
        </div>
      )}
      {cardData.isSpecial && (
        <div
          className="badge bg-danger text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Special
        </div>
      )}
      
      <div className="card-body p-4 text-center">
        <h5 className="card-title">{cardData.name}</h5>
        <p className="card-text">
          {cardData.rating && <div>{cardData.rating}</div>}
          {cardData.originalPrice ? (
            <div>
              <span style={{ textDecoration: "line-through" }}>
                {cardData.originalPrice}
              </span>{" "}
              {cardData.price}
            </div>
          ) : (
            `Price: ${cardData.price}`
          )}
        </p>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {toggle ? (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value + 1);
                setToggle(false);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value - 1);
                setToggle(true);
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}

function CardGrid({ setCartValue }) {
  const cardData = [
    {
      name: "Bangle",
      rating: "⭐⭐⭐⭐⭐",
      price: "₹400",
      img1: true,
    },
    {
      name: "Bracelet",
      rating: "⭐⭐⭐⭐⭐",
      originalPrice: "₹330",
      price: "₹170",
      isSale: true,
      img2: true,
    },
    {
      name: "Earings",
      rating: "⭐⭐⭐⭐⭐",
      price: "₹499",
      isSpecial: true,
      img3: true,
    },
    { name: "Earings", rating: "⭐⭐⭐⭐⭐", price: "₹200-₹300", img4: true },
    {
      name: "Neck set",
      rating: "⭐⭐⭐⭐⭐",
      price: "₹549-₹799",
      isSpecial: true,
      img5: true,
    },
    {
      name: "Beads necklace",
      rating: "⭐⭐⭐⭐⭐",
      price: "₹150-₹180",
      img6: true,
    },
    {
      name: "Long chain",
      rating: "⭐⭐⭐⭐⭐",
      originalPrice: "₹45",
      price: "₹20",
      isSale: true,
      img7: true,
    },
    { name: "fancy chain", rating: "⭐⭐⭐⭐⭐", price: "₹55", img8: true },
  ];

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-mb-4">
              <Card cardData={card} setCartValue={setCartValue} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
