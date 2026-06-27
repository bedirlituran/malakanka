import React from "react";

const navLinks = [
  { label: "Ana səhifə", href: "/" },
  { label: "Məhsullar", href: "/products" },
  { label: "Haqqımızda", href: "/about" },
  { label: "Çatdırılma", href: "/delivery" },
  { label: "Əlaqə", href: "/contact" },
];

const categories = [
  { label: "Kolbasa və sosiska", href: "/products?category=Kolbasa+v%C9%99+sosiska" },
  { label: "Pendir çeşidləri", href: "/products?category=Pendir+%C3%A7e%C5%9Fidl%C9%99ri" },
  { label: "Süd məhsulları", href: "/products?category=S%C3%BCd+m%C9%99hsullar%C4%B1" },
  { label: "Bal və arıçılıq", href: "/products?category=Bal+v%C9%99+ar%C4%B1%C3%A7%C4%B1l%C4%B1q" },
  { label: "Turşu çeşidləri", href: "/products?category=Tur%C5%9Fu+%C3%A7e%C5%9Fidl%C9%99ri" },
  { label: "Peçenye və şirniyyat", href: "/products?category=Pe%C3%A7enye+v%C9%99+%C5%9Firniyyat" },
  { label: "Hədiyyə setləri", href: "/products?category=H%C9%99diyy%C9%99+setl%C9%99ri" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/malakanka_mmc/",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/994103140808?text=Salam!%20Malakanka%20m%C9%99hsullar%C4%B1%20bar%C9%99d%C9%99%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m.",
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
];

const Footer = () => {
  return (
    <footer
      style={{
        background: "#0F2419",
        color: "#F5EFE4",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
        marginTop: "80px",
      }}
    >
      {/* Dot texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(245,239,228,0.03) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "64px 48px 0",
          position: "relative",
        }}
      >
        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
            gap: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <a
              href="/"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "38px",
                  fontWeight: 400,
                  letterSpacing: "8px",
                  color: "#F5EFE4",
                  lineHeight: 1,
                }}
              >
                MALAKANKA
              </div>
            </a>

            <div
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#8FAF82",
                textTransform: "uppercase",
                marginTop: "6px",
                fontWeight: 400,
              }}
            >
              Təbii &amp; Təmiz Məhsullar
            </div>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.9,
                color: "rgba(245,239,228,0.6)",
                marginTop: "24px",
                maxWidth: "320px",
              }}
            >
              Kəndimizin təmiz havası, təbii yemləri və ənənəvi reseptləri ilə
              hazırlanan məhsulları sevgi ilə süfrənizə çatdırırıq.
            </p>

            <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                {
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  text: "+994 10 314 08 08",
                  href: "tel:+994103140808",
                },
                {
                  icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
                  text: "50 AZN-dən yuxarı pulsuz çatdırılma",
                  href: "/delivery",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "rgba(245,239,228,0.65)",
                    textDecoration: "none",
                    transition: "color .25s",
                  }}
                  // onMouseEnter={(e) => (e.currentTarget.style.color = "#C9975A")}
                  // onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,239,228,0.65)")}
                >
                  <span
                    style={{
                      width: "30px",
                      height: "30px",
                      border: "1px solid rgba(201,151,90,0.3)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="14" height="14" fill="none" stroke="#C9975A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={item.icon} />
                    </svg>
                  </span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#8FAF82", fontWeight: 500, marginBottom: "24px" }}>
              Səhifələr
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navLinks.map((item) => (
                <li key={item.label} style={{ marginBottom: "14px" }}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: "14px",
                      color: "rgba(245,239,228,0.6)",
                      textDecoration: "none",
                      transition: "color .25s",
                    }}
                    // onMouseEnter={(e) => (e.currentTarget.style.color = "#C9975A")}
                    // onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,239,228,0.6)")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#8FAF82", fontWeight: 500, marginBottom: "24px" }}>
              Kateqoriyalar
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {categories.map((item) => (
                <li
                  key={item.label}
                  style={{
                    fontSize: "13px",
                    marginBottom: "12px",
                    paddingLeft: "14px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "5px",
                      height: "5px",
                      border: "1px solid rgba(201,151,90,0.4)",
                      borderRadius: "50%",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  <a
                    href={item.href}
                    style={{
                      color: "rgba(245,239,228,0.5)",
                      textDecoration: "none",
                      transition: "color .25s",
                    }}
                    // onMouseEnter={(e) => (e.currentTarget.style.color = "#C9975A")}
                    // onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,239,228,0.5)")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Call */}
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#8FAF82", fontWeight: 500, marginBottom: "24px" }}>
              Bizi izləyin
            </div>

            <div style={{ display: "flex", gap: "10px", marginBottom: "32px" }}>
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "44px",
                    height: "44px",
                    border: "1px solid rgba(245,239,228,0.12)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(245,239,228,0.5)",
                    textDecoration: "none",
                    transition: "all .3s",
                  }}
                  // onMouseEnter={(e) => {
                  //   e.currentTarget.style.borderColor = "#C9975A";
                  //   e.currentTarget.style.color = "#C9975A";
                  //   e.currentTarget.style.background = "rgba(201,151,90,0.08)";
                  // }}
                  // onMouseLeave={(e) => {
                  //   e.currentTarget.style.borderColor = "rgba(245,239,228,0.12)";
                  //   e.currentTarget.style.color = "rgba(245,239,228,0.5)";
                  //   e.currentTarget.style.background = "transparent";
                  // }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Phone card */}
            <div
              style={{
                background: "rgba(245,239,228,0.04)",
                border: "1px solid rgba(245,239,228,0.08)",
                borderRadius: "16px",
                padding: "20px 22px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "20px",
                  right: "20px",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, rgba(201,151,90,0.5), transparent)",
                }}
              />
              <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(245,239,228,0.35)", marginBottom: "8px" }}>
                Zəng edin
              </div>
              <a
                href="tel:+994103140808"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 400,
                  color: "#C9975A",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  transition: "color .3s",
                  display: "block",
                }}
                // onMouseEnter={(e) => (e.currentTarget.style.color = "#F5EFE4")}
                // onMouseLeave={(e) => (e.currentTarget.style.color = "#C9975A")}
              >
                +994 10 314 08 08
              </a>
            </div>
          </div>
        </div>

        {/* Leaf divider */}
        <div style={{ marginTop: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(245,239,228,0.08)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(201,151,90,0.4)" }}>
              {[0, 1, 2].map((i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 22L5.71 22C6.66 19.55 7.95 17.45 9.67 15.9C11.39 14.35 13.5 13.39 16 13.03L14.5 15L16 15L19 11L16 7L14.5 9L17 8Z" />
                </svg>
              ))}
            </div>
            <div style={{ flex: 1, height: "1px", background: "rgba(245,239,228,0.08)" }} />
          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 0 28px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <p style={{ fontSize: "12px", color: "rgba(245,239,228,0.3)", letterSpacing: "0.5px", margin: 0 }}>
              © 2026 Malakanka MMC. Bütün hüquqlar qorunur.
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "rgba(201,151,90,0.5)",
                letterSpacing: "1px",
                fontStyle: "italic",
                fontFamily: "'Playfair Display', serif",
                margin: 0,
              }}
            >
              Təbiətdən süfrənizə
            </p>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Inter:wght@300;400;500&display=swap');
        @media (max-width: 1000px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;