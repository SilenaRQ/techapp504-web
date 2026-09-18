import { useState, useEffect } from "react"
import logoImg from "@/imports/Logo.png"
import saStyleLogo from "@/imports/S_A_Style_Logo.png"
import p2 from "@/imports/P2.jfif"
import p1 from "@/imports/P1.jfif"
import p3 from "@/imports/P3.jfif"
import p4 from "@/imports/P4.jfif"
import p5 from "@/imports/P5.jfif"
import teamAD from "@/imports/AD.jfif"
import teamDesign from "@/imports/Desing.jfif"
import teamDS from "@/imports/DS.jfif"
import teamIAD from "@/imports/IAD.jfif"
import teamUX from "@/imports/UX.jfif"
import logoBg from "@/imports/logo_parts/logo_background.png"
import logoHair1 from "@/imports/logo_parts/parte_1.png"
import logoHair2 from "@/imports/logo_parts/parte_3.png"
import logoHair3 from "@/imports/logo_parts/parte_6.png"
import logoHair4 from "@/imports/logo_parts/parte_8.png"
import logoHair5 from "@/imports/logo_parts/parte_9.png"
import logoEyeL from "@/imports/logo_parts/parte_4.png"
import logoEyeR from "@/imports/logo_parts/parte_7.png"
import logoMouth from "@/imports/logo_parts/parte_5.png"
import logoCollar from "@/imports/logo_parts/parte_2.png"

// ── Brand tokens ──────────────────────────────────────────────────────────────
const C = {
  yellow: "#F1CD5D",
  yellowBr: "#f8ca1f",
  black: "#1D1D1D",
  blackDeep: "#141414",
  teal: "#58B299",
  navy: "#3a2f64",
  orange: "#ff6600",
  darkTeal: "#476672",
  light: "#edf0f1",
  mid: "#2a2a2a",
  border: "rgba(241,205,93,0.18)",
}

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contáctanos", href: "#contacto" },
]

// ── Service icon helpers ───────────────────────────────────────────────────────
const IconAnalytics = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect
      x="4"
      y="30"
      width="8"
      height="14"
      rx="2"
      fill={C.teal}
      opacity=".8"
    />
    <rect x="14" y="22" width="8" height="22" rx="2" fill={C.yellow} />
    <rect x="24" y="14" width="8" height="30" rx="2" fill={C.orange} />
    <rect x="34" y="6" width="8" height="38" rx="2" fill={C.teal} />
    <path
      d="M6 28 L18 18 L28 10 L38 4"
      stroke={C.yellowBr}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="6" cy="28" r="2.5" fill={C.yellow} />
    <circle cx="18" cy="18" r="2.5" fill={C.yellow} />
    <circle cx="28" cy="10" r="2.5" fill={C.orange} />
    <circle cx="38" cy="4" r="2.5" fill={C.teal} />
  </svg>
)

const IconEmbroidery = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <path
      d="M8 40 C8 40 16 20 24 16 C32 12 40 24 40 24"
      stroke={C.yellow}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M12 36 C14 28 20 22 28 20 C36 18 40 28 40 28"
      stroke={C.teal}
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="3 2"
    />
    <circle cx="24" cy="16" r="3" fill={C.yellow} />
    <path
      d="M22 8 L26 8 M24 6 L24 10"
      stroke={C.orange}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M34 14 L38 10 L42 14"
      stroke={C.teal}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38 10 L38 22"
      stroke={C.teal}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="6"
      y="38"
      width="36"
      height="2"
      rx="1"
      fill={C.yellow}
      opacity=".3"
    />
  </svg>
)

const IconSocial = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <circle cx="12" cy="24" r="7" fill={C.orange} />
    <circle cx="36" cy="12" r="7" fill={C.yellow} />
    <circle cx="36" cy="36" r="7" fill={C.teal} />
    <line
      x1="18.5"
      y1="21"
      x2="29.5"
      y2="15"
      stroke={C.light}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="18.5"
      y1="27"
      x2="29.5"
      y2="33"
      stroke={C.light}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="24" r="3" fill="white" opacity=".6" />
    <circle cx="36" cy="12" r="3" fill="white" opacity=".6" />
    <circle cx="36" cy="36" r="3" fill="white" opacity=".6" />
  </svg>
)

