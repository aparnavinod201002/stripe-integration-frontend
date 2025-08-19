import React, { useState } from "react";
import "./Payment.css";
import { paymentAPI } from "../Service/allAPI";

function Payment() {
  const [role, setRole] = useState("university");

  const handlePayment = async (planKey) => {
    try {
      console.log(planKey);
      
      const response = await paymentAPI({ role, planId: planKey });
      console.log("Payment API Response:", response.data);

      if (response.status === 200) {
        // Redirect to Stripe checkout
        window.location.href = response.data.url;
      } else {
        alert(response.data?.message || "Payment failed!");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  // Plans without hardcoding Stripe IDs (matching your controller keys)
  const plans = [
    { key: "1m", duration: "1 Month", price: "₹300" },
    { key: "6m", duration: "6 Months", price: "₹900" },
    { key: "1y", duration: "1 Year", price: "₹2000" },
  ];

  return (
    <div className="container">
      <h1 className="title">Subscription Plans</h1>

      {/* Role switch */}
      <div className="role-switch">
        <button
          className={role === "university" ? "active" : ""}
          onClick={() => setRole("university")}
        >
          University
        </button>
        <button
          className={role === "counselor" ? "active" : ""}
          onClick={() => setRole("counselor")}
        >
          Counselor
        </button>
      </div>

      {/* Plans */}
      <div className="plans">
        {plans.map((plan) => (
          <div key={plan.key} className="card">
            <h2>{plan.duration}</h2>
            <p className="price">{plan.price}</p>
            <button onClick={() => handlePayment(`${role}_${plan.key}`)}>
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payment;
