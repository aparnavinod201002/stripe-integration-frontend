import React from "react";

function Cancel() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#fdf4f4",
  };

  const cardStyle = {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    width: "100%",
  };

  const iconStyle = {
    fontSize: "60px",
    color: "#e53935",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#e53935",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={iconStyle}>❌</div>
        <h1 style={titleStyle}>Payment Cancelled</h1>
        <p style={textStyle}>
          Your payment has been cancelled or failed. Please try again to
          complete your subscription.
        </p>
        <button
          style={buttonStyle}
          onClick={() => (window.location.href = "/")}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Cancel;
