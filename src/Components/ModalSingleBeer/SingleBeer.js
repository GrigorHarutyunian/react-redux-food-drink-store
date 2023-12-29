import React from "react";
import { useSelector } from "react-redux";

export const SingleBeer = ({ beer }) => {
  if (!beer || !beer.name) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: "100%", height: "74%", padding: "20px" }}>
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "20px",
          color: "#2d66c3",
          alignItems: "center",
        }}
      >
        {beer.name}
      </h2>
      <button style={{ position: "absolute", top: "35%", right: "30%" }}>
        Add
      </button>
      <div className="onlySingleBeer" style={{ display: "flex" }}>
        <img
          style={{
            width: "25%",
            height: "82%",
            marginRight: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          src={beer.image_url}
          alt={beer.name}
        />
        <div
          style={{
            flexDirection: "column",
            fontSize: "15px",
            alignItems: "flex-start",
            color: "#555",
          }}
        >
          <p>
            <strong>Tagline:</strong> {beer.tagline}
          </p>
          <p>
            <strong>Price:</strong> {beer.srm} $
          </p>
          <p>
            <strong>Degree:</strong> {beer.abv}%
          </p>
          <p>
            <strong>Bitterness:</strong> {beer.ibu}
          </p>
          <p>
            <strong>First Brewed:</strong> {beer.first_brewed}
          </p>
          <p>
            <strong>Food Pairing:</strong> {beer.food_pairing}
          </p>
          <p>
            <strong>Brewers Tips:</strong> {beer.brewers_tips}
          </p>
          <p>
            <strong>Description:</strong> {beer.description}
          </p>
        </div>
      </div>
    </div>
  );
};
