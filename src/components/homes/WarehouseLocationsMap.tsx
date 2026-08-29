"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Globe,
  MapPin,
  Navigation,
  Truck,
  X,
} from "lucide-react";
import { WAREHOUSE_HUBS, type WarehouseHub } from "@/data/warehouseLocations";
import {
  MAP_HEIGHT,
  MAP_WIDTH,
  NATION_EXTERIOR_BORDER,
  STATE_INTERIOR_BORDERS,
  STATE_PATHS,
  projectCoords,
} from "@/utils/usMapData";

const LOGISTICS_CORRIDORS: [string, string][] = [
  ["lax-01", "dfw-01"],
  ["dfw-01", "chi-01"],
  ["chi-01", "ewr-01"],
  ["dfw-01", "atl-01"],
  ["atl-01", "ewr-01"],
  ["sea-01", "lax-01"],
  ["sea-01", "chi-01"],
  ["den-01", "chi-01"],
  ["den-01", "dfw-01"],
  ["atl-01", "mia-01"],
  ["chi-01", "ind-01"],
  ["ind-01", "cmh-01"],
  ["cmh-01", "phl-01"],
  ["ewr-01", "bos-01"],
  ["dfw-01", "hou-01"],
  ["slc-01", "den-01"],
  ["mem-01", "atl-01"],
  ["mem-01", "chi-01"],
];

