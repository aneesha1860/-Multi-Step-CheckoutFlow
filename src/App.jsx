import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CheckoutLayout from "./components/CheckoutLayout";
import ShippingForm from "./components/ShippingForm";
import PaymentForm from "./components/PaymentForm";
import ReviewPage from "./components/ReviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/checkout/shipping" replace />} />

        <Route path="/checkout" element={<CheckoutLayout />}>
          <Route index element={<Navigate to="shipping" replace />} />
          <Route path="shipping" element={<ShippingForm />} />
          <Route path="payment" element={<PaymentForm />} />
          <Route path="review" element={<ReviewPage />} />
        </Route>

        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
