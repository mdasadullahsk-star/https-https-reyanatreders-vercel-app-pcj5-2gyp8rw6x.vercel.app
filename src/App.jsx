import React from "react";
import logo from "../public/A_logo.png";

export default function App() {
  const categories = [
    { name: "Cosmetics", color: "#b5e48c" },
    { name: "Stationery", color: "#f9f871" },
    { name: "Grocery", color: "#d9f99d" }
  ];

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins, sans-serif" }}>
      <img src={logo} alt="Reyana Treders Logo" style={{ width: 120, marginTop: 20 }} />
      <h1 style={{ color: "#2e8b57" }}>Welcome to Reyana Treders</h1>
      <p>Your one-stop shop for Cosmetics, Stationery & Grocery</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          marginTop: 40,
          flexWrap: "wrap"
        }}
      >
        {categories.map((c) => (
          <div
            key={c.name}
            style={{
              background: c.color,
              borderRadius: 15,
              padding: 25,
              width: 180,
              boxShadow: "0 2px 10px rgba(0,0,0,0.15)"
            }}
          >
            <h3>{c.name}</h3>
            <button
              style={{
                background: "#2e8b57",
                color: "white",
                border: "none",
                borderRadius: 8,
                padding: "8px 12px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <footer style={{ marginTop: 50, color: "#555" }}>© Reyana Treders 2025</footer>
    </div>
  );
}