import { useState, useEffect, useRef } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────
const LAST_UPDATED = "2026-05-14";

const PCDS_SUMMARY = {
  name: "PCDS 2030 — Overarching Framework",
  status: "Operational",
  statusColor: "#16a34a",
  lead: "Sarawak Government",
  value: "Target: RM282B GDP by 2030",
  summary:
    "Post COVID-19 Development Strategy 2030. Vision: a thriving society driven by data and innovation. Targets 8% annual GDP growth, RM15,000 median household income by 2030, 45% GHG intensity reduction, and 195,000 new jobs. Anchored on 6 Economic Sectors and 7 Enablers.",
  milestones: [
    { date: "Achieved", text: "Surpassed World Bank high-income threshold ahead of schedule", done: true },
    { date: "2030", text: "Target: RM282B GDP", done: false },
    { date: "2030", text: "Target: RM15,000 median monthly household income", done: false },
    { date: "2030", text: "Target: 195,000 new jobs created", done: false },
  ],
  sources: [
    { label: "Business Events Sarawak — PCDS 2030", url: "https://businesseventssarawak.com/about-sarawak/pcds2030/" },
    { label: "Sarawak Tribune — GLCs under PCDS 2030", url: "https://www.sarawaktribune.com/agencies-soes-urged-urged-to-operate-commercially-under-pcds-2030/" },
  ],
};

