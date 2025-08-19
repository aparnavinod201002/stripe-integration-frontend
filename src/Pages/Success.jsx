import React from "react";

function Success() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f7fc",
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
    color: "#4CAF50",
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
    color: "#555",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={iconStyle}>✅</div>
        <h1 style={titleStyle}>Payment Successful!</h1>
        <p style={textStyle}>
          Thank you for your subscription. Your payment has been successfully
          processed.
        </p>
        <button
          style={buttonStyle}
          onClick={() => (window.location.href = "/")}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Success;
