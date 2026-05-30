"use client";

import { useState } from "react";
import ProgressSteps from "@/components/checkout/ProgressSteps";
import OrderSummary from "@/components/checkout/OrderSummary";
import ShippingForm from "@/components/checkout/ShippingForm";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import SuccessScreen from "@/components/checkout/SuccessScreen";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [payment, setPayment] = useState({
    method: "card",
    cardNumber: "",
    expiry: "",
    cvv: "",
    upi: "",
  });

  const [errors, setErrors] = useState({});

  // VALIDATION
  const validateStep = () => {
    let newErrors = {};

    if (step === 2) {
      if (!shipping.name) newErrors.name = "Full name required";
      if (!shipping.email) newErrors.email = "Email required";
      if (!shipping.phone) newErrors.phone = "Phone required";
      if (!shipping.address) newErrors.address = "Address required";
      if (!shipping.city) newErrors.city = "City required";
      if (!shipping.state) newErrors.state = "State required";
      if (!shipping.zip) newErrors.zip = "ZIP required";
    }

    if (step === 3) {
      if (payment.method === "card") {
        if (!payment.cardNumber) newErrors.cardNumber = "Required";
        if (!payment.expiry) newErrors.expiry = "Required";
        if (!payment.cvv) newErrors.cvv = "Required";
      } else {
        if (!payment.upi) newErrors.upi = "Required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setStep((prev) => prev + 1);
  };

  const handleCheckout = () => {
    if (!validateStep()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 2000);
  };

  return (
    <main className="w-full max-w-4xl mx-auto bg-surface text-on-surface rounded-3xl overflow-hidden border border-white/60 shadow-2xl shadow-black/10">
      <ProgressSteps step={step} />

      <div className="px-4 py-2 sm:px-6 md:px-8">
        {step === 1 && <OrderSummary />}

        {step === 2 && (
          <ShippingForm data={shipping} setData={setShipping} errors={errors} />
        )}

        {step === 3 && (
          <PaymentMethod data={payment} setData={setPayment} errors={errors} />
        )}

        {step === 4 && <SuccessScreen />}
      </div>

      {/* BUTTON */}
      {step < 4 && (
        <div className="sticky bottom-0 p-5 bg-surface/90 backdrop-blur-xl border-t border-white/60">
          <button
            onClick={step === 3 ? handleCheckout : nextStep}
            className="btn btn-primary w-full py-4 font-bold cursor-pointer active:scale-95 transition"
          >
            {loading
              ? "Processing..."
              : step === 3
                ? "Complete Purchase"
                : "Continue"}
          </button>
        </div>
      )}
    </main>
  );
}