const SECTORS = [

// ─── OVERVIEW ────────────────────────────────────────────────────────────────
  {
    id: "overview",
    name: "PCDS 2030 Framework",
    icon: "◆",
    color: "#0d9488",
    isOverview: true,
    projects: [PCDS_SUMMARY],
  },

  // ─── ECONOMIC SECTORS (6) ──────────────────────────────────────────────────
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "⚙",
    color: "#6366f1",
    projects: [
      {
        name: "SMD Semiconductor — GaN Chip Development",
        status: "Operational",
        statusColor: "#16a34a",
        lead: "SMD Semiconductor (State-owned)",
        value: "—",
        summary:
          "Sarawak's state-owned semiconductor venture developing compound semiconductor chips based on Gallium Nitride (GaN), enhanced by AI. Part of Sarawak's push to become a technology creator, not just a user. Indonesia has expressed interest in collaboration.",
        milestones: [
          { date: "2026-Q1", text: "Premier announces GaN chip development success", done: true },
          { date: "TBD", text: "Potential Indonesia semiconductor collaboration", done: false },
        ],
        sources: [
          { label: "DayakDaily — SMD Advanced Chip Integration Centre (Sep 2025)", url: "https://dayakdaily.com/sarawak-to-establish-smd-advanced-chip-integration-centre-to-power-semiconductor-leap/" },
          { label: "DayakDaily — Keteq AI chip secures global IP rights (Oct 2025)", url: "https://dayakdaily.com/sarawak-designed-keteq-ai-chip-set-to-secure-global-ip-rights-by-early-2026/" },
        ],
      },
    ],
  },
  {
    id: "agriculture",
    name: "Commercial Agriculture",
    icon: "⚘",
    color: "#b45309",
    projects: [
      {
        name: "RM1 Billion Paddy Infrastructure Programme",
        status: "Planning",
        statusColor: "#4f46e5",
        lead: "Sarawak Government / Department of Agriculture",
        value: "RM1 billion",
        summary: "Statewide paddy irrigation/drainage/farm road programme to boost rice self-sufficiency. RM1B allocated. Targets overtaking Kedah as Malaysia's rice bowl by 2030 with 500,000 tonnes output.",
        milestones: [
          { date: "2024-06", text: "RM1B allocation announced for large-scale paddy cultivation", done: true },
          { date: "2024-11", text: "DID restructured for agriculture/urban focus", done: true },
          { date: "2025-08", text: "Target: 500,000 tonnes rice output by 2030 announced", done: true },
          { date: "2026-02", text: "Minister: RM1B infra must not be diverted to oil palm", done: true },
          { date: "2030", text: "Target: overtake Kedah as Malaysia's rice bowl", done: false },
        ],
        sources: [
          { label: "DayakDaily — RM1B allocation (Jun 2024)", url: "https://dayakdaily.com/sarawak-allocates-rm1-bln-for-large-scale-paddy-cultivation-to-boost-rice-self-sufficiency/" },
          { label: "DayakDaily — Minister warns against misuse (Feb 2026)", url: "https://dayakdaily.com/rm1-bln-in-infra-at-stake-minister-warns-against-misuse-of-paddy-facilities-for-oil-palm/" },
          { label: "DayakDaily — 500K tonnes rice target (Aug 2025)", url: "https://dayakdaily.com/sarawak-ups-rice-output-target-to-500000-tonnes-by-2030-in-premiers-bold-food-security-push/" },
          { label: "DayakDaily — Overtake Kedah as rice bowl (Aug 2025)", url: "https://dayakdaily.com/sarawak-to-overtake-kedah-as-nations-rice-bowl-by-2030-eyes-global-export-future/" },
        ],
      },
    ],
  },
  {
    id: "tourism",
    name: "Tourism",
    icon: "⛰",
    color: "#ce1126",
    projects: [
      {
        name: "Sarawak Delta Geopark",
        status: "Designated",
        statusColor: "#16a34a",
        lead: "Sarawak Government / UNESCO",
        value: "—",
        summary: "3,112 km\u00b2 geopark covering Kuching-Santubong-Bako region. Officially recognised as UNESCO Global Geopark on April 27, 2026 \u2014 Malaysia's 3rd after Langkawi and Kinabalu. Branded \u201cBorneo's Cradle of Origin\u201d for unique geological heritage.",
        milestones: [
          { date: "2024-10", text: "Geopark nomination dossier prepared", done: true },
          { date: "2025-06", text: "UNESCO field evaluation completed (Jun 23\u201326)", done: true },
          { date: "2025-09", text: "UNESCO Council acceptance secured", done: true },
          { date: "2026-04-27", text: "Officially recognised as UNESCO Global Geopark", done: true },
          { date: "Operational", text: "Geopark development and tourism infrastructure", done: false },
        ],
        sources: [
          { label: "DayakDaily — UNESCO approval (Apr 2026)", url: "https://dayakdaily.com/sarawak-delta-geopark-gets-unesco-approval/" },
          { label: "DayakDaily — Borneo's Cradle of Origin (Apr 2026)", url: "https://dayakdaily.com/borneos-cradle-of-origin-puts-sarawak-delta-geopark-on-world-map-with-unesco-recognition/" },
          { label: "DayakDaily — Heritage tourism boost (Apr 2026)", url: "https://dayakdaily.com/unesco-recognition-of-sarawak-delta-geopark-boosts-heritage-tourism-potential/" },
        ],
      },
      {
        name: "Niah National Park — UNESCO World Heritage",
        status: "Designated",
        statusColor: "#16a34a",
        lead: "Sarawak Forestry Corporation / UNESCO",
        value: "—",
        summary: "Niah Caves complex \u2014 one of SE Asia's most important archaeological sites with 65,000-year-old human remains. Inscribed as a UNESCO World Heritage Site in 2025. Premier heritage tourism draw.",
        milestones: [
          { date: "2019", text: "Nominated for UNESCO World Heritage listing", done: true },
          { date: "2025", text: "Inscribed as UNESCO World Heritage Site", done: true },
          { date: "Operational", text: "Heritage conservation and visitor facilities", done: false },
        ],
        sources: [
          { label: "DayakDaily — Bako & Lambir after Niah inscription (Aug 2025)", url: "https://dayakdaily.com/sarawak-nominates-bako-bukit-lambir-as-asean-heritage-parks-to-elevate-global-conservation-status/" },
          { label: "DayakDaily — Abang Johari: preserve Niah (Sep 2025)", url: "https://dayakdaily.com/abang-johari-it-is-everyones-responsibility-to-preserve-protect-niah-national-park/" },
        ],
      },
    ],
  },
  {
    id: "forestry",
    name: "Forestry",
    icon: "\ud83c\udf32",
    color: "#2d6a4f",
    projects: [
      {
        name: "Greenhouse Gas Emission Ordinance 2023",
        status: "Enacted",
        statusColor: "#16a34a",
        lead: "Sarawak Government",
        value: "—",
        summary:
          "Mandates GHG emissions reporting and supports development of carbon markets in Sarawak. Part of the state's broader environmental governance framework alongside the Land (Carbon Storage) Rules 2022 for CCUS and the Natural Resources and Environment Bill 2024.",
        milestones: [
          { date: "2023", text: "Ordinance enacted", done: true },
          { date: "2024", text: "Natural Resources and Environment Bill introduced", done: true },
          { date: "Operational", text: "Carbon trading market development", done: false },
        ],
        sources: [
          { label: "FULCRUM — Sarawak's low-carbon future", url: "https://fulcrum.sg/envisioning-a-low-carbon-future-sarawaks-journey-towards-sustainable-development/" },
        ],
      },
    ],
  },
  {
    id: "mining",
    name: "Mining",
    icon: "\u26cf",
    color: "#78716c",
    projects: [],
  },
  {
    id: "social-services",
    name: "Social Services",
    icon: "\u271a",
    color: "#e11d48",
    projects: [
      {
        name: "Sarawak Cancer Centre",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "JKR / Sarawak Government",
        value: "RM1.52 billion (RM500M equipment fronted)",
        summary:
          "Sarawak's first dedicated cancer centre in Kota Samarahan. PM directed JKR to expedite tendering in Q1 2026; Sarawak fronted RM500M for medical equipment. One of 5 key projects under the RM40B healthcare boost in 13MP. Expected operational before 2031.",
        milestones: [
          { date: "2025-12-03", text: "RM1.52B preliminary cost estimate announced", done: true },
          { date: "2025-12-16", text: "PM: expedite project for Q1 2026 tender", done: true },
          { date: "2025-12-17", text: "Sarawak fronts RM500M for medical equipment", done: true },
          { date: "2026-02-26", text: "Construction gathering pace in Samarahan health metropolis", done: true },
          { date: "Before 2031", text: "Target: Operational", done: false },
        ],
        sources: [
          { label: "DayakDaily — RM1.52B preliminary estimate (Dec 2025)", url: "https://dayakdaily.com/sarawak-cancer-centre-construction-to-start-by-2026-with-rm1-52-bln-preliminary-estimate-cost/" },
          { label: "DayakDaily — PM tells JKR to expedite (Dec 2025)", url: "https://dayakdaily.com/pm-tells-jkr-to-expedite-swak-cancer-centre-project-to-be-tendered-in-q1-2026-operational-before-2031/" },
          { label: "DayakDaily — RM500M medical equipment fronted (Dec 2025)", url: "https://dayakdaily.com/patients-cannot-wait-sarawak-fronts-rm500-mln-for-cancer-centre-medical-equipment/" },
          { label: "DayakDaily — Arden City construction & Samarahan health hub (Feb 2026)", url: "https://dayakdaily.com/arden-city-construction-gathers-pace-amid-healthcare-education-boom-in-kota-samarahan/" },
          { label: "DayakDaily — RM40B healthcare boost in 13MP (Jul 2025)", url: "https://dayakdaily.com/sarawak-cancer-centre-among-5-key-projects-under-rm40-bln-healthcare-boost-in-13mp/" },
        ],
      },
    ],
  },
  ];
// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function StatusBadge({ text, color }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#ffffff",
        backgroundColor: color,
        borderRadius: "2px",
      }}
    >
      {text}
    </span>
  );
}

function MilestoneItem({ milestone }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "flex-start",
        padding: "6px 0",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <span
        style={{
          flexShrink: 0,
          width: "10px",
          height: "10px",
          marginTop: "4px",
          borderRadius: "50%",
          backgroundColor: milestone.done ? "#0d9488" : "#e5e7eb",
          border: milestone.done ? "none" : "1px solid #d1d5db",
        }}
      />
      <span
        style={{
          flexShrink: 0,
          width: "90px",
          fontSize: "12px",
          color: "#6b7280",
          fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
        }}
      >
        {milestone.date}
      </span>
      <span
        style={{
          fontSize: "13px",
          color: milestone.done ? "#4b5563" : "#1f2937",
          textDecoration: milestone.done ? "none" : "none",
          lineHeight: 1.5,
        }}
      >
        {milestone.text}
      </span>
    </div>
  );
}

function ChevronIcon({ expanded, color }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{
        transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        flexShrink: 0,
      }}
    >
      <path
        d="M7.5 4.5L13 10L7.5 15.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCard({ project, sectorColor }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [expanded]);

  const doneMilestones = project.milestones.filter((m) => m.done).length;
  const totalMilestones = project.milestones.length;

  return (
    <div
      style={{
        borderLeft: `3px solid ${expanded ? sectorColor : hovered ? sectorColor : sectorColor + "88"}`,
        padding: "20px 24px",
        marginBottom: "2px",
        backgroundColor: expanded
          ? "#ffffff"
          : hovered
          ? "#f5f5f0"
          : "transparent",
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "200px" }}>
          <h3
            style={{
              margin: 0,
              fontSize: "15px",
              fontWeight: 600,
              color: "#1a1a2e",
              fontFamily: "'Newsreader', 'Georgia', serif",
              lineHeight: 1.4,
            }}
          >
            {project.name}
          </h3>
          <div style={{ marginTop: "6px", fontSize: "12px", color: "#6b7280", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span>{project.lead}</span>
            {project.value && project.value !== "—" && (
              <span style={{ color: sectorColor, fontWeight: 600 }}>
                {project.value}
              </span>
            )}
            {!expanded && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "11px",
                  color: "#9ca3af",
                  fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
                }}
              >
                <span style={{ color: doneMilestones > 0 ? "#0d9488" : "#d1d5db" }}>●</span>
                {doneMilestones}/{totalMilestones} milestones
              </span>
            )}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <StatusBadge text={project.status} color={project.statusColor} />
          <ChevronIcon
            expanded={expanded}
            color={hovered || expanded ? "#6b7280" : "#d1d5db"}
          />
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          maxHeight: expanded ? `${contentHeight}px` : "0px",
          opacity: expanded ? 1 : 0,
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease",
        }}
      >
        <div ref={contentRef} style={{ paddingTop: "16px" }}>
          <p
            style={{
              fontSize: "13.5px",
              lineHeight: 1.7,
              color: "#4b5563",
              margin: "0 0 16px 0",
              maxWidth: "720px",
            }}
          >
            {project.summary}
          </p>

          <div style={{ marginBottom: "12px" }}>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#9ca3af",
                marginBottom: "8px",
              }}
            >
              Milestones — {doneMilestones} of {totalMilestones} complete
            </div>
            {project.milestones.map((m, i) => (
              <MilestoneItem key={i} milestone={m} />
            ))}
          </div>

          <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", fontFamily: "'JetBrains Mono', 'SF Mono', monospace" }}>Sources</span>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {project.sources.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    fontSize: "11px",
                    color: sectorColor,
                    textDecoration: "none",
                    borderBottom: `1px solid ${sectorColor}33`,
                    paddingBottom: "1px",
                  }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectorSection({ sector }) {
  const totalMilestones = sector.projects.reduce((sum, p) => sum + p.milestones.length, 0);
  const doneMilestones = sector.projects.reduce(
    (sum, p) => sum + p.milestones.filter((m) => m.done).length,
    0
  );
  const pct = totalMilestones > 0 ? Math.round((doneMilestones / totalMilestones) * 100) : 0;

  return (
    <section style={{ marginBottom: "48px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          borderBottom: `1px solid ${sector.color}33`,
          paddingBottom: "12px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: sector.color,
            fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
          }}
        >
          <span style={{ marginRight: "8px" }}>{sector.icon}</span>
          {sector.name}
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#e5e7eb",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${pct}%`,
                height: "100%",
                backgroundColor: sector.color,
                transition: "width 0.6s ease",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "11px",
              color: "#9ca3af",
              fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
            }}
          >
            {doneMilestones}/{totalMilestones}
          </span>
        </div>
      </div>

      {sector.projects.map((project, i) => (
        <ProjectCard key={i} project={project} sectorColor={sector.color} />
      ))}
    </section>
  );
}