const IconETL = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="4" y="10" width="12" height="8" rx="2" fill={C.teal} />
    <rect x="4" y="30" width="12" height="8" rx="2" fill={C.teal} />
    <rect x="18" y="20" width="12" height="8" rx="2" fill={C.yellow} />
    <rect x="32" y="20" width="12" height="8" rx="2" fill={C.orange} />
    <path
      d="M16 14 Q22 14 22 20"
      stroke={C.teal}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M16 34 Q22 34 22 28"
      stroke={C.teal}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M30 24 L32 24"
      stroke={C.yellow}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <polygon points="29,22 33,24 29,26" fill={C.orange} />
  </svg>
)

const IconPowerBI = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="4" y="4" width="40" height="40" rx="6" fill={C.yellowBr} />
    <rect x="10" y="30" width="5" height="10" rx="1" fill={C.navy} />
    <rect x="17" y="24" width="5" height="16" rx="1" fill={C.navy} />
    <rect
      x="24"
      y="18"
      width="5"
      height="22"
      rx="1"
      fill={C.navy}
      opacity=".75"
    />
    <rect
      x="31"
      y="10"
      width="5"
      height="30"
      rx="1"
      fill={C.navy}
      opacity=".5"
    />
    <path
      d="M12 26 L20 18 L27 20 L35 10"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const SERVICES = [
  {
    id: 1,
    title: "Analítica de Datos Avanzada",
    description:
      "Transformamos datos crudos en inteligencia accionable. Diseñamos pipelines de análisis, modelos estadísticos y dashboards interactivos para impulsar decisiones estratégicas.",
    icon: <IconAnalytics />,
    tags: ["Python", "R", "SQL", "Machine Learning"],
    tabLabel: "Analítica de Datos",
    accent: C.teal,
    image: p2,
  },
  {
    id: 2,
    title: "Vectorización de Imágenes para Embroidery",
    description:
      "Convertimos logotipos, diseños e ilustraciones en archivos vectoriales optimizados para bordado industrial y artesanal. Compatibilidad con los principales formatos de maquinaria.",
    icon: <IconEmbroidery />,
    tags: ["Illustrator", "Inkscape", ".PES", ".DST", ".EXP"],
    tabLabel: "Vectorización de Imágenes",
    accent: C.yellow,
    image: p3,
  },
  {
    id: 3,
    title: "Visualización de Marcas en Redes Sociales",
    description:
      "Creamos identidades visuales coherentes y estrategias de presencia digital. Diseño de contenido, análisis de métricas y posicionamiento de marca en plataformas sociales.",
    icon: <IconSocial />,
    tags: ["Instagram", "LinkedIn", "Facebook", "Branding"],
    tabLabel: "Visualización de Marcas",
    accent: '#BE9B66',
    image: saStyleLogo,
  },
  {
    id: 4,
    title: "Automatización ETL y ELT",
    description:
      "Diseñamos e implementamos pipelines de datos robustos para extracción, transformación y carga. Integramos fuentes heterogéneas y garantizamos la calidad del dato en cada paso.",
    icon: <IconETL />,
    tags: ["Python", "dbt", "Microsoft SSIS"],
    tabLabel: "Automatización ETL",
    accent: C.teal,
    image: p5,
  },
  {
    id: 5,
    title: "Implementación de Proyectos Power BI",
    description:
      "Desarrollamos soluciones completas en Power BI: desde modelado de datos y DAX hasta reportes ejecutivos y publicación en la nube. Capacitamos a tu equipo para la autonomía analítica.",
    icon: <IconPowerBI />,
    tags: ["Power BI", "DAX", "Power Query"],
    tabLabel: "Implementación Power BI",
    accent: C.yellowBr,
    image: p4,
  },
]