const WarehouseLocationsMap = () => {
  const [selectedHub, setSelectedHub] = useState<WarehouseHub | null>(null);
  const [hoveredHub, setHoveredHub] = useState<WarehouseHub | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [simulatedState, setSimulatedState] = useState("Texas");

  const hubPositions = useMemo(() => {
    const map = new Map<string, { x: number; y: number; xPct: number; yPct: number }>();
    WAREHOUSE_HUBS.forEach((hub) => {
      const pos = projectCoords(hub.lng, hub.lat);
      if (pos) map.set(hub.id, pos);
    });
    return map;
  }, []);

  const nearestHubForSimulation = useMemo(() => {
    const lower = simulatedState.toLowerCase();
    if (
      lower.includes("cal") ||
      lower.includes("ca") ||
      lower.includes("nv") ||
      lower.includes("az")
    ) {
      return WAREHOUSE_HUBS.find((h) => h.code === "LAX-01") || WAREHOUSE_HUBS[3];
    }
    if (
      lower.includes("tex") ||
      lower.includes("tx") ||
      lower.includes("ok") ||
      lower.includes("la")
    ) {
      return WAREHOUSE_HUBS.find((h) => h.code === "DFW-01") || WAREHOUSE_HUBS[10];
    }
    if (
      lower.includes("ill") ||
      lower.includes("il") ||
      lower.includes("wi") ||
      lower.includes("in") ||
      lower.includes("mi")
    ) {
      return WAREHOUSE_HUBS.find((h) => h.code === "CHI-01") || WAREHOUSE_HUBS[18];
    }
    if (
      lower.includes("ny") ||
      lower.includes("nj") ||
      lower.includes("pa") ||
      lower.includes("ma")
    ) {
      return WAREHOUSE_HUBS.find((h) => h.code === "EWR-01") || WAREHOUSE_HUBS[28];
    }
    if (
      lower.includes("fl") ||
      lower.includes("ga") ||
      lower.includes("nc") ||
      lower.includes("sc")
    ) {
      return WAREHOUSE_HUBS.find((h) => h.code === "ATL-01") || WAREHOUSE_HUBS[21];
    }
    if (lower.includes("wa") || lower.includes("or")) {
      return WAREHOUSE_HUBS.find((h) => h.code === "SEA-01") || WAREHOUSE_HUBS[0];
    }
    return WAREHOUSE_HUBS.find((h) => h.code === "DFW-01") || WAREHOUSE_HUBS[10];
  }, [simulatedState]);

  return (
    <section
      id="warehouse-locations"
      className="relative overflow-hidden border-y border-slate-800/80 bg-[#0c1017] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[350px] w-[750px] -translate-x-1/2 rounded-full bg-orange-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-[#f26522] uppercase"
          >
            <Compass className="h-3.5 w-3.5" />
            Nationwide Logistics Network
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Warehouse Locations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base"
          >
            Strategically positioned fulfillment hubs nationwide providing 1-2 day ground delivery
            to 99% of US customers with late 2:00 PM local cut-off times.
          </motion.p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-slate-800/90 bg-[#101520] p-3 shadow-2xl sm:p-6">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="warehouse-map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#warehouse-map-grid)" />
            </svg>
          </div>

          <div className="absolute top-4 left-6 z-20 hidden items-center gap-2 rounded-full border border-slate-800 bg-[#0a0d14]/85 px-3.5 py-1.5 text-xs text-slate-400 backdrop-blur-md sm:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#f26522]" />
            <span>
              Click on any <strong className="font-semibold text-slate-200">Drop Pin</strong> to
              inspect hub capabilities &amp; shipping zones
            </span>
          </div>

          <div className="absolute top-4 right-6 z-20 flex items-center gap-3 rounded-full border border-slate-800 bg-[#0a0d14]/85 px-3.5 py-1.5 text-xs backdrop-blur-md">
            {hoveredState ? (
              <div className="mr-1 flex items-center gap-1.5 border-r border-slate-700 pr-3 text-xs font-bold text-orange-400">
                <Globe className="h-3.5 w-3.5" />
                <span>{hoveredState}</span>
              </div>
            ) : null}
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f26522] shadow-[0_0_8px_#f26522]" />
              <span className="text-[11px] text-slate-300">Primary Superhub</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="text-[11px] text-slate-300">Regional Depot</span>
            </div>
          </div>

          <div className="relative flex aspect-[16/10] min-h-[400px] max-h-[760px] w-full select-none items-center justify-center sm:min-h-[560px]">
            <svg
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              className="h-full w-full object-contain"
              style={{ filter: "drop-shadow(0 18px 40px rgba(0, 0, 0, 0.5))" }}
            >
              <defs>
                <linearGradient id="stateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e2637" />
                  <stop offset="100%" stopColor="#151b27" />
                </linearGradient>
                <linearGradient id="stateHoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2b384e" />
                  <stop offset="100%" stopColor="#212c3e" />
                </linearGradient>
              </defs>

              <g>
                {STATE_PATHS.map((state) => {
                  const isHovered = hoveredState === state.name;
                  return (
                    <path
                      key={state.id}
                      d={state.d}
                      fill={isHovered ? "url(#stateHoverGrad)" : "url(#stateGrad)"}
                      stroke="#2a3547"
                      strokeWidth="0.8"
                      strokeLinejoin="round"
                      className="cursor-default transition-colors duration-200"
                      onMouseEnter={() => setHoveredState(state.name)}
                      onMouseLeave={() => setHoveredState(null)}
                    />
                  );
                })}
              </g>

              {STATE_INTERIOR_BORDERS ? (
                <path
                  d={STATE_INTERIOR_BORDERS}
                  fill="none"
                  stroke="#263142"
                  strokeWidth="0.9"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  pointerEvents="none"
                />
              ) : null}

              {NATION_EXTERIOR_BORDER ? (
                <path
                  d={NATION_EXTERIOR_BORDER}
                  fill="none"
                  stroke="#3e4d66"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                  pointerEvents="none"
                />
              ) : null}

              <g
                stroke="#f26522"
                strokeWidth="1.2"
                strokeOpacity="0.22"
                strokeDasharray="4 4"
                pointerEvents="none"
              >
                {LOGISTICS_CORRIDORS.map(([fromId, toId], idx) => {
                  const fromPos = hubPositions.get(fromId);
                  const toPos = hubPositions.get(toId);
                  if (!fromPos || !toPos) return null;
                  return (
                    <line
                      key={`corridor-${idx}`}
                      x1={fromPos.x}
                      y1={fromPos.y}
                      x2={toPos.x}
                      y2={toPos.y}
                    />
                  );
                })}
              </g>
            </svg>

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {WAREHOUSE_HUBS.map((hub) => {
                  const pos = hubPositions.get(hub.id);
                  if (!pos) return null;
                  const isHighlighted =
                    selectedHub?.id === hub.id || hoveredHub?.id === hub.id;
                  const opacity = isHighlighted ? 0.35 : 0.08;
                  return (
                    <div
                      key={`coverage-${hub.id}`}
                      className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300"
                      style={{
                        left: `${pos.xPct}%`,
                        top: `${pos.yPct}%`,
                        width: isHighlighted ? "240px" : "140px",
                        height: isHighlighted ? "240px" : "140px",
                        background: `radial-gradient(circle, rgba(242, 101, 34, ${opacity}) 0%, rgba(242, 101, 34, 0.02) 70%, transparent 100%)`,
                        border: `1px solid rgba(242, 101, 34, ${isHighlighted ? "0.6" : "0.15"})`,
                      }}
                    />
                  );
                })}
            </div>

            <div className="pointer-events-none absolute inset-0">
              {WAREHOUSE_HUBS.map((hub) => {
                const pos = hubPositions.get(hub.id);
                if (!pos) return null;
                const isSelected = selectedHub?.id === hub.id;
                const isHovered = hoveredHub?.id === hub.id;
                const isSuperhub =
                  hub.dailyCapacity.includes("100,000") ||
                  hub.dailyCapacity.includes("150,000") ||
                  hub.code.startsWith("DFW") ||
                  hub.code.startsWith("CHI") ||
                  hub.code.startsWith("LAX") ||
                  hub.code.startsWith("EWR") ||
                  hub.code.startsWith("ATL");

                return (
                  <div
                    key={hub.id}
                    className="group pointer-events-auto absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ left: `${pos.xPct}%`, top: `${pos.yPct}%` }}
                    onMouseEnter={() => setHoveredHub(hub)}
                    onMouseLeave={() => setHoveredHub(null)}
                    onClick={() => setSelectedHub(isSelected ? null : hub)}
                  >
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`pointer-events-none absolute h-7 w-7 animate-ping rounded-full ${
                          isSelected
                            ? "bg-[#f26522] opacity-75"
                            : isSuperhub
                              ? "bg-[#f26522] opacity-40 duration-1000"
                              : "bg-amber-500 opacity-25 duration-1500"
                        }`}
                      />
                      <motion.div
                        animate={{
                          scale: isSelected ? 1.35 : isHovered ? 1.25 : 1,
                          y: isSelected || isHovered ? -5 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 450, damping: 25 }}
                        className={`relative flex items-center justify-center rounded-full p-1.5 shadow-lg transition-shadow ${
                          isSelected
                            ? "z-30 bg-[#f26522] text-white shadow-orange-500/80 ring-4 ring-orange-500/40"
                            : isHovered
                              ? "z-30 bg-[#f26522] text-white shadow-orange-500/50 ring-2 ring-orange-400/50"
                              : isSuperhub
                                ? "bg-gradient-to-b from-[#f26522] to-orange-700 text-white shadow-orange-950/60 ring-1 ring-orange-400/40"
                                : "border border-orange-500/40 bg-[#1e2533] text-orange-400 hover:bg-[#f26522] hover:text-white"
                        }`}
                      >
                        <div className="relative flex items-center justify-center">
                          <MapPin
                            className={`h-4 w-4 fill-current sm:h-5 sm:w-5 ${
                              isSelected ? "stroke-[2.5]" : "stroke-2"
                            }`}
                          />
                          <span className="absolute top-[3px] h-1.5 w-1.5 rounded-full bg-white opacity-90" />
                        </div>
                      </motion.div>

                      {isHovered || isSelected || isSuperhub ? (
                        <div
                          className={`pointer-events-none absolute top-full left-1/2 mt-1.5 -translate-x-1/2 rounded-md px-2 py-0.5 text-[10px] font-bold whitespace-nowrap shadow-xl transition-all ${
                            isSelected
                              ? "bg-[#f26522] text-white"
                              : "border border-slate-700 bg-[#0f141e]/95 text-slate-200"
                          }`}
                        >
                          {hub.code} • {hub.city}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {selectedHub ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative mt-8 overflow-hidden rounded-3xl border border-orange-500/40 bg-gradient-to-br from-[#131924] via-[#111722] to-[#171d2b] p-6 shadow-2xl shadow-orange-950/30 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedHub(null)}
                className="absolute top-6 right-6 cursor-pointer rounded-xl bg-slate-800/80 p-2 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
                <div className="space-y-4 lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-gradient-to-br from-[#f26522] to-orange-600 p-3 text-white shadow-lg shadow-orange-600/30">
                      <MapPin className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-md border border-orange-500/30 bg-orange-500/20 px-2.5 py-0.5 font-mono text-xs font-bold text-orange-400">
                          {selectedHub.code}
                        </span>
                        <span className="flex items-center gap-1 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                          {selectedHub.status}
                        </span>
                      </div>
                      <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                        {selectedHub.name}
                      </h3>
                      <p className="text-xs text-slate-400">{selectedHub.address}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-2xl border border-slate-800 bg-[#0b0e14]/80 p-3.5">
                      <p className="text-[11px] font-medium text-slate-400">Facility Size</p>
                      <p className="mt-0.5 text-base font-bold text-white">{selectedHub.sqft}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-[#0b0e14]/80 p-3.5">
                      <p className="text-[11px] font-medium text-slate-400">Daily Outbound Flow</p>
                      <p className="mt-0.5 text-base font-bold text-orange-400">
                        {selectedHub.dailyCapacity}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-[#0b0e14]/80 p-3.5">
                      <p className="text-[11px] font-medium text-slate-400">Same-Day Cut-off</p>
                      <p className="mt-0.5 text-base font-bold text-emerald-400">
                        {selectedHub.cutoffTime}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-[#0b0e14]/80 p-3.5">
                      <p className="text-[11px] font-medium text-slate-400">Automation Level</p>
                      <p className="mt-1 text-xs font-bold text-slate-200">
                        {selectedHub.automationLevel}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 lg:col-span-4">
                  <div className="space-y-3 rounded-2xl border border-slate-800 bg-[#0b0e14]/80 p-4">
                    <p className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#f26522] uppercase">
                      <Truck className="h-3.5 w-3.5" /> Ground Delivery Reach
                    </p>
                    <div>
                      <p className="text-[11px] text-slate-400">1-Day Ground Delivery:</p>
                      <p className="text-sm font-semibold text-white">{selectedHub.oneDayReach}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">2-Day Ground Delivery:</p>
                      <p className="text-sm font-semibold text-emerald-400">
                        {selectedHub.twoDayReach}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Connected Carriers On-Site:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedHub.carriers.map((carrier) => (
                        <span
                          key={carrier}
                          className="rounded-xl border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300"
                        >
                          {carrier}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 lg:col-span-3">
                  <div className="space-y-2.5 rounded-2xl border border-slate-800 bg-[#0b0e14]/80 p-4">
                    <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Facility Capabilities:
                    </p>
                    {selectedHub.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#f26522]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#newsletter"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f26522] to-orange-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-orange-600/30 transition-all hover:from-orange-600 hover:to-orange-700 sm:text-sm"
                  >
                    <span>Store Inventory at {selectedHub.code}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-800/90 bg-[#131924]/60 p-6 sm:p-8 md:flex-row">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="flex items-center justify-center gap-2 text-base font-bold text-white sm:text-lg md:justify-start">
              <Navigation className="h-4 w-4 text-[#f26522]" />
              Interactive Transit Speed Simulator
            </h4>
            <p className="text-xs text-slate-400">
              Select your customer destination to see the optimal auto-assigned fulfillment center
              &amp; ground delivery SLA.
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-3 sm:flex-row md:w-auto">
            <select
              value={simulatedState}
              onChange={(e) => setSimulatedState(e.target.value)}
              className="w-full cursor-pointer rounded-xl border border-slate-700 bg-[#0b0e14] px-4 py-2.5 text-xs text-slate-200 focus:border-orange-500 focus:outline-none sm:w-48"
            >
              <option value="Texas">Texas (TX)</option>
              <option value="California">California (CA)</option>
              <option value="Illinois">Illinois (IL)</option>
              <option value="New York">New York (NY)</option>
              <option value="Florida">Florida (FL)</option>
              <option value="Washington">Washington (WA)</option>
              <option value="Georgia">Georgia (GA)</option>
            </select>

            <div className="flex shrink-0 items-center gap-3 rounded-xl border border-orange-500/30 bg-[#0a0d14] px-4 py-2.5 text-xs">
              <div className="text-left">
                <span className="block text-[10px] text-slate-400">Assigned Hub:</span>
                <span className="font-bold text-[#f26522]">
                  {nearestHubForSimulation?.code} ({nearestHubForSimulation?.city})
                </span>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div className="text-left">
                <span className="block text-[10px] text-slate-400">Ground Speed:</span>
                <span className="font-bold text-emerald-400">1 - 2 Days Max</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarehouseLocationsMap;
