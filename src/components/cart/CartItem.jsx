import Image from "next/image";

export default function CartItem({ item, updateQty, removeItem }) {
  return (
    <div className="group flex flex-col md:flex-row gap-4 sm:gap-6 pb-8 sm:pb-10 border-b border-border/30">
      <div className="relative w-full md:w-40 h-56 sm:h-60 overflow-hidden shadow-xl rounded-2xl transition-transform duration-500 group-hover:-translate-y-4">
        <Image
          src={item.image}
          alt={item.title}
          height={400}
          width={250}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div key={item.productId} className="flex flex-col justify-between flex-1 gap-4">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold hover:text-primary">
                {item.title}
              </h3>
              <p className="text-on-surface-variant mt-1">
                {item.author}
              </p>
            </div>

            <p className="text-lg sm:text-xl font-bold text-primary">
              ₹{item.price.toFixed(2)}
            </p>
          </div>

          <div className="text-primary text-sm cursor-pointer">
            View Details →
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center justify-center bg-surface-light rounded-xl p-2 border border-white/60 w-fit">
            <button
              onClick={() => updateQty(item.productId, "dec")}
              className="px-3 cursor-pointer"
            >
              -
            </button>

            <span className="px-4 font-bold">
              {item.quantity}
            </span>

            <button
              onClick={() => updateQty(item.productId, "inc")}
              className="px-3 cursor-pointer"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeItem(item.productId)}
            className="text-red-400 text-sm cursor-pointer hover:text-on-surface hover:font-semibold hover:bg-error-container hover:px-3 hover:py-2 rounded-lg transition w-fit"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}