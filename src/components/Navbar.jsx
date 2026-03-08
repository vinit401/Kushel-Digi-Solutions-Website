import { useState, useEffect } from "react";
import logo from "../assets/images/Kds logo 1.png";

// ─── Global dark mode CSS ────────────────────────────────────────────────────
const DARK_STYLE_ID = "kds-dark-mode-style";
function injectDarkCSS() {
  if (document.getElementById(DARK_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = DARK_STYLE_ID;
  style.textContent = `
    body { transition: background 0.4s ease, color 0.4s ease; }

    /* ── HERO ── */
    body.dark-mode .hero-wrapper        { background-color: #060f1e !important; }
    body.dark-mode .hero-left h1        { color: #f0f6ff !important; }
    body.dark-mode .welcome-text        { color: #60a5fa !important; }
    body.dark-mode .hero-desc           { color: #94a3b8 !important; }
    body.dark-mode .hero-services span  { color: #7cb9f0 !important; }
    body.dark-mode .hero-services span::before { color: #3c83cb !important; }

    /* ── ABOUT ── */
    body.dark-mode .about-wrapper       { background-color: #080f1e !important; }
    body.dark-mode .about-heading       { color: #f0f6ff !important; }
    body.dark-mode .about-desc          { color: #94a3b8 !important; }
    body.dark-mode .about-watermark     { color: rgba(255,255,255,0.03) !important; }
    body.dark-mode .feature-box         { background-color: #0f2240 !important; border-color: #1d4ed8 !important; }
    body.dark-mode .feature-box h4      { color: #60a5fa !important; }
    body.dark-mode .feature-box p       { color: #94a3b8 !important; }

    /* ── SERVICES ── */
    body.dark-mode .services-wrapper    { background-color: #060f1e !important; }
    body.dark-mode .services-label      { color: #f0f6ff !important; }
    body.dark-mode .services-sub        { color: #64748b !important; }
    body.dark-mode .service-card        { background-color: #0d1f3c !important; border-color: #1e3a5f !important; }
    body.dark-mode .service-card-title  { color: #60a5fa !important; }
    body.dark-mode .service-card-desc   { color: #94a3b8 !important; }
    body.dark-mode .service-img-wrap    { background: #0f2240 !important; }
    body.dark-mode .learn-text          { color: #60a5fa !important; }

    /* ── PLATFORM ── */
    body.dark-mode .platform-wrapper    { background-color: #060f1e !important; }
    body.dark-mode .platform-heading    { color: #e2e8f0 !important; }
    body.dark-mode .platform-box        { background-color: #0d1f3c !important; box-shadow: 0 0 0 1px #1e3a5f !important; }

    /* ── WORKING PROCESS ── */
    body.dark-mode .wp-outer            { background-color: #04080f !important; }
    body.dark-mode .wp-inner            { background-color: #060f1e !important; }
    body.dark-mode .wp-title            { color: #f0f6ff !important; }
    body.dark-mode .wp-desc-text        { color: #94a3b8 !important; }

    /* ── PORTFOLIO ── */
    body.dark-mode .portfolio-outer       { background-color: #060f1e !important; }
    body.dark-mode .portfolio-watermark   { color: rgba(255,255,255,0.03) !important; }
    body.dark-mode .portfolio-heading h2  { color: #f0f6ff !important; }
    body.dark-mode .portfolio-heading p   { color: #94a3b8 !important; }
    body.dark-mode .portfolio-link        { color: #e2e8f0 !important; }
    body.dark-mode .portfolio-card span   { color: #64748b !important; }

    /* ── TESTIMONIALS ── */
    body.dark-mode .testimonials-outer      { background-color: #080f1e !important; }
    body.dark-mode .testimonials-heading span { color: #60a5fa !important; }
    body.dark-mode .testimonials-heading h2 { color: #f0f6ff !important; }
    body.dark-mode .testimonial-text        { color: #94a3b8 !important; }
    body.dark-mode .client-name             { color: #f0f6ff !important; }
    body.dark-mode .client-role             { color: #64748b !important; }

    /* ── KNOWN FOR ── */
    body.dark-mode .knownfor-wrapper        { background-color: #060f1e !important; }
    body.dark-mode .knownfor-title          { color: #f0f6ff !important; }
    body.dark-mode .knownfor-list li        { color: #94a3b8 !important; }
    body.dark-mode .knownfor-image-wrap     { background: #0d1f3c !important; }
    body.dark-mode .knownfor-image-wrap::before { border-color: rgba(96,165,250,0.15) !important; }

    /* ── FAQ ── */
    body.dark-mode .faq-wrapper             { background-color: #04080f !important; }
    body.dark-mode .faq-heading h2          { color: #f0f6ff !important; }
    body.dark-mode .faq-heading h2 span     { color: #60a5fa !important; }
    body.dark-mode .faq-heading p           { color: #94a3b8 !important; }
    body.dark-mode .faq-item                { background-color: #0d1f3c !important; box-shadow: 0 2px 10px rgba(0,0,0,0.3) !important; }
    body.dark-mode .faq-item p              { color: #cbd5e1 !important; }
    body.dark-mode .faq-cta p              { color: #94a3b8 !important; }

    /* ── CONTACT ── */
    body.dark-mode .contact-wrapper         { background-color: #060f1e !important; }
    body.dark-mode .contact-left h2         { color: #f0f6ff !important; }
    body.dark-mode .contact-sub             { color: #94a3b8 !important; }
    body.dark-mode .contact-form input,
    body.dark-mode .contact-form textarea   {
      background: #0d1f3c !important;
      border-color: #1e3a5f !important;
      color: #e2e8f0 !important;
    }
    body.dark-mode .contact-form input::placeholder,
    body.dark-mode .contact-form textarea::placeholder { color: #475569 !important; }
    body.dark-mode .info-item h4            { color: #f0f6ff !important; }
    body.dark-mode .info-item p             { color: #94a3b8 !important; }
    body.dark-mode .info-icon               { background: #0d1f3c !important; }
    body.dark-mode .contact-tabs button     { color: #64748b !important; }
    body.dark-mode .contact-tabs .active    { color: #60a5fa !important; border-color: #60a5fa !important; }
    body.dark-mode .captcha-box             { background: #0d1f3c !important; border-color: #1e3a5f !important; }
    body.dark-mode .captcha-left            { color: #94a3b8 !important; }
  `;
  document.head.appendChild(style);
}

// ─── NAV ITEMS ───────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "About Us",      id: "about"        },
  { label: "Services",      id: "services"     },
  { label: "Our Portfolio", id: "portfolio"    },
  { label: "Testimonials",  id: "testimonials" },
  { label: "Contact Us",    id: "contact"      },
];

const NAV_H = 64;

export default function Navbar() {
  const [open,    setOpen]    = useState(false);
  const [dark,    setDark]    = useState(false);
  const [hovered, setHovered] = useState(null);
  const [mobile,  setMobile]  = useState(window.innerWidth <= 768);

  useEffect(() => { injectDarkCSS(); }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
  }, [dark]);

  useEffect(() => {
    const fn = () => setMobile(window.innerWidth <= 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  // ── Styles ──
  const s = {
    navbar: {
      background: dark
        ? "linear-gradient(135deg, #060f1e 0%, #0d1f3c 100%)"
        : "#ffffff",
      borderBottom: `1px solid ${dark ? "rgba(96,165,250,0.15)" : "#eee"}`,
      position: "sticky", top: 0, zIndex: 999,
      transition: "background 0.4s, border-color 0.4s",
      boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.4)" : "0 1px 4px rgba(0,0,0,0.06)",
    },
    container: {
      maxWidth: 1200, margin: "auto", padding: "0 20px",
      height: NAV_H, display: "flex", alignItems: "center",
      justifyContent: "space-between", gap: 16,
    },

    // ✅ Logo filter: dark mode pe brightness boost + slight glow
    logo: {
      height: 36,
      cursor: "pointer",
      display: "block",
      transition: "filter 0.4s ease",
      filter: dark
        ? "brightness(0) invert(1) drop-shadow(0 0 6px rgba(96,165,250,0.5))"
        : "none",
    },

    desktopLinks: { listStyle: "none", display: "flex", gap: 28 },
    rightGroup: { display: "flex", alignItems: "center", gap: 12, flexShrink: 0 },

    toggle: {
      width: 52, height: 28, borderRadius: 999,
      background: dark
        ? "linear-gradient(135deg, #1d4ed8, #3c83cb)"
        : "#e2e8f0",
      border: "none", cursor: "pointer",
      position: "relative",
      transition: "background 0.4s",
      outline: "none", flexShrink: 0,
      boxShadow: dark ? "0 0 12px rgba(60,131,203,0.4)" : "none",
    },
    thumb: {
      position: "absolute", top: 3,
      left: dark ? 27 : 3,
      width: 22, height: 22, borderRadius: "50%",
      background: dark ? "#060f1e" : "#fff",
      boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
      transition: "left 0.3s cubic-bezier(.34,1.56,.64,1), background 0.4s",
      display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12,
    },
    callBtn: {
      background: dark
        ? "linear-gradient(135deg, #1d4ed8, #3c83cb)"
        : "#3c83cb",
      color: "#fff", border: "none",
      padding: "10px 18px", cursor: "pointer", fontSize: 13,
      fontWeight: 600, whiteSpace: "nowrap", borderRadius: 4,
      fontFamily: "'Manrope', sans-serif",
      boxShadow: dark ? "0 0 16px rgba(60,131,203,0.3)" : "none",
      transition: "background 0.3s, box-shadow 0.3s",
    },
    burger: {
      display: "flex", flexDirection: "column", gap: 5,
      cursor: "pointer", background: "none", border: "none", padding: 4,
    },
    overlay: {
      position: "fixed", inset: 0,
      background: "rgba(0,0,0,0.55)",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "opacity 0.35s", zIndex: 997, backdropFilter: "blur(4px)",
    },
    drawer: {
      position: "fixed", top: 0, right: 0,
      height: "100vh", width: "min(320px, 85vw)",
      background: dark
        ? "linear-gradient(160deg, #060f1e 0%, #0d1f3c 100%)"
        : "#ffffff",
      zIndex: 998,
      boxShadow: dark
        ? "-8px 0 40px rgba(0,0,0,0.6), inset 1px 0 0 rgba(96,165,250,0.1)"
        : "-8px 0 40px rgba(0,0,0,0.15)",
      transform: open ? "translateX(0)" : "translateX(100%)",
      transition: "transform 0.4s cubic-bezier(.32,.72,0,1), background 0.4s",
      display: "flex", flexDirection: "column", overflowY: "auto",
    },
    drawerTop: {
      height: NAV_H, display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 24px",
      borderBottom: `1px solid ${dark ? "rgba(96,165,250,0.12)" : "#f0f0f0"}`,
      flexShrink: 0,
    },
    drawerClose: {
      width: 36, height: 36, borderRadius: "50%",
      background: dark ? "rgba(96,165,250,0.1)" : "#f1f5f9",
      border: `1px solid ${dark ? "rgba(96,165,250,0.2)" : "transparent"}`,
      cursor: "pointer", fontSize: 16,
      color: dark ? "#60a5fa" : "#1a1a1a",
      display: "flex", alignItems: "center", justifyContent: "center",
      transition: "background 0.2s",
    },
    drawerBottom: {
      padding: "20px 24px 32px",
      borderTop: `1px solid ${dark ? "rgba(96,165,250,0.12)" : "#f0f0f0"}`,
    },
    drawerCallBtn: {
      width: "100%",
      background: dark
        ? "linear-gradient(135deg, #1d4ed8, #3c83cb)"
        : "#3c83cb",
      color: "#fff", border: "none",
      padding: 14, fontSize: 14, fontWeight: 700,
      borderRadius: 8, cursor: "pointer",
      fontFamily: "'Manrope', sans-serif", marginBottom: 16,
      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
      boxShadow: dark ? "0 4px 20px rgba(29,78,216,0.4)" : "none",
      transition: "opacity 0.2s",
    },
    drawerToggleRow: {
      display: "flex", alignItems: "center", justifyContent: "space-between",
      fontSize: 13,
      color: dark ? "#60a5fa" : "#666",
      fontWeight: 600, paddingTop: 10,
    },
  };

  const burgerBar = (i) => ({
    display: "block", width: 24, height: 2,
    background: dark ? "#60a5fa" : "#1a1a1a",
    borderRadius: 2, transformOrigin: "center",
    transition: "transform 0.35s cubic-bezier(.34,1.56,.64,1), opacity 0.25s, background 0.4s",
    transform: [
      open ? "translateY(7px) rotate(45deg)"  : "none",
      open ? "scaleX(0)"                       : "none",
      open ? "translateY(-7px) rotate(-45deg)" : "none",
    ][i],
    opacity: i === 1 && open ? 0 : 1,
  });

  const drawerItemStyle = (i) => ({
    padding: "15px 28px", fontSize: 15, fontWeight: 600,
    color: dark ? "#cbd5e1" : "#1a1a1a",
    cursor: "pointer", listStyle: "none",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    borderLeft: dark ? "2px solid transparent" : "2px solid transparent",
    transition: `background 0.2s, color 0.2s, border-color 0.2s, transform 0.4s ${i * 55}ms, opacity 0.4s ${i * 55}ms`,
    transform: open ? "translateX(0)" : "translateX(30px)",
    opacity: open ? 1 : 0,
  });

  const ToggleBtn = () => (
    <button style={s.toggle} onClick={() => setDark((d) => !d)} aria-label="Toggle dark mode">
      <span style={s.thumb}>{dark ? "🌙" : "☀️"}</span>
    </button>
  );

  return (
    <>
      <nav style={s.navbar}>
        <div style={s.container}>

          {/* ✅ Logo with dark mode filter — turns white + glows in dark */}
          <img
            src={logo}
            alt="KDS Logo"
            style={s.logo}
            onClick={() => scroll("hero")}
          />

          {/* Desktop links */}
          {!mobile && (
            <ul style={s.desktopLinks}>
              {NAV_ITEMS.map(({ label, id }) => (
                <li
                  key={id}
                  onClick={() => scroll(id)}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    fontSize: 14, fontWeight: 500, listStyle: "none",
                    color: hovered === id
                      ? "#3c83cb"
                      : dark ? "#94a3b8" : "#1a1a1a",
                    cursor: "pointer", whiteSpace: "nowrap",
                    transition: "color 0.2s", position: "relative",
                    letterSpacing: "0.01em",
                  }}
                >
                  {label}
                  <span style={{
                    position: "absolute", bottom: -3, left: 0,
                    width: hovered === id ? "100%" : "0%",
                    height: 2,
                    background: dark
                      ? "linear-gradient(90deg, #1d4ed8, #60a5fa)"
                      : "#3c83cb",
                    borderRadius: 2,
                    transition: "width 0.25s ease", display: "block",
                  }} />
                </li>
              ))}
            </ul>
          )}

          <div style={s.rightGroup}>
            <ToggleBtn />
            {!mobile ? (
              <button
                style={s.callBtn}
                onClick={() => scroll("contact")}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                CALL NOW : 9045301702
              </button>
            ) : (
              <button style={s.burger} onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
                {[0, 1, 2].map((i) => <span key={i} style={burgerBar(i)} />)}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div style={s.overlay} onClick={() => setOpen(false)} />

      {/* Mobile Drawer */}
      <div style={s.drawer}>

        <div style={s.drawerTop}>
          {/* ✅ Logo in drawer also gets the filter */}
          <img
            src={logo}
            alt="KDS Logo"
            style={{
              height: 32,
              display: "block",
              transition: "filter 0.4s ease",
              filter: dark
                ? "brightness(0) invert(1) drop-shadow(0 0 5px rgba(96,165,250,0.4))"
                : "none",
            }}
          />
          <button style={s.drawerClose} onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Drawer links */}
        <ul style={{ listStyle: "none", padding: "12px 0", flex: 1 }}>
          {NAV_ITEMS.map(({ label, id }, i) => (
            <li
              key={id}
              style={drawerItemStyle(i)}
              onClick={() => scroll(id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = dark
                  ? "rgba(96,165,250,0.08)"
                  : "#f0f7ff";
                e.currentTarget.style.color = dark ? "#60a5fa" : "#3c83cb";
                e.currentTarget.style.borderLeftColor = dark ? "#3c83cb" : "#3c83cb";
                e.currentTarget.style.paddingLeft = "32px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = dark ? "#cbd5e1" : "#1a1a1a";
                e.currentTarget.style.borderLeftColor = "transparent";
                e.currentTarget.style.paddingLeft = "28px";
              }}
            >
              {label}
              <span style={{
                width: 28, height: 28, borderRadius: "50%",
                background: dark
                  ? "linear-gradient(135deg, #1d4ed8, #3c83cb)"
                  : "#3c83cb",
                color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, flexShrink: 0,
                boxShadow: dark ? "0 0 10px rgba(60,131,203,0.3)" : "none",
              }}>→</span>
            </li>
          ))}
        </ul>

        {/* Drawer bottom */}
        <div style={s.drawerBottom}>
          <button
            style={s.drawerCallBtn}
            onClick={() => scroll("contact")}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          >
            📞 9045301702
          </button>
          <div style={s.drawerToggleRow}>
            <span>{dark ? "🌙 Dark Mode" : "☀️ Light Mode"}</span>
            <ToggleBtn />
          </div>
        </div>

      </div>
    </>
  );
}