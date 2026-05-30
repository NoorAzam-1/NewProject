"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedback, updateFeedback } from "@/features/feedbackSlice";
import { Contact, Mail, MessageCircleMore, User } from "lucide-react";

export default function FeedbackForm({ editData, setEditData }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState(() => {
    return {
      name: editData?.name || "",
      email: editData?.email || "",
      contactNo: editData?.contactNo || "",
      feedback: editData?.feedback || "",
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData) {
      dispatch(updateFeedback({ id: editData._id, data: form }));
      setEditData(null);
    } else {
      dispatch(addFeedback(form));
    }

    setForm({
      name: "",
      email: "",
      contactNo: "",
      feedback: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card p-5 md:p-6 rounded-3xl border border-white/60 mb-6"
    >
      <h2 className="text-xl font-bold mb-4 text-on-surface">
        {editData ? "Edit Feedback" : "Add Feedback"}
      </h2>

      <label className="label">Name</label>
      <div className="relative mb-3">
        <input
          className="input "
          placeholder="Name"
          value={form.name}
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <User size={18} />
        </span>
      </div>

      <label className="label">Email</label>
      <div className="relative mb-3">
        <input
          className="input "
          placeholder="Email"
          value={form.email}
          required
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <Mail size={18} />
        </span>
      </div>

      <label className="label">Contact Number</label>
      <div className="relative mb-3">
        <input
          className="input "
          placeholder="Contact No"
          value={form.contactNo}
          required
          onChange={(e) => setForm({ ...form, contactNo: e.target.value })}
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <Contact size={18} />
        </span>
      </div>

      <label className="label">Your Feedback</label>
      <div className="relative">
        <textarea
          className="input mb-3 min-h-28"
          placeholder="Feedback"
          value={form.feedback}
          required
          onChange={(e) => setForm({ ...form, feedback: e.target.value })}
        />
        <span className="absolute left-3 top-3.5">
          <MessageCircleMore size={18} />
        </span>
      </div>

      <button className="btn btn-primary px-5 py-3 rounded-2xl w-full cursor-pointer sm:w-auto">
        {editData ? "Update" : "Submit"}
      </button>
    </form>
  );
}
