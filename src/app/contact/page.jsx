"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const contactMethods = [
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    title: "Telefon",
    value: "+994 10 314 08 08",
    sub: "Bazar ertəsi – Şənbə, 09:00–19:00",
    href: "tel:+994103140808",
    cta: "Zəng edin",
  },
  {
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    title: "WhatsApp",
    value: "+994 10 314 08 08",
    sub: "Sürətli cavab üçün WhatsApp seçin",
    href: "https://wa.me/994103140808?text=Salam!%20Malakanka%20məhsulları%20barədə%20məlumat%20almaq%20istəyirəm.",
    cta: "WhatsApp'da yazın",
    whatsapp: true,
  },
  {
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z M12 9m-2.5 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0",
    title: "Ünvan",
    value: "Malakanka kəndi, Azərbaycan",
    sub: "Birbaşa kənddən çatdırılır",
    href: "https://maps.google.com",
    cta: "Xəritədə gör",
  },
];

const workHours = [
  { day: "Bazar ertəsi – Cümə", time: "09:00 – 19:00" },
  { day: "Şənbə", time: "09:00 – 17:00" },
  { day: "Bazar", time: "Bağlıdır" },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Salam! Saytdan mesaj:\nAd: ${form.name}\nTelefon: ${form.phone}\nMesaj: ${form.message}`;
    window.open(`https://wa.me/994103140808?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <div style={{ background: "#FAF7F2", fontFamily: "'Inter', sans-serif" }}>
<Navbar/>
      {/* Hero */}
      <div style={{ background: "#0F2419", padding: "80px 80px 72px", position: "relative", overflow: "hidden" }} className="con-hero">
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(245,239,228,0.03) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "28px", height: "1px", background: "#C9975A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9975A", fontWeight: 500 }}>Bizimlə əlaqə</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "52px", fontWeight: 400, color: "#F5EFE4", margin: "0 0 16px" }} className="con-h1">Əlaqə</h1>
          <p style={{ fontSize: "15px", color: "rgba(245,239,228,0.5)", fontWeight: 300, maxWidth: "480px", lineHeight: 1.8 }}>
            Sifariş vermək, məhsullar haqqında sual vermək və ya əlavə məlumat almaq üçün bizimlə əlaqə saxlayın.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "72px 80px 96px" }} className="con-body">
        <div className="con-grid">

          {/* Left — Contact methods + hours */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* Methods */}
            {contactMethods.map((m, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "16px", padding: "28px", border: "1px solid rgba(201,151,90,0.1)", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: m.whatsapp ? "rgba(37,211,102,0.1)" : "rgba(201,151,90,0.1)", border: `1px solid ${m.whatsapp ? "rgba(37,211,102,0.25)" : "rgba(201,151,90,0.2)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={m.whatsapp ? "#25D366" : "none"} stroke={m.whatsapp ? "none" : "#C9975A"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={m.icon} />
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(15,36,25,0.4)", margin: "0 0 4px", fontWeight: 500 }}>{m.title}</p>
                  <p style={{ fontSize: "17px", fontWeight: 500, color: "#0F2419", margin: "0 0 4px", fontFamily: "'Playfair Display', serif" }}>{m.value}</p>
                  <p style={{ fontSize: "12px", color: "rgba(15,36,25,0.45)", margin: "0 0 16px", lineHeight: 1.6 }}>{m.sub}</p>
                  <a
                    href={m.href}
                    target={m.whatsapp || m.title === "Ünvan" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: m.whatsapp ? "#25D366" : "#0F2419",
                      textDecoration: "none",
                      borderBottom: `1px solid ${m.whatsapp ? "rgba(37,211,102,0.4)" : "rgba(15,36,25,0.2)"}`,
                      paddingBottom: "2px",
                    }}
                  >
                    {m.cta}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}

            {/* Work hours */}
            <div style={{ background: "#0F2419", borderRadius: "16px", padding: "28px", border: "1px solid rgba(201,151,90,0.15)" }}>
              <p style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#8FAF82", margin: "0 0 20px", fontWeight: 500 }}>İş saatları</p>
              {workHours.map((w, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < workHours.length - 1 ? "1px solid rgba(245,239,228,0.06)" : "none" }}>
                  <span style={{ fontSize: "13px", color: "rgba(245,239,228,0.65)" }}>{w.day}</span>
                  <span style={{ fontSize: "13px", color: w.time === "Bağlıdır" ? "rgba(245,239,228,0.3)" : "#C9975A", fontWeight: 500 }}>{w.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — WhatsApp form */}
          <div style={{ background: "#fff", borderRadius: "20px", padding: "40px", border: "1px solid rgba(201,151,90,0.12)", alignSelf: "start" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: "64px", height: "64px", background: "rgba(37,211,102,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: "#0F2419", margin: "0 0 10px" }}>Mesajınız göndərildi!</h3>
                <p style={{ fontSize: "14px", color: "rgba(15,36,25,0.55)", lineHeight: 1.7 }}>WhatsApp açıldı. Qısa zaman içində sizinlə əlaqə saxlayacağıq.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: "24px", background: "#0F2419", color: "#F5EFE4", border: "none", borderRadius: "10px", padding: "12px 24px", fontSize: "13px", fontWeight: 500, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
                  Yeni mesaj
                </button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: "28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <div style={{ width: "28px", height: "1px", background: "#C9975A" }} />
                    <span style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9975A", fontWeight: 500 }}>Mesaj göndərin</span>
                  </div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 400, color: "#0F2419", margin: 0 }}>WhatsApp üzərindən yazın</h2>
                  <p style={{ fontSize: "13px", color: "rgba(15,36,25,0.5)", margin: "8px 0 0", lineHeight: 1.7 }}>Formu doldurun, mesajınız avtomatik olaraq WhatsApp'a göndəriləcək.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { label: "Adınız", key: "name", type: "text", placeholder: "Ad Soyad" },
                    { label: "Telefon nömrəsi", key: "phone", type: "tel", placeholder: "+994 __ ___ __ __" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label style={{ display: "block", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(15,36,25,0.45)", marginBottom: "8px", fontWeight: 500 }}>{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        required
                        style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid rgba(201,151,90,0.2)", background: "#FAF7F2", fontSize: "14px", color: "#0F2419", outline: "none", fontFamily: "'Inter', sans-serif", boxSizing: "border-box", transition: "border-color .2s" }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(201,151,90,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(201,151,90,0.2)")}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(15,36,25,0.45)", marginBottom: "8px", fontWeight: 500 }}>Mesajınız</label>
                    <textarea
                      placeholder="Sifariş vermək istəyirəm..."
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid rgba(201,151,90,0.2)", background: "#FAF7F2", fontSize: "14px", color: "#0F2419", outline: "none", fontFamily: "'Inter', sans-serif", boxSizing: "border-box", resize: "vertical", transition: "border-color .2s" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(201,151,90,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,151,90,0.2)")}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ background: "#25D366", color: "#fff", border: "none", borderRadius: "12px", padding: "14px", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", transition: "background .2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#1ead54")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp ilə göndər
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&family=Inter:wght@300;400;500;600&display=swap');
        .con-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start; }
        @media (max-width: 1100px) {
          .con-hero { padding: 56px 40px !important; }
          .con-body { padding: 48px 40px 72px !important; }
          .con-h1 { font-size: 38px !important; }
        }
        @media (max-width: 900px) {
          .con-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .con-hero { padding: 48px 24px !important; }
          .con-body { padding: 36px 24px 56px !important; }
          .con-h1 { font-size: 32px !important; }
        }
        @media (max-width: 480px) {
          .con-hero { padding: 40px 16px !important; }
          .con-body { padding: 28px 16px 48px !important; }
        }
      `}</style>
      <Footer/>
    </div>
  );
};

export default ContactPage;