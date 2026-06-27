import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const timeline = [
  { year: "2018", title: "Başlanğıc", desc: "Ailə ferması kimi fəaliyyətə başladıq. İlk müştərilərimiz qonşularımız idi." },
  { year: "2020", title: "Böyümə", desc: "Məhsul çeşidini artırıb Bakıya çatdırılmağa başladıq." },
  { year: "2022", title: "MMC qeydiyyatı", desc: "Malakanka MMC olaraq rəsmi qeydiyyatdan keçdik." },
  { year: "2024", title: "Onlayn satış", desc: "Rəsmi saytımız açıldı və WhatsApp üzərindən sifariş qəbuluna başladıq." },
];

const team = [
  { name: "Rəşad Əliyev", role: "Kurucu & Fermer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  { name: "Günel Əliyeva", role: "Keyfiyyət nəzarəti", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80" },
  { name: "Tural Məmmədov", role: "Çatdırılma & Logistika", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
];

const values = [
  { icon: "M17 8C8 10 5.9 16.17 3.82 22L5.71 22C6.66 19.55 7.95 17.45 9.67 15.9C11.39 14.35 13.5 13.39 16 13.03L14.5 15L16 15L19 11L16 7L14.5 9L17 8Z", title: "Təbiilik", desc: "Heç bir kimyəvi qatqı olmadan, ənənəvi üsullarla hazırlanır." },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Keyfiyyət", desc: "Hər məhsul göndərilmədən əvvəl diqqətlə yoxlanılır." },
  { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Sevgi", desc: "Hər məhsulu öz ailəmizə hazırladığımız kimi hazırlayırıq." },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "Etibarlılıq", desc: "5 ildən çox müştərilərimizin etibarını qazanmışıq." },
];

const AboutPage = () => {
  return (
    <div style={{ background: "#FAF7F2", fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <div style={{ position: "relative", background: "#0F2419", padding: "96px 80px", overflow: "hidden" }} className="about-hero">
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=60')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.12 }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(245,239,228,0.03) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "1px", background: "#C9975A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9975A", fontWeight: 500 }}>Biz kimik?</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "64px", fontWeight: 400, color: "#F5EFE4", margin: "0 0 20px", maxWidth: "700px", lineHeight: 1.1 }} className="about-h1">
            Təbiətin gücünü<br /><em style={{ fontStyle: "italic", color: "#8FAF82" }}>süfrənizə daşıyırıq</em>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.9, color: "rgba(245,239,228,0.55)", maxWidth: "560px", fontWeight: 300 }}>
            2018-ci ildən bəri ailəvi ferma olaraq ən keyfiyyətli, ən təbii kənd məhsullarını
            Bakı müştərilərimizin süfrəsinə çatdırırıq.
          </p>
        </div>
      </div>

      {/* Values */}
      <section style={{ padding: "80px 80px", background: "#F5F1EA" }} className="about-section">
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#C9975A" }} />
              <span style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9975A", fontWeight: 500 }}>Dəyərlərimiz</span>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#C9975A" }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 400, color: "#0F2419", margin: 0 }}>Niyə Malakanka?</h2>
          </div>

          <div className="about-values-grid">
            {values.map((v, i) => (
              <div key={i} className="about-value-card">
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(201,151,90,0.1)", border: "1px solid rgba(201,151,90,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9975A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={v.icon} />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 400, color: "#0F2419", margin: "0 0 10px" }}>{v.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "rgba(15,36,25,0.55)", margin: 0, fontWeight: 300 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Image */}
      <section style={{ padding: "80px 80px", background: "#FAF7F2" }} className="about-section">
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }} className="about-story-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "28px", height: "1px", background: "#C9975A" }} />
              <span style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9975A", fontWeight: 500 }}>Hekayəmiz</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "42px", fontWeight: 400, color: "#0F2419", margin: "0 0 24px", lineHeight: 1.2 }}>Bir ailənin arzusu böyük işə çevrildi</h2>
            <p style={{ fontSize: "15px", lineHeight: 1.9, color: "rgba(15,36,25,0.6)", margin: "0 0 20px", fontWeight: 300 }}>
              Malakanka hekayəsi sadə bir ailə arzusundan başladı — öz süfrəmizə düzdən-düz, təmiz məhsullar gətirmək. Kəndimizin təmiz havasında yetişdirilən heyvanların südü, öz arılarımızın balı, əl ilə hazırlanan kolbasalar...
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.9, color: "rgba(15,36,25,0.6)", margin: "0 0 36px", fontWeight: 300 }}>
              Bu arzunu başqaları ilə bölüşmək istədik. Bu gün yüzlərlə ailə bizim məhsulları güvənlə sifariş edir. Hər sifariş bizimlə birlikdə böyüyən bu hekayənin bir hissəsidir.
            </p>

            {/* Timeline */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {timeline.map((t, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", position: "relative", paddingBottom: i < timeline.length - 1 ? "24px" : "0" }}>
                  {i < timeline.length - 1 && (
                    <div style={{ position: "absolute", left: "19px", top: "36px", bottom: "0", width: "1px", background: "rgba(201,151,90,0.2)" }} />
                  )}
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#0F2419", border: "2px solid rgba(201,151,90,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                    <span style={{ fontSize: "9px", color: "#C9975A", fontWeight: 600, letterSpacing: "0.5px" }}>{t.year}</span>
                  </div>
                  <div style={{ paddingTop: "8px" }}>
                    <strong style={{ display: "block", fontSize: "14px", color: "#0F2419", marginBottom: "4px", fontWeight: 500 }}>{t.title}</strong>
                    <p style={{ fontSize: "13px", color: "rgba(15,36,25,0.55)", margin: 0, lineHeight: 1.7, fontWeight: 300 }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderRadius: "24px", overflow: "hidden", position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85" alt="Malakanka ferma" style={{ width: "100%", height: "560px", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", background: "rgba(15,36,25,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(201,151,90,0.2)", borderRadius: "14px", padding: "18px 20px" }}>
              <p style={{ fontSize: "14px", fontStyle: "italic", color: "rgba(245,239,228,0.8)", margin: 0, fontFamily: "'Playfair Display', serif", lineHeight: 1.6 }}>
                "Hər məhsulda ailəmizin ürəyi var — çünki bu məhsulları ilk öncə biz yeyirik."
              </p>
              <p style={{ fontSize: "12px", color: "#C9975A", margin: "8px 0 0", letterSpacing: "0.5px" }}>— Rəşad Əliyev, Kurucu</p>
            </div>
          </div>
        </div>
      </section>
        <Footer />

      {/* Team */}
      {/* <section style={{ padding: "80px 80px 96px", background: "#F5F1EA" }} className="about-section">
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#C9975A" }} />
              <span style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9975A", fontWeight: 500 }}>Komandamız</span>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#C9975A" }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 400, color: "#0F2419", margin: 0 }}>Arxanızdakı insanlar</h2>
          </div>
          <div className="about-team-grid">
            {team.map((m, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ width: "120px", height: "120px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 16px", border: "3px solid rgba(201,151,90,0.2)" }}>
                  <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 400, color: "#0F2419", margin: "0 0 6px" }}>{m.name}</h3>
                <p style={{ fontSize: "12px", color: "#C9975A", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 500, margin: 0 }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&display=swap');
        .about-hero { padding: 96px 80px !important; }
        .about-values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .about-value-card { background: #fff; border-radius: 16px; padding: 32px 24px; border: 1px solid rgba(201,151,90,0.1); transition: transform .3s, box-shadow .3s; }
        .about-value-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(15,36,25,0.09); }
        .about-team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; max-width: 640px; margin: 0 auto; }
        @media (max-width: 1100px) {
          .about-hero { padding: 64px 40px !important; }
          .about-section { padding: 56px 40px !important; }
          .about-values-grid { grid-template-columns: repeat(2, 1fr); }
          .about-story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-h1 { font-size: 44px !important; }
        }
        @media (max-width: 768px) {
          .about-hero { padding: 48px 24px !important; }
          .about-section { padding: 48px 24px !important; }
          .about-values-grid { grid-template-columns: 1fr 1fr; }
          .about-team-grid { grid-template-columns: 1fr; }
          .about-h1 { font-size: 34px !important; }
        }
        @media (max-width: 480px) {
          .about-values-grid { grid-template-columns: 1fr; }
          .about-section { padding: 40px 16px !important; }
          .about-hero { padding: 40px 16px !important; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;