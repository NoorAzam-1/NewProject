"use client";

export default function PaymentMethod({ data, setData, errors }) {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <div
          onClick={() => setData({ ...data, method: "card" })}
          className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between glass-card ${
            data.method === "card"
              ? "border-primary bg-primary/10"
              : "border-border/70"
          }`}
        >
          <span>💳 Card</span>
          {data.method === "card" && <span className="text-primary">✔</span>}
        </div>

        <div
          onClick={() => setData({ ...data, method: "upi" })}
          className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between glass-card ${
            data.method === "upi"
              ? "border-primary bg-primary/10"
              : "border-border/70"
          }`}
        >
          <span>📱 UPI</span>
          {data.method === "upi" && <span className="text-primary">✔</span>}
        </div>
      </div>

      {data.method === "card" && (
        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-border/70 space-y-4">
          <div className="p-4 rounded-2xl bg-linear-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20">
            <p className="text-sm opacity-80">Card Number</p>
            <p className="text-base sm:text-lg font-bold tracking-widest">
              {data.cardNumber || "**** **** **** 1234"}
            </p>

            <div className="flex justify-between mt-4 text-xs sm:text-sm gap-3">
              <span>{data.name || "CARD HOLDER"}</span>
              <span>{data.expiry || "MM/YY"}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <input
                placeholder="Card Number"
                value={data.cardNumber}
                onChange={(e) =>
                  setData({ ...data, cardNumber: e.target.value })
                }
                className="input-no-icon"
              />
              {errors.cardNumber && (
                <p className="text-error text-xs mt-1">{errors.cardNumber}</p>
              )}
            </div>

            <div>
              <input
                placeholder="Card Holder Name"
                value={data.name || ""}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="input-no-icon"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  placeholder="MM/YY"
                  value={data.expiry}
                  onChange={(e) => setData({ ...data, expiry: e.target.value })}
                  className="input-no-icon"
                />
                {errors.expiry && (
                  <p className="text-error text-xs mt-1">{errors.expiry}</p>
                )}
              </div>

              <div>
                <input
                  placeholder="CVV"
                  value={data.cvv}
                  onChange={(e) => setData({ ...data, cvv: e.target.value })}
                  className="input-no-icon"
                />
                {errors.cvv && (
                  <p className="text-error text-xs mt-1">{errors.cvv}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {data.method === "upi" && (
        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-border/70 space-y-4">
          <div className="text-sm text-on-surface-variant">
            Pay using UPI (Google Pay, PhonePe, Paytm)
          </div>

          <div>
            <input
              placeholder="example@upi"
              value={data.upi}
              onChange={(e) => setData({ ...data, upi: e.target.value })}
              className="input-no-icon"
            />
            {errors.upi && (
              <p className="text-error text-xs mt-1">{errors.upi}</p>
            )}
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-on-surface-variant">
            <span className="px-3 py-1 rounded-full bg-surface-light border border-white/60">
              GPay
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-light border border-white/60">
              PhonePe
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-light border border-white/60">
              Paytm
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
