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

  if (loading) return <p className="text-on-surface-variant">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      {/* FORM */}
      <FeedbackForm editData={editData} setEditData={setEditData} />

      {/* LIST */}
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

