import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function CheckoutLayout() {
    const steps = ["shipping", "payment", "review"];

    const [shippingData, setShippingData] = useState({ name: "", address: "" });
    const [paymentData, setPaymentData] = useState({ cardNumber: "", expiry: "" });

    return (
        <div className="checkout-container">
            <div className="progress-bar">
                {steps.map((step) => (
                <div key={step} className={`step`}>
                    {step.charAt(0).toUpperCase() + step.slice(1)}
                </div>
                ))}
            </div>

            <Outlet context={{ shippingData, setShippingData, paymentData, setPaymentData }} />
        </div>
    );
}
