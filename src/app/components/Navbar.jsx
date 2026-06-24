"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Ana səhifə", href: "/", active: true },
  { label: "Məhsullar", href: "/products" },
  { label: "Haqqımızda", href: "/about" },
  { label: "Çatdırılma", href: "/delivery" },
  { label: "Əlaqə", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: scrolled ? "rgba(252,249,244,0.97)" : "#FAF7F2",
          borderBottom: scrolled
            ? "1px solid rgba(201,151,90,0.15)"
            : "1px solid rgba(201,151,90,0.1)",
          backdropFilter: "blur(12px)",
          transition: "all .3s ease",
          boxShadow: scrolled
            ? "0 4px 24px rgba(15,36,25,0.07)"
            : "0 1px 0 rgba(15,36,25,0.04)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 48px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
          className="navbar-inner"
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(201,151,90,0.25)",
                flexShrink: 0,
              }}
            >
              <Image
                src="/logo.png"
                alt="Malakanka logo"
                width={52}
                height={52}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  letterSpacing: "4px",
                  color: "#0F2419",
                  lineHeight: 1.1,
                }}
              >
                MALAKANKA
              </div>
              <div
                style={{
                  fontSize: "9px",
                  letterSpacing: "2.5px",
                  color: "#8FAF82",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  marginTop: "2px",
                }}
              >
                Təbii Kənd Məhsulları
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            className="nav-links"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "13px",
                  fontWeight: link.active ? 500 : 400,
                  color: link.active ? "#0F2419" : "#6B7280",
                  textDecoration: "none",
                  padding: "7px 14px",
                  borderRadius: "8px",
                  background: link.active ? "rgba(15,36,25,0.06)" : "transparent",
                  transition: "all .2s",
                  letterSpacing: "0.2px",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!link.active) {
                    e.currentTarget.style.color = "#0F2419";
                    e.currentTarget.style.background = "rgba(15,36,25,0.04)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!link.active) {
                    e.currentTarget.style.color = "#6B7280";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="tel:+994103140808"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#0F2419",
              color: "#F5EFE4",
              borderRadius: "10px",
              padding: "10px 18px",
              fontSize: "13px",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.3px",
              whiteSpace: "nowrap",
              transition: "all .25s",
              flexShrink: 0,
              border: "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1a3d2b";
              e.currentTarget.style.borderColor = "rgba(201,151,90,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0F2419";
              e.currentTarget.style.borderColor = "transparent";
            }}
            className="cta-btn"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9975A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +994 10 314 08 08
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: "#0F2419",
              flexShrink: 0,
            }}
            aria-label="Menyunu aç"
            className="hamburger"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: "1px solid rgba(201,151,90,0.12)",
              background: "#FAF7F2",
              padding: "12px 24px 20px",
            }}
            className="mobile-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: "block",
                  padding: "11px 12px",
                  fontSize: "14px",
                  fontWeight: link.active ? 500 : 400,
                  color: link.active ? "#0F2419" : "#6B7280",
                  textDecoration: "none",
                  borderRadius: "8px",
                  background: link.active ? "rgba(15,36,25,0.05)" : "transparent",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+994103140808"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginTop: "12px",
                background: "#0F2419",
                color: "#F5EFE4",
                borderRadius: "10px",
                padding: "12px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9975A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +994 10 314 08 08
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&family=Inter:wght@300;400;500&display=swap');
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .cta-btn { display: none !important; }
          .hamburger { display: flex !important; }
          .navbar-inner { padding: 0 20px !important; }
        }
        @media (max-width: 1200px) {
          .navbar-inner { padding: 0 24px !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
