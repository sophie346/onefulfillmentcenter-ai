"use client";

import { useState, type FormEvent } from "react";
import { SERVICE_LANDINGS } from "@/data/serviceLandings";

const ORDER_BANDS = ["Under 500", "500–2,500", "2,500–10,000", "10,000–50,000", "50,000+"] as const;

const QuoteForm = ({ defaultService }: { defaultService: string }) => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(defaultService);
  const [volume, setVolume] = useState("");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step === 1) {
      if (!service) return;
      setStep(2);
      return;
    }
    if (step === 2) {
      if (!volume) return;
      setStep(3);
      return;
    }
    if (!name.trim() || !email.trim()) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-[#2fd3c8]/30 bg-[#2fd3c8]/10 p-6 text-white">
        <h3 className="text-xl font-bold">Quote request received</h3>
        <p className="mt-2 text-sm leading-6 text-white/75">
          A fulfillment specialist will review your {service.toLowerCase()} needs and follow up.
        </p>
      </div>
    );
  }

  return (
    <form
      id="quote"
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#2fd3c8]">
        Step {step} of 3
      </p>
      {step === 1 ? (
        <div>
          <label className="mb-3 block text-sm font-semibold text-white">
            What do you need help with?
          </label>
          <div className="grid gap-2 sm:grid-cols-2">
            {SERVICE_LANDINGS.map((item) => (
              <label
                key={item.slug}
                className={`cursor-pointer rounded-xl border px-3 py-3 text-sm ${
                  service === item.name
                    ? "border-[#2fd3c8] bg-[#2fd3c8]/10 text-white"
                    : "border-white/10 text-white/80"
                }`}
              >
                <input
                  type="radio"
                  name="service"
                  className="sr-only"
                  checked={service === item.name}
                  onChange={() => setService(item.name)}
                />
                {item.name}
              </label>
            ))}
          </div>
        </div>
      ) : null}
      {step === 2 ? (
        <div>
          <label className="mb-3 block text-sm font-semibold text-white">Monthly orders</label>
          <div className="grid gap-2">
            {ORDER_BANDS.map((band) => (
              <label
                key={band}
                className={`cursor-pointer rounded-xl border px-3 py-3 text-sm ${
                  volume === band
                    ? "border-[#2fd3c8] bg-[#2fd3c8]/10 text-white"
                    : "border-white/10 text-white/80"
                }`}
              >
                <input
                  type="radio"
                  name="volume"
                  className="sr-only"
                  checked={volume === band}
                  onChange={() => setVolume(band)}
                />
                {band}
              </label>
            ))}
          </div>
        </div>
      ) : null}
      {step === 3 ? (
        <div className="grid gap-3">
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            className="rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 text-sm text-white"
          />
          <input
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            placeholder="Company"
            className="rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 text-sm text-white"
          />
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 text-sm text-white"
          />
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Phone"
            className="rounded-xl border border-white/10 bg-[#070b12] px-4 py-3 text-sm text-white"
          />
        </div>
      ) : null}
      <div className="mt-5 flex gap-3">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((value) => value - 1)}
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white"
          >
            Back
          </button>
        ) : null}
        <button
          type="submit"
          className="rounded-full bg-[#2fd3c8] px-5 py-3 text-sm font-bold text-[#04201e]"
        >
          {step === 3 ? "Get My Fulfillment Quote" : "Continue"}
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;
