"use client";

import FeedbackList from "@/components/feedback/FeedbackList";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-on-surface py-8 md:py-12">
      <section className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary font-bold">
            BrainHub Community
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-headline font-extrabold">
            Feedback Wall
          </h1>
          <p className="mt-3 text-on-surface-variant max-w-2xl mx-auto">
            Share your thoughts, feature requests, and experience. Your feedback
            helps us improve BrainHub for everyone.
          </p>
        </div>

        <FeedbackList />
      </section>
    </main>
  );
}