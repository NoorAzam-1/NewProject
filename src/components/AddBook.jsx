"use client";
import { useDispatch } from "react-redux";
import { addProduct } from "@/features/productSlice";
import { useState } from "react";
import {
  Book,
  User,
  Tag,
  IndianRupee,
  Image as ImgIcon,
  Hash,
} from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";

export default function AddBook() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    format: "EPUB",
    price: "",
    category: "",
    tags: "",
    bestseller: false,
    available: true,
    images: [],
  });

  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      if (files && files.length > 0) {
        const filesArray = Array.from(files);
        setForm({ ...form, images: filesArray });
        setPreviews(filesArray.map((file) => URL.createObjectURL(file)));
      }
    } else if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData();

      data.append("title", form.title);
      data.append("author", form.author);
      data.append("description", form.description);
      data.append("format", form.format);
      data.append("price", form.price);

      if (form.category) {
        const categories = form.category
          .split(",")
          .map((c) => c.trim())
          .filter(Boolean);
        categories.forEach((cat) => data.append("category", cat));
      }

      if (form.tags) {
        const tagArray = form.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);
        tagArray.forEach((tag) => data.append("tags", tag));
      }

      data.append("bestseller", form.bestseller);
      data.append("available", form.available);

      form.images.forEach((img) => {
        data.append("images", img);
        console.log(img);
      });

      console.log("=== FORM DATA DEBUG ===");
      for (let [key, value] of data.entries()) {
        console.log(key, value);
      }

      await dispatch(addProduct(data)).unwrap();
      toast.success("Book added successfully ✅");

      setForm({
        title: "",
        author: "",
        description: "",
        format: "EPUB",
        price: "",
        category: "",
        tags: "",
        bestseller: false,
        available: true,
        images: [],
      });

      setPreviews([]);
    } catch (err) {
      toast.error(err || "Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <h3 className="text-sm font-bold text-secondary uppercase tracking-wider">
            Add New E-Book
          </h3>
          <p className="text-xs text-on-surface-variant">
            Fill details to publish your digital book
          </p>
        </div>

        {previews.length > 0 && (
          <div className="flex gap-3 justify-center flex-wrap">
            {previews.map((src, i) => (
              <Image
                key={i}
                src={src}
                width={100}
                height={100}
                alt={`preview-${i}`}
                className="w-24 h-32 object-cover rounded-2xl border border-border/60 shadow-sm"
              />
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputField
            icon={<Book size={18} />}
            label="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <InputField
            icon={<User size={18} />}
            label="Author"
            name="author"
            value={form.author}
            onChange={handleChange}
            required
          />

          <InputField
            icon={<Tag size={18} />}
            label="Categories (Comma Separated)"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="e.g. Fiction, Thriller"
            required
          />

          <InputField
            icon={<IndianRupee size={18} />}
            label="Price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
          />

          <div className="space-y-1">
            <label className="label">Format</label>
            <select
              name="format"
              value={form.format}
              onChange={handleChange}
              className="input-no-icon"
            >
              <option value="EPUB">EPUB</option>
              <option value="PDF">PDF</option>
              <option value="EPUB/PDF">EPUB/PDF</option>
            </select>
          </div>

          <InputField
            icon={<Hash size={18} />}
            label="Tags (Comma Separated)"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="e.g. bestseller, 2024"
          />

          <div className="space-y-1">
            <label className="label">Book Images (Multiple)</label>
            <div className="relative group">
              <span className="icon">
                <ImgIcon size={18} />
              </span>
              <input
                type="file"
                multiple
                name="images"
                onChange={handleChange}
                accept="image/*"
                className="input-file"
                required
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="label">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="input-no-icon resize-none h-24"
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 glass-card p-3 rounded-2xl text-sm border border-white/60">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="bestseller"
              checked={form.bestseller}
              onChange={handleChange}
              className="accent-primary"
            />
            Bestseller
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="available"
              checked={form.available}
              onChange={handleChange}
              className="accent-primary"
            />
            Available
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full font-bold py-3 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add E-Book"}
        </button>
      </form>
    </div>
  );
}

function InputField({ icon, label, ...props }) {
  return (
    <div className="space-y-1">
      <label className="label">{label}</label>

      <div className="relative group">
        <span className="icon">{icon}</span>
        <input {...props} className="input" />
      </div>
    </div>
  );
}
