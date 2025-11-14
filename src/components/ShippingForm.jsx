import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function ShippingForm() {
    const navigate = useNavigate();
    const { shippingData, setShippingData } = useOutletContext();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setShippingData({ ...shippingData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (shippingData.name && shippingData.address) {
            setMessage("Shipping info saved! Redirecting to payment...");
            setLoading(true);
            setTimeout(() => navigate("../payment"), 1500);
        } 
        else {
            setMessage("Please fill in all fields.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={shippingData.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={shippingData.address}
                onChange={handleChange}
            />
            <button type="submit" disabled={loading}>
                Continue to Payment
            </button>
            {message && (
                <p style={{ marginTop: "10px", color: message.includes("saved") ? "green" : "red" }}>
                {message}
                </p>
            )}
        </form>
    );
}
