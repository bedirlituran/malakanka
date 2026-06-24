import React from "react";

const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "620px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Overlay — tünd yaşıl tona əyilir, sağa doğru azalır */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, rgba(10,22,14,0.93) 0%, rgba(10,22,14,0.78) 45%, rgba(10,22,14,0.25) 100%)",
          zIndex: 1,
        }}
      />

      {/* Dot texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(245,239,228,0.025) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          zIndex: 2,
        }}
      />

      {/* Decorative vertical line */}
      <div
        style={{
          position: "absolute",
          left: "48px",
          top: "15%",
          bottom: "15%",
          width: "1px",
          background:
            "linear-gradient(180deg, transparent, rgba(201,151,90,0.4), transparent)",
          zIndex: 3,
        }}
        className="hero-line"
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 4,
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          padding: "80px 80px 80px 88px",
        }}
        className="hero-content"
      >
        <div style={{ maxWidth: "620px" }}>

          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "1px",
                background: "#C9975A",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#C9975A",
                fontWeight: 500,
              }}
            >
              Təbii · Təmiz · Ləzzətli
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "76px",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "2px",
              color: "#F5EFE4",
              margin: "0 0 10px",
            }}
            className="hero-h1"
          >
            MALAKANKA
          </h1>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "36px",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "6px",
              color: "#8FAF82",
              margin: "0 0 32px",
              fontStyle: "italic",
            }}
            className="hero-h2"
          >
            Məhsulları
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.9,
              color: "rgba(245,239,228,0.6)",
              maxWidth: "480px",
              marginBottom: "48px",
              fontWeight: 300,
              letterSpacing: "0.3px",
            }}
            className="hero-desc"
          >
            Kəndimizin təmiz havası, təbii yemləri və ənənəvi reseptləri ilə
            hazırlanan məhsulları sevgi ilə süfrənizə çatdırırıq.
          </p>

          {/* CTAs */}
          <div
            style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
            className="hero-cta"
          >
            {/* Primary */}
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                background: "#C9975A",
                color: "#0F2419",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid #C9975A",
                transition: "all .25s",
              }}
              // onMouseEnter={(e) => {
              //   e.currentTarget.style.background = "#d9a96a";
              //   e.currentTarget.style.borderColor = "#d9a96a";
              // }}
              // onMouseLeave={(e) => {
              //   e.currentTarget.style.background = "#C9975A";
              //   e.currentTarget.style.borderColor = "#C9975A";
              // }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 7h13" />
              </svg>
              Məhsullara bax
            </a>

            {/* Secondary */}
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                background: "transparent",
                color: "#F5EFE4",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid rgba(245,239,228,0.2)",
                transition: "all .25s",
              }}
              // onMouseEnter={(e) => {
              //   e.currentTarget.style.borderColor = "rgba(245,239,228,0.5)";
              //   e.currentTarget.style.background = "rgba(245,239,228,0.06)";
              // }}
              // onMouseLeave={(e) => {
              //   e.currentTarget.style.borderColor = "rgba(245,239,228,0.2)";
              //   e.currentTarget.style.background = "transparent";
              // }}
            >
              Haqqımızda
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "56px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(245,239,228,0.08)",
            }}
            className="hero-stats"
          >
            {[
              { num: "100%", label: "Təbii məhsullar" },
              { num: "50+", label: "Məhsul çeşidi" },
              { num: "1 gün", label: "Çatdırılma müddəti" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "26px",
                    fontWeight: 400,
                    color: "#C9975A",
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(245,239,228,0.4)",
                    marginTop: "4px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;500;600&display=swap');
        @media (max-width: 900px) {
          .hero-content { padding: 60px 32px !important; }
          .hero-h1 { font-size: 52px !important; }
          .hero-h2 { font-size: 26px !important; }
          .hero-line { display: none !important; }
          .hero-stats { gap: 24px !important; }
        }
        @media (max-width: 600px) {
          .hero-content { padding: 48px 20px !important; }
          .hero-h1 { font-size: 40px !important; }
          .hero-h2 { font-size: 22px !important; letter-spacing: 4px !important; }
          .hero-desc { font-size: 14px !important; }
          .hero-cta { flex-direction: column !important; }
          .hero-cta a { justify-content: center !important; }
          .hero-stats { flex-wrap: wrap; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
