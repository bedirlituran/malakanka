import React from "react";

const Topbar = () => {
  const items = [
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      ),
      text: "Malakanka MMC",
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
        </svg>
      ),
      text: "50 AZN-dən yuxarı pulsuz çatdırılma",
      accent: true,
    },
    // {
    //   icon: (
    //     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //       <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    //     </svg>
    //   ),
    //   text: "+994 10 314 08 08",
    //   href: "tel:+994103140808",
    // },
  ];

  return (
    <div
      style={{
        background: "#0F2419",
        borderBottom: "1px solid rgba(201,151,90,0.15)",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(245,239,228,0.025) 1px, transparent 0)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
        className="topbar-inner"
      >
        {items.map((item, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <div
                style={{
                  width: "1px",
                  height: "18px",
                  background: "rgba(245,239,228,0.08)",
                  flexShrink: 0,
                }}
              />
            )}

            {item.href ? (
              <a
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 0",
                  fontSize: "12px",
                  letterSpacing: "0.3px",
                  color: "#C9975A",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "color .2s",
                  fontWeight: 500,
                }}
                // onMouseEnter={(e) => (e.currentTarget.style.color = "#F5EFE4")}
                // onMouseLeave={(e) => (e.currentTarget.style.color = "#C9975A")}
              >
                <span style={{ color: "#C9975A", opacity: 0.7, display: "flex" }}>
                  {item.icon}
                </span>
                {item.text}
              </a>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 0",
                  fontSize: "12px",
                  letterSpacing: "0.3px",
                  color: item.accent ? "#8FAF82" : "rgba(245,239,228,0.5)",
                  whiteSpace: "nowrap",
                  fontWeight: item.accent ? 500 : 400,
                }}
              >
                <span
                  style={{
                    color: item.accent ? "#8FAF82" : "rgba(245,239,228,0.3)",
                    display: "flex",
                  }}
                >
                  {item.icon}
                </span>
                {item.text}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .topbar-inner {
            flex-direction: column !important;
            padding: 8px 16px !important;
            gap: 0 !important;
          }
          .topbar-inner > * { width: 100%; justify-content: center; }
        }
        @media (max-width: 1200px) {
          .topbar-inner { padding: 0 24px !important; }
        }
      `}</style>
    </div>
  );
};

export default Topbar;
