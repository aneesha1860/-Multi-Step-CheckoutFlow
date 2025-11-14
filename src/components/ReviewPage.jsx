import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";

export default function ReviewPage() {
    const navigate = useNavigate();
    const { shippingData, paymentData } = useOutletContext();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handlePlaceOrder = () => {
        setMessage("Order placed successfully!");
        setLoading(true);
    };

    return (
        <div>
            <h2>Review Your Order</h2>

            <h3>Shipping Information</h3>
            <p><strong>Name:</strong> {shippingData.name}</p>
            <p><strong>Address:</strong> {shippingData.address}</p>

            <h3>Payment Information</h3>
            <p><strong>Card Number:</strong> {paymentData.cardNumber}</p>
            <p><strong>Expiry Date:</strong> {paymentData.expiry}</p>

            <button onClick={() => navigate("../payment")} disabled={loading}>
                Back
            </button>
            <button style={{ marginLeft: "10px" }} onClick={handlePlaceOrder} disabled={loading}>
                Place Order
            </button>

            {message && <p style={{ marginTop: "10px", color: "green" }}>{message}</p>}
        </div>
    );
}
