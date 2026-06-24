import  Navbar  from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";

const steps = [
  { num: "01", title: "Sifariş verin", desc: "WhatsApp, telefon və ya sayt üzərindən sifarişinizi verin. Məhsul adını, miqdarını bildirin.", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 7h13" },
  { num: "02", title: "Təsdiqleme", desc: "Sifarişinizi aldıqdan sonra 30 dəqiqə ərzində sizi geri arayırıq və detalları təsdiqləyirik.", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  { num: "03", title: "Hazırlanır", desc: "Məhsullarınız təzə olaraq paketlənir. Keyfiyyət yoxlaması aparılır.", icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" },
  { num: "04", title: "Çatdırılır", desc: "Sifariş verildiyi gün və ya ertəsi gün göstərdiyiniz ünvana çatdırılır.", icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" },
];

const zones = [
  { name: "Nəsimi, Səbail, Xətai", fee: "Pulsuz (50 AZN+)", time: "Həmin gün" },
  { name: "Binəqədi, Nizami, Yasamal", fee: "Pulsuz (50 AZN+)", time: "Həmin gün" },
  { name: "Suraxanı, Sabunçu, Maştağa", fee: "5 AZN (50 AZN-dən az)", time: "Ertəsi gün" },
  { name: "Abşeron, Balaxanı, Hövsan", fee: "5 AZN", time: "Razılaşdırılır" },
];

const faqs = [
  { q: "Minimum sifariş məbləği varmı?", a: "Xeyr, minimum sifariş məbləği yoxdur. Lakin 50 AZN-dən aşağı sifarişlərdə çatdırılma haqqı tətbiq edilə bilər." },
  { q: "Sifariş nə qədər vaxtda çatdırılır?", a: "Bakı daxilində adətən sifariş verildiyi gün və ya ertəsi gün çatdırılır. Dəqiq vaxt sifariş zamanı razılaşdırılır." },
  { q: "Ödəniş hansı üsullarla aparılır?", a: "Nağd, bank kartı (terminalda) və ya köçürmə yolu ilə ödəniş qəbul edilir." },
  { q: "Məhsullar soyuq saxlanılırmı?", a: "Bəli, süd məhsulları və ət məhsulları soyuq zəncirdə çatdırılır. Xüsusi soyuducu çantalardan istifadə edilir." },
  { q: "Geri qaytarma siyasəti necədir?", a: "Məhsul keyfiyyətsiz olarsa, çatdırılma günü xəbər verdikdə tam geri qaytarma həyata keçirilir." },
];

const DeliveryPage = () => {
  return (
    <div style={{ background: "#FAF7F2", fontFamily: "'Inter', sans-serif" }}>
<Navbar className="bg-[#FAF7F2] text-[#0F2419] border-b border-[#C9975A]" />
      {/* Hero */}
      <div style={{ background: "#0F2419", padding: "80px 80px 72px", position: "relative", overflow: "hidden" }} className="del-hero">
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(245,239,228,0.03) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "28px", height: "1px", background: "#C9975A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9975A", fontWeight: 500 }}>Çatdırılma</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "52px", fontWeight: 400, color: "#F5EFE4", margin: "0 0 16px" }} className="del-h1">Çatdırılma & Sifariş</h1>
          <p style={{ fontSize: "15px", color: "rgba(245,239,228,0.5)", fontWeight: 300, maxWidth: "500px", lineHeight: 1.8 }}>
            50 AZN-dən yuxarı sifarişlərdə Bakı daxili çatdırılma pulsuzdur. Sifariş prosesi isə olduqca sadədir.
          </p>
        </div>
      </div>

      {/* Free delivery banner */}
      <div style={{ background: "#8FAF82", padding: "20px 80px" }} className="del-banner">
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F2419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
          </svg>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#0F2419", letterSpacing: "0.3px" }}>
            50 AZN-dən yuxarı bütün sifarişlərə Bakı daxili PULSUZ çatdırılma!
          </span>
        </div>
      </div>

      {/* Steps */}
      <section style={{ padding: "80px 80px", background: "#FAF7F2" }} className="del-section">
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#C9975A" }} />
              <span style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9975A", fontWeight: 500 }}>Necə işləyir?</span>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#C9975A" }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 400, color: "#0F2419", margin: 0 }}>Sifariş prosesi</h2>
          </div>

          <div className="del-steps-grid">
            {steps.map((s, i) => (
              <div key={i} style={{ position: "relative" }}>
                {i < steps.length - 1 && (
                  <div className="del-step-connector" />
                )}
                <div style={{ background: "#fff", borderRadius: "16px", padding: "32px 24px", border: "1px solid rgba(201,151,90,0.12)", height: "100%", boxSizing: "border-box" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", color: "rgba(201,151,90,0.25)", lineHeight: 1 }}>{s.num}</span>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(201,151,90,0.1)", border: "1px solid rgba(201,151,90,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9975A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d={s.icon} />
                      </svg>
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 400, color: "#0F2419", margin: "0 0 10px" }}>{s.title}</h3>
                  <p style={{ fontSize: "13px", lineHeight: 1.8, color: "rgba(15,36,25,0.55)", margin: 0, fontWeight: 300 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section style={{ padding: "0 80px 80px", background: "#FAF7F2" }} className="del-section2">
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ background: "#0F2419", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(201,151,90,0.15)" }}>
            <div style={{ padding: "32px 40px 24px", borderBottom: "1px solid rgba(245,239,228,0.06)" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 400, color: "#F5EFE4", margin: 0 }}>Çatdırılma zonaları</h2>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(245,239,228,0.06)" }}>
                    {["Rayon", "Çatdırılma haqqı", "Müddət"].map((h) => (
                      <th key={h} style={{ padding: "16px 40px", textAlign: "left", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#8FAF82", fontWeight: 500 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {zones.map((z, i) => (
                    <tr key={i} style={{ borderBottom: i < zones.length - 1 ? "1px solid rgba(245,239,228,0.04)" : "none" }}>
                      <td style={{ padding: "18px 40px", fontSize: "14px", color: "rgba(245,239,228,0.8)" }}>{z.name}</td>
                      <td style={{ padding: "18px 40px" }}>
                        <span style={{ display: "inline-block", background: "rgba(143,175,130,0.15)", color: "#8FAF82", fontSize: "12px", fontWeight: 500, padding: "4px 12px", borderRadius: "6px" }}>{z.fee}</span>
                      </td>
                      <td style={{ padding: "18px 40px", fontSize: "13px", color: "rgba(245,239,228,0.5)" }}>{z.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 80px 96px", background: "#FAF7F2" }} className="del-section2">
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#C9975A" }} />
              <span style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9975A", fontWeight: 500 }}>Tez-tez soruşulanlar</span>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#C9975A" }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 400, color: "#0F2419", margin: 0 }}>FAQ</h2>
          </div>

          <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "14px", padding: "24px 28px", border: "1px solid rgba(201,151,90,0.1)" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#0F2419", margin: "0 0 10px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ color: "#C9975A", fontSize: "16px", fontFamily: "'Playfair Display', serif", flexShrink: 0 }}>Q.</span>
                  {f.q}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "rgba(15,36,25,0.6)", margin: 0, paddingLeft: "26px", fontWeight: 300 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&family=Inter:wght@300;400;500;600&display=swap');
        .del-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; position: relative; }
        .del-step-connector { position: absolute; top: 40px; left: calc(100% - 10px); width: 20px; height: 1px; background: rgba(201,151,90,0.3); z-index: 1; display: none; }
        @media (max-width: 1100px) {
          .del-hero { padding: 56px 40px !important; }
          .del-section { padding: 56px 40px !important; }
          .del-section2 { padding: 0 40px 56px !important; }
          .del-banner { padding: 16px 40px !important; }
          .del-steps-grid { grid-template-columns: repeat(2, 1fr); }
          .del-h1 { font-size: 38px !important; }
        }
        @media (max-width: 768px) {
          .del-hero { padding: 48px 24px !important; }
          .del-section { padding: 48px 24px !important; }
          .del-section2 { padding: 0 24px 48px !important; }
          .del-banner { padding: 14px 24px !important; }
          .del-steps-grid { grid-template-columns: 1fr; }
          .del-h1 { font-size: 32px !important; }
        }
        @media (max-width: 480px) {
          .del-hero { padding: 40px 16px !important; }
          .del-section { padding: 40px 16px !important; }
          .del-section2 { padding: 0 16px 40px !important; }
          .del-banner { padding: 12px 16px !important; }
        }
      `}</style>
      <Footer/>
    </div>
  );
};

export default DeliveryPage;