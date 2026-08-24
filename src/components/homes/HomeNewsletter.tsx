"use client";

import { useState, type FormEvent } from "react";

const HomeNewsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("sent");
    setEmail("");
  };

  return (
    <section className="spatial-block home-news" id="newsletter">
      <h2>Subscribe Newsletter to Get Updates</h2>
      <form className="home-news__form" onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-label="Email address"
        />
        <button className="spatial-btn spatial-btn--teal" type="submit">
          {status === "sent" ? "Subscribed" : "Subscribe"}
        </button>
      </form>
    </section>
  );
};

export default HomeNewsletter;
