"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllFeedback,
  deleteFeedback,
} from "@/features/feedbackSlice";
import FeedbackForm from "./FeedbackForm";

export default function FeedbackList() {
  const dispatch = useDispatch();
  const { feedbacks, loading } = useSelector(
    (state) => state.feedback
  );

  const [editData, setEditData] = useState(null);

  useEffect(() => {
    dispatch(getAllFeedback());
  }, [dispatch]);

  if (loading) return <p className="text-on-surface-variant">Loading feedback...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-8 md:mt-10">
      {/* FORM */}
      <FeedbackForm editData={editData} setEditData={setEditData} />

      {/* LIST */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg md:text-xl font-bold text-on-surface">Recent Feedback</h3>
        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">
          {feedbacks?.length || 0} entries
        </span>
      </div>

      {feedbacks?.length === 0 && (
        <div className="glass-card p-6 rounded-3xl border border-white/60 text-on-surface-variant text-center">
          No feedback yet. Be the first to share your thoughts.
        </div>
      )}

      {feedbacks.map((item) => (
        <div
          key={item._id}
          className="glass-card p-4 mb-3 rounded-3xl border border-white/60 shadow-sm"
        >
          <p><b className="text-on-surface">Name:</b> {item.name}</p>
          <p><b className="text-on-surface">Email:</b> {item.email}</p>
          <p><b className="text-on-surface">Contact:</b> {item.contactNo}</p>
          <p><b className="text-on-surface">Feedback:</b> {item.feedback}</p>

          <div className="mt-2 flex gap-2">
            <button
              onClick={() => setEditData(item)}
              className="btn btn-ghost px-3 py-1 rounded-full"
            >
              Edit
            </button>

            <button
              onClick={() => dispatch(deleteFeedback(item._id))}
              className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 border border-red-500/20"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