const METHODOLOGY = [
  {
    title: "Proyectistas",
    description:
      "Planificamos cada solución con precisión técnica y visión de negocio, asegurando que cada proyecto se entregue a tiempo y dentro del alcance.",
    color: C.teal,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <rect
          x="4"
          y="4"
          width="32"
          height="32"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 20 L18 26 L28 14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Emprendedores",
    description:
      "Adoptamos mentalidad de startup: ágiles, orientados a resultados y dispuestos a iterar rápido para llevar valor real a nuestros clientes.",
    color: C.yellow,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path
          d="M20 4 L24 14 L36 14 L26 22 L30 34 L20 26 L10 34 L14 22 L4 14 L16 14 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Innovadores",
    description:
      "Exploramos constantemente tecnologías emergentes para ofrecer soluciones de vanguardia que anticipan las necesidades del mercado.",
    color: C.orange,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 24 L16 32 L20 30 L24 32 L24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 8 L20 11 M28 12 L25.5 14.5 M32 20 L29 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

const LOGO_PARTS = [
  { src: logoHair1, delay: 0.35 },
  { src: logoHair2, delay: 0.5 },
  { src: logoHair3, delay: 0.65 },
  { src: logoHair4, delay: 0.8 },
  { src: logoHair5, delay: 0.95 },
  { src: logoEyeL, delay: 1.2 },
  { src: logoEyeR, delay: 1.35 },
  { src: logoMouth, delay: 1.6 },
  { src: logoCollar, delay: 1.9 },
]

const TEAM = [
  { name: "Arquitectura de Datos | Power BI", photo: teamAD },
  { name: "Vectorización | Diseño", photo: teamDesign },
  { name: "Backend", photo: teamDS },
  { name: "Analista de Datos", photo: teamIAD },
  { name: "UX|UI", photo: teamUX },
]

const TECH_LOGOS = [
  {
    name: "Power BI",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7">
        <rect width="32" height="32" rx="4" fill={C.yellowBr} />
        <rect x="5" y="20" width="4" height="7" rx=".5" fill={C.navy} />
        <rect x="10" y="16" width="4" height="11" rx=".5" fill={C.navy} />
        <rect
          x="15"
          y="12"
          width="4"
          height="15"
          rx=".5"
          fill={C.navy}
          opacity=".7"
        />
        <rect
          x="20"
          y="8"
          width="4"
          height="19"
          rx=".5"
          fill={C.navy}
          opacity=".5"
        />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7">
        <path
          d="M16 3C12 3 9 4 9 7L9 11L16 11L16 12L7 12C4 12 3 14 3 17C3 20 4 22 7 22L10 22L10 18L9 18L9 17L13 17L13 22L16 22C20 22 23 21 23 18L23 14L16 14L16 13L25 13C28 13 29 11 29 8C29 5 28 3 25 3Z"
          fill="#3776AB"
        />
        <path
          d="M16 22L13 22L13 26L16 26C20 26 23 25 23 22L23 18L19 18L19 22Z"
          fill="#FFD43B"
        />
        <circle cx="12" cy="7" r="1.5" fill="white" />
        <circle cx="20" cy="25" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    name: "SQL Server",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7">
        <ellipse cx="16" cy="9" rx="11" ry="5" fill="#CC2927" />
        <rect x="5" y="9" width="22" height="6" fill="#CC2927" />
        <ellipse cx="16" cy="15" rx="11" ry="5" fill="#BE1E11" />
        <rect x="5" y="15" width="22" height="6" fill="#BE1E11" />
        <ellipse cx="16" cy="21" rx="11" ry="5" fill="#A61C0E" />
      </svg>
    ),
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [activeService, setActiveService] = useState(0)
  const [introPhase, setIntroPhase] = useState("revealing") // revealing → holding → hidden

  useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase("fading"), 3100)
    const t2 = setTimeout(() => setIntroPhase("hidden"), 3700)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && setActiveSection(e.target.id),
        ),
      { threshold: 0.3 },
    )
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Outfit', sans-serif",
        background: C.black,
        color: C.light,
      }}
    >
      {/* ── INTRO SPLASH ────────────────────────────────────────────────────── */}
      {introPhase !== "hidden" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: C.blackDeep,
            opacity: introPhase === "fading" ? 0 : 1,
            transition: "opacity 0.6s ease",
            pointerEvents: introPhase === "fading" ? "none" : "auto",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "min(220px, 45vw)",
              aspectRatio: "471 / 480",
            }}
          >
            <img
              src={logoBg}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                animation: "techapp-part-in 0.5s ease forwards",
                opacity: 0,
              }}
            />
            {LOGO_PARTS.map((p, i) => (
              <img
                key={i}
                src={p.src}
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  animation: `techapp-part-in 0.35s ease forwards`,
                  animationDelay: `${p.delay}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes techapp-part-in {
          0% { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(20,20,20,0.92)",
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          <a
            href="#inicio"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <img
              src={logoImg}
              alt="TechApp 504"
              style={{ width: 44, height: 44, objectFit: "contain" }}
            />
          </a>

          <nav
            style={{ display: "flex", gap: 32, alignItems: "center" }}
            className="hidden-mobile"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  color:
                    activeSection === l.href.slice(1)
                      ? C.yellow
                      : "rgba(255,255,255,0.6)",
                  borderBottom: `2px solid ${
                    activeSection === l.href.slice(1) ? C.yellow : "transparent"
                  }`,
                  paddingBottom: 2,
                  transition: "all 0.2s",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            style={{
              background: C.yellow,
              color: C.black,
              fontSize: 13,
              fontWeight: 700,
              padding: "8px 20px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            className="hidden-mobile"
            onMouseOver={(e) => (e.currentTarget.style.background = C.yellowBr)}
            onMouseOut={(e) => (e.currentTarget.style.background = C.yellow)}
          >
            Contáctanos
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: C.yellow,
              display: "none",
            }}
            className="show-mobile"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              style={{ width: 24, height: 24 }}
            >
              {menuOpen ? (
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div
            style={{
              background: C.blackDeep,
              borderTop: `1px solid ${C.border}`,
              padding: "12px 24px 16px",
            }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: 15,
                  fontWeight: 500,
                  color: C.yellow,
                  textDecoration: "none",
                  borderBottom: `1px solid ${C.border}`,
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        id="inicio"
        style={{
          paddingTop: 96,
          paddingBottom: 96,
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(160deg, ${C.blackDeep} 0%, #1a1535 100%)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(241,205,93,0.08) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(88,178,153,0.07) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(241,205,93,0.1)",
                  border: `1px solid rgba(241,205,93,0.25)`,
                  borderRadius: 20,
                  padding: "6px 14px",
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: C.yellow,
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: C.yellow,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Cloud Developers Crew
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "clamp(36px, 5vw, 58px)",
                  lineHeight: 1.1,
                  color: "white",
                  marginBottom: 20,
                }}
              >
                Soluciones Cloud
                <br />
                <span style={{ color: C.yellow }}>que impulsan</span>
                <br />
                tu negocio
              </h1>

              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 40,
                  maxWidth: 480,
                }}
              >
                TechApp Software es una empresa constituida desde el año 2018
                por Cloud Developers Crew expertos en brindar soluciones
                tecnológicas en plataformas Cloud de clase mundial.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="#servicios"
                  style={{
                    background: C.yellow,
                    color: C.black,
                    fontWeight: 700,
                    fontSize: 15,
                    padding: "12px 28px",
                    borderRadius: 10,
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = C.yellowBr)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = C.yellow)
                  }
                >
                  Ver Servicios
                </a>
                <a
                  href="#contacto"
                  style={{
                    background: "transparent",
                    color: C.yellow,
                    fontWeight: 700,
                    fontSize: 15,
                    padding: "12px 28px",
                    borderRadius: 10,
                    border: `2px solid ${C.yellow}`,
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = C.yellow
                    e.currentTarget.style.color = C.black
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "transparent"
                    e.currentTarget.style.color = C.yellow
                  }}
                >
                  Contáctanos
                </a>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: `0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px ${C.border}`,
                }}
              >
                <img
                  src={p1}
                  alt="Analytics dashboard"
                  style={{
                    width: "100%",
                    display: "block",
                    background: "#333",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, rgba(241,205,93,0.1) 0%, transparent 60%)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STRIP ───────────────────────────────────────────────────────── */}
      <div
        style={{
          background: C.mid,
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          padding: "18px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            gap: "clamp(20px, 5vw, 60px)",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              whiteSpace: "nowrap",
            }}
          >
            Tecnologías
          </span>
          {TECH_LOGOS.map((t) => (
            <div
              key={t.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
                opacity: 0.7,
                transition: "opacity 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.opacity = "1"
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = "0.7"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              {t.icon}
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── METHODOLOGY ──────────────────────────────────────────────────────── */}
      <section
        id="metodologia"
        style={{
          padding: "96px 0",
          background: C.blackDeep,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            right: 40,
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(241,205,93,0.06) 0%, transparent 70%)`,
          }}
        />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: C.teal,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Nuestra Forma de Trabajar
            </span>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "white",
                marginTop: 12,
              }}
            >
              ¿Cómo Trabajamos?
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {METHODOLOGY.map((m, i) => (
              <div
                key={i}
                style={{
                  background: C.mid,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: "36px 28px",
                  transition: "transform 0.2s, border-color 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)"
                  e.currentTarget.style.borderColor = m.color
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.borderColor = C.border
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: `${m.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    color: m.color,
                  }}
                >
                  {m.icon}
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "white",
                    marginBottom: 10,
                  }}
                >
                  {m.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.55)",
                    margin: 0,
                  }}
                >
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM STRIP ───────────────────────────────────────────────────────── */}
      <div
        style={{
          background: C.mid,
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          padding: "40px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <span
            style={{
              display: "block",
              textAlign: "center",
              fontSize: 11,
              fontWeight: 700,
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 28,
            }}
          >
            Nuestro Equipo
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "clamp(24px, 5vw, 56px)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {TEAM.map((t) => (
              <div
                key={t.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  width: 150,
                  opacity: 0.92,
                  transition: "opacity 0.2s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = "1"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = "0.92"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <div
                  style={{
                    width: 108,
                    height: 108,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: `2px solid ${C.border}`,
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={t.photo}
                    alt={t.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "white",
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section
        id="servicios"
        style={{ padding: "96px 0", background: C.black }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: 52 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: C.yellow,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Qué Hacemos
            </span>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "white",
                marginTop: 12,
                marginBottom: 12,
              }}
            >
              Nuestros Servicios
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.5)",
                maxWidth: 500,
                margin: 0,
              }}
            >
              Esquemas tecnológicos que brindan continuidad y crecimiento a las
              operaciones de nuestros clientes.
            </p>
          </div>

          {/* Tab strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              justifyContent: "flex-start",
              gap: 8,
              marginBottom: 32,
              flexWrap: "wrap",
            }}
          >
            {SERVICES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveService(i)}
                style={{
                  background: activeService === i ? s.accent : "transparent",
                  color:
                    activeService === i ? C.black : "rgba(255,255,255,0.5)",
                  border: `1px solid ${
                    activeService === i ? s.accent : "rgba(255,255,255,0.15)"
                  }`,
                  borderRadius: 8,
                  paddingTop: 7,
                  paddingBottom: 7,
                  paddingLeft: 30,
                  paddingRight: 30,
                  width: "fit-content",
                  height: "fit-content",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {s.tabLabel}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            style={{
              background: C.mid,
              borderRadius: 20,
              overflow: "hidden",
              border: `1px solid ${C.border}`,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            <div style={{ padding: "44px 40px" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: `${SERVICES[activeService].accent}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  border: `1px solid ${SERVICES[activeService].accent}30`,
                }}
              >
                {SERVICES[activeService].icon}
              </div>
              <h3
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 28,
                  color: "white",
                  marginBottom: 14,
                }}
              >
                {SERVICES[activeService].title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 28,
                }}
              >
                {SERVICES[activeService].description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 32,
                }}
              >
                {SERVICES[activeService].tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: `${SERVICES[activeService].accent}18`,
                      color: SERVICES[activeService].accent,
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "4px 12px",
                      borderRadius: 20,
                      border: `1px solid ${SERVICES[activeService].accent}35`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contacto"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: SERVICES[activeService].accent,
                  color: C.black,
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "10px 22px",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Solicitar servicio
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ width: 16, height: 16 }}
                >
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div
              style={{
                background: "#333",
                position: "relative",
                height: 420,
              }}
            >
              <img
                src={SERVICES[activeService].image}
                alt={SERVICES[activeService].title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: 50,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${SERVICES[activeService].accent}22 0%, transparent 60%)`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
      <section
        id="contacto"
        style={{
          padding: "96px 0",
          background: `linear-gradient(160deg, ${C.blackDeep} 0%, #1a1535 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            left: "50%",
            transform: "translateX(-50%)",
            width: 500,
            height: 300,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(241,205,93,0.06) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: C.yellow,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Hablemos
          </span>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "white",
              marginTop: 12,
              marginBottom: 16,
            }}
          >
            ¿Listo para transformar tu negocio?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.5)",
              marginBottom: 52,
              maxWidth: 460,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Contáctanos y cuéntanos sobre tu proyecto. Nuestro equipo de
            expertos cloud está listo para ayudarte.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
              marginBottom: 40,
            }}
          >
            {[
              {
                label: "Email",
                value: "techapp504hn@gmail.com",
                href: "mailto:techapp504hn@gmail.com",
                color: C.teal,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ width: 22, height: 22 }}
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                label: "Facebook",
                value: "/TechApp504",
                href: "https://facebook.com/TechApp504",
                color: C.navy,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ width: 22, height: 22 }}
                  >
                    <path d="M18 2H15C13.67 2 12.4 2.53 11.46 3.46C10.53 4.4 10 5.67 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73 14.11 6.48 14.29 6.29C14.48 6.11 14.73 6 15 6H18V2Z" />
                  </svg>
                ),
              },
              {
                label: "Instagram",
                value: "@techappsoftware",
                href: "https://instagram.com/techapp504",
                color: C.orange,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ width: 22, height: 22 }}
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                ),
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  display: "block",
                  background: C.mid,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: "24px 20px",
                  transition: "all 0.2s",
                  color: "white",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = c.color
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = C.border
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <div style={{ color: c.color, marginBottom: 10 }}>{c.icon}</div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 4,
                  }}
                >
                  {c.label}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: c.color }}>
                  {c.value}
                </div>
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/50432431280"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#25D366",
              color: "white",
              fontWeight: 700,
              fontSize: 16,
              padding: "14px 32px",
              borderRadius: 12,
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(37,211,102,0.25)",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#1EBE5C")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#25D366")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="white"
              style={{ width: 20, height: 20 }}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: C.blackDeep,
          borderTop: `1px solid ${C.border}`,
          padding: "36px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src={logoImg}
              alt="TechApp 504"
              style={{ width: 36, height: 36, objectFit: "contain" }}
            />
            <span style={{ fontSize: 15, fontWeight: 700, color: "white" }}>
              TechApp <span style={{ color: C.yellow }}>504</span>
            </span>
          </div>
          <p
            style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", margin: 0 }}
          >
            © {new Date().getFullYear()} TechApp Software 504 — Honduras
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["#inicio", "#metodologia", "#servicios", "#contacto"].map(
              (href, i) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.3)",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = C.yellow)}
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.3)")
                  }
                >
                  {["Inicio", "Metodología", "Servicios", "Contacto"][i]}
                </a>
              ),
            )}
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile   { display: none !important; }
        }
      `}</style>
    </div>
  )
}
