import React from "react";

const stats = [
  { num: "5+", label: "İl təcrübə" },
  { num: "200+", label: "Daimi müştəri" },
  { num: "50+", label: "Məhsul çeşidi" },
];

const About = () => {
  return (
    <section className="mk-about-section">
      <div className="mk-about-container">

        {/* SOL — Şəkil */}
        <div className="mk-about-img-side">
          <div className="mk-about-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=1100&q=85"
              alt="Malakanka kənd məhsulları"
              className="mk-about-img"
            />
            {/* Floating stat card */}
            <div className="mk-about-float-card">
              <div className="mk-about-float-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9975A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8C8 10 5.9 16.17 3.82 22L5.71 22C6.66 19.55 7.95 17.45 9.67 15.9C11.39 14.35 13.5 13.39 16 13.03L14.5 15L16 15L19 11L16 7L14.5 9L17 8Z" />
                </svg>
              </div>
              <div>
                <div className="mk-about-float-num">100%</div>
                <div className="mk-about-float-label">Təbii məhsullar</div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mk-about-stats">
            {stats.map((s, i) => (
              <div key={i} className="mk-about-stat">
                <div className="mk-about-stat-num">{s.num}</div>
                <div className="mk-about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SAĞ — Mətn */}
        <div className="mk-about-text-side">

          <div className="mk-about-eyebrow">
            <span className="mk-about-eline" />
            <span className="mk-about-etext">Təbiətdən süfrənizə</span>
          </div>

          <h2 className="mk-about-heading">
            Malakanka kəndin<br />
            ən təbii dadını<br />
            <em className="mk-about-heading-em">evinizə gətirir</em>
          </h2>

          <p className="mk-about-desc">
            Bizim məqsədimiz sadəcə məhsul satmaq deyil. Müştərilərimizin
            süfrəsinə təmiz, etibarlı və yüksək keyfiyyətli kənd məhsulları
            təqdim etməkdir. Hər məhsul diqqətlə seçilir, yoxlanılır və öz
            təbii keyfiyyətini qoruyaraq sizə çatdırılır.
          </p>

          {/* Feature bullets */}
          <div className="mk-about-bullets">
            {[
              "Kimyəvi qatqısız, 100% təbii xammal",
              "Birbaşa kənddən süfrənizə çatdırılır",
              "Ənənəvi reseptlər əsasında hazırlanır",
            ].map((item, i) => (
              <div key={i} className="mk-about-bullet">
                <span className="mk-about-bullet-dot" />
                {item}
              </div>
            ))}
          </div>

          <div className="mk-about-actions">
            <a href="#" className="mk-about-btn-primary">
              Haqqımızda
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="tel:+994103140808" className="mk-about-btn-secondary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Zəng edin
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap');

        .mk-about-section {
          background: #FAF7F2;
          padding: 96px 0;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .mk-about-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* IMAGE SIDE */
        .mk-about-img-side {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .mk-about-img-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
        }

        .mk-about-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          display: block;
          transition: transform .6s ease;
        }

        .mk-about-img-wrap:hover .mk-about-img {
          transform: scale(1.03);
        }

        .mk-about-float-card {
          position: absolute;
          bottom: 24px;
          right: 24px;
          background: rgba(15,36,25,0.88);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(201,151,90,0.25);
          border-radius: 14px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mk-about-float-icon {
          width: 36px;
          height: 36px;
          background: rgba(201,151,90,0.15);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mk-about-float-num {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          color: #C9975A;
          line-height: 1;
        }

        .mk-about-float-label {
          font-size: 11px;
          color: rgba(245,239,228,0.55);
          margin-top: 2px;
          letter-spacing: 0.3px;
        }

        .mk-about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(201,151,90,0.12);
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(201,151,90,0.12);
        }

        .mk-about-stat {
          background: #fff;
          padding: 20px;
          text-align: center;
        }

        .mk-about-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 400;
          color: #0F2419;
          line-height: 1;
        }

        .mk-about-stat-label {
          font-size: 11px;
          color: rgba(15,36,25,0.45);
          margin-top: 5px;
          letter-spacing: 0.3px;
        }

        /* TEXT SIDE */
        .mk-about-text-side {
          display: flex;
          flex-direction: column;
        }

        .mk-about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .mk-about-eline {
          display: block;
          width: 28px;
          height: 1px;
          background: #C9975A;
          flex-shrink: 0;
        }

        .mk-about-etext {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #C9975A;
          font-weight: 500;
        }

        .mk-about-heading {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 400;
          color: #0F2419;
          line-height: 1.15;
          margin: 0 0 28px;
          letter-spacing: 0.5px;
        }

        .mk-about-heading-em {
          font-style: italic;
          color: #8FAF82;
        }

        .mk-about-desc {
          font-size: 15px;
          line-height: 1.9;
          color: rgba(15,36,25,0.6);
          margin: 0 0 32px;
          font-weight: 300;
          max-width: 480px;
        }

        .mk-about-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 40px;
        }

        .mk-about-bullet {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: rgba(15,36,25,0.7);
          font-weight: 400;
        }

        .mk-about-bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C9975A;
          flex-shrink: 0;
        }

        .mk-about-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .mk-about-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0F2419;
          color: #F5EFE4;
          border-radius: 10px;
          padding: 13px 24px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.3px;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background .25s, border-color .25s;
        }

        .mk-about-btn-primary:hover {
          background: #1a3d2b;
          border-color: rgba(201,151,90,0.3);
        }

        .mk-about-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #0F2419;
          border-radius: 10px;
          padding: 13px 24px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.3px;
          text-decoration: none;
          border: 1px solid rgba(15,36,25,0.18);
          transition: border-color .25s, background .25s;
        }

        .mk-about-btn-secondary:hover {
          border-color: rgba(15,36,25,0.35);
          background: rgba(15,36,25,0.04);
        }

        .mk-about-btn-secondary svg {
          color: #C9975A;
        }

        @media (max-width: 1024px) {
          .mk-about-container { gap: 48px; padding: 0 40px; }
          .mk-about-heading { font-size: 38px; }
          .mk-about-img { height: 400px; }
        }

        @media (max-width: 768px) {
          .mk-about-section { padding: 60px 0; }
          .mk-about-container {
            grid-template-columns: 1fr;
            padding: 0 24px;
            gap: 40px;
          }
          .mk-about-img { height: 320px; }
          .mk-about-heading { font-size: 32px; }
        }

        @media (max-width: 480px) {
          .mk-about-container { padding: 0 16px; }
          .mk-about-heading { font-size: 28px; }
          .mk-about-actions { flex-direction: column; }
          .mk-about-btn-primary,
          .mk-about-btn-secondary { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default About;