import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";

export default function PaymentForm() {
    const navigate = useNavigate();
    const { paymentData, setPaymentData } = useOutletContext();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setPaymentData({ ...paymentData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (paymentData.cardNumber && paymentData.expiry) {
            setMessage("Payment info saved! Redirecting to review...");
            setLoading(true);
            setTimeout(() => navigate("../review"), 1500);
        } 
        else {
            setMessage("Please fill in all fields.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={paymentData.cardNumber}
                onChange={handleChange}
            />
            <input
                type="text"
                name="expiry"
                placeholder="Expiry Date"
                value={paymentData.expiry}
                onChange={handleChange}
            />
            <button type="submit" disabled={loading}>
                Review Order
            </button>
            {message && (
                <p style={{ marginTop: "10px", color: message.includes("saved") ? "green" : "red" }}>
                {message}
                </p>
            )}
        </form>
    );
}