function StatsBar() {
  const totalProjects = SECTORS.reduce((sum, s) => sum + s.projects.length, 0);
  const allMilestones = SECTORS.reduce(
    (sum, s) => sum + s.projects.reduce((ps, p) => ps + p.milestones.length, 0),
    0
  );
  const doneMilestones = SECTORS.reduce(
    (sum, s) => sum + s.projects.reduce((ps, p) => ps + p.milestones.filter((m) => m.done).length, 0),
    0
  );

  const stats = [
    { label: "Projects Tracked", value: totalProjects },
    { label: "Sectors", value: 6 },
    { label: "Milestones", value: `${doneMilestones}/${allMilestones}` },
    { label: "Last Updated", value: LAST_UPDATED },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "0",
        marginBottom: "48px",
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            padding: "16px 0",
            textAlign: "center",
            borderRight: i < stats.length - 1 ? "1px solid #e5e7eb" : "none",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#374151",
              fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
            }}
          >
            {s.value}
          </div>
          <div
            style={{
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#9ca3af",
              marginTop: "4px",
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function FilterBar({ active, onFilter }) {
  const filters = [
    { id: "all", label: "All Sectors", color: "#0d9488" },
    ...SECTORS.filter((s) => !s.isOverview && s.projects.length > 0).map((s) => ({ id: s.id, label: s.name, color: s.color }))
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
        marginBottom: "36px",
        flexWrap: "wrap",
      }}
    >
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => onFilter(f.id)}
          style={{
            padding: "6px 14px",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.04em",
            border: active === f.id ? `1px solid ${f.color || "#6b7280"}` : "1px solid #d1d5db",
            borderRadius: "2px",
            backgroundColor: active === f.id ? `${(f.color || "#0d9488")}15` : "transparent",
            color: active === f.id ? (f.id === "all" ? "#1a1a2e" : f.color) : "#6b7280",
            cursor: "pointer",
            transition: "all 0.15s ease",
            fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [filter, setFilter] = useState("all");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const visibleSectors = SECTORS.filter((s) => s.isOverview || s.projects.length > 0);
  const filteredSectors = filter === "all" ? visibleSectors : visibleSectors.filter((s) => s.id === filter);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#374151",
        fontFamily: "'Newsreader', 'Georgia', serif",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600;6..72,700&family=JetBrains+Mono:wght@400;600;700&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; }
        a:hover { opacity: 0.8; }
        ::selection { background: #0d948844; }
      `}</style>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Header */}
        <header style={{ marginBottom: "40px" }}>
          <div
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#6b7280",
              fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
              marginBottom: "12px",
            }}
          >
            Sarawak Development Monitor
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#1a1a2e",
              letterSpacing: "-0.02em",
            }}
          >
            PCDS 2030
            <br />
            <span style={{ color: "#0d9488" }}>Project Tracker</span>
          </h1>
          <p
            style={{
              marginTop: "16px",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#6b7280",
              maxWidth: "600px",
            }}
          >
            Tracking Sarawak's Post COVID-19 Development Strategy 2030 — major infrastructure,
            energy transition, digital economy, and sustainability projects shaping the state's future.
          </p>
        </header>

        <StatsBar />
        <FilterBar active={filter} onFilter={setFilter} />

        {filteredSectors.map((sector) => (
          <SectorSection key={sector.id} sector={sector} />
        ))}

        {/* Footer */}
        <footer
          style={{
            marginTop: "64px",
            paddingTop: "24px",
            borderTop: "1px solid #e5e7eb",
            fontSize: "12px",
            color: "#9ca3af",
            lineHeight: 1.7,
          }}
        >
          <p style={{ margin: "0 0 8px" }}>
            Built by{" "}
            <a
              href="https://hafiy.my"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0d9488", textDecoration: "none" }}
            >
              hafiy.my
            </a>{" "}
            — an independent tracker. Not affiliated with the Sarawak Government.
          </p>
          <p style={{ margin: 0 }}>
            Data sourced from public reports, news outlets, and official announcements.
            Milestone statuses are best-effort based on available information.
          </p>
        </footer>
      </div>
    </div>
  );
}
