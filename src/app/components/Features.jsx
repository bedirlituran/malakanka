import React from "react";

const features = [
  {
    title: "100% Təbii Məhsullar",
    desc: "Heç bir kimyəvi qatqı əlavə olunmadan, birbaşa təbiətdən.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 22L5.71 22C6.66 19.55 7.95 17.45 9.67 15.9C11.39 14.35 13.5 13.39 16 13.03L14.5 15L16 15L19 11L16 7L14.5 9L17 8Z" />
      </svg>
    ),
  },
  {
    title: "Pulsuz Çatdırılma",
    desc: "50 AZN və yuxarı sifarişlərdə Bakı daxili pulsuz çatdırılma.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    title: "Keyfiyyət Zəmanəti",
    desc: "Hər məhsul təzəlik və keyfiyyət standartlarına uyğun yoxlanılır.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Təhlükəsiz Ödəniş",
    desc: "Nağd, kart və onlayn ödəniş üsulları mövcuddur.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Müştəri Dəstəyi",
    desc: "Suallarınız üçün hər zaman əlaqə saxlaya bilərsiniz.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section className="mk-feat-section">
      <div className="mk-feat-strip">
        {features.map((f, i) => (
          <div key={i} className="mk-feat-item">
            <div className="mk-feat-icon-wrap">
              {f.icon}
            </div>
            <div className="mk-feat-text">
              <strong className="mk-feat-title">{f.title}</strong>
              <p className="mk-feat-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');

        .mk-feat-section {
          padding: 0 80px 72px;
          font-family: 'Inter', sans-serif;
          background: #F5F1EA;
        }

        .mk-feat-strip {
          background: #0F2419;
          border-radius: 16px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          overflow: hidden;
          border: 1px solid rgba(201,151,90,0.12);
          position: relative;
        }

        .mk-feat-strip::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,151,90,0.4), transparent);
        }

        .mk-feat-item {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 28px 24px;
          border-right: 1px solid rgba(245,239,228,0.06);
          transition: background .25s;
          position: relative;
        }

        .mk-feat-item:last-child {
          border-right: none;
        }

        .mk-feat-item:hover {
          background: rgba(245,239,228,0.03);
        }

        .mk-feat-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(201,151,90,0.1);
          border: 1px solid rgba(201,151,90,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9975A;
          flex-shrink: 0;
          transition: background .25s, border-color .25s;
        }

        .mk-feat-item:hover .mk-feat-icon-wrap {
          background: rgba(201,151,90,0.18);
          border-color: rgba(201,151,90,0.4);
        }

        .mk-feat-title {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #F5EFE4;
          letter-spacing: 0.2px;
          line-height: 1.4;
        }

        .mk-feat-desc {
          margin: 4px 0 0;
          font-size: 12px;
          color: rgba(245,239,228,0.45);
          line-height: 1.7;
          font-weight: 300;
        }

        .mk-feat-text {
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 1100px) {
          .mk-feat-strip { grid-template-columns: repeat(3, 1fr); }
          .mk-feat-section { padding: 0 40px 60px; }
          .mk-feat-item:nth-child(3) { border-right: none; }
          .mk-feat-item:nth-child(3),
          .mk-feat-item:nth-child(4),
          .mk-feat-item:nth-child(5) {
            border-top: 1px solid rgba(245,239,228,0.06);
          }
        }

        @media (max-width: 768px) {
          .mk-feat-strip { grid-template-columns: repeat(2, 1fr); }
          .mk-feat-section { padding: 0 24px 48px; }
          .mk-feat-item { border-right: 1px solid rgba(245,239,228,0.06); }
          .mk-feat-item:nth-child(even) { border-right: none; }
          .mk-feat-item:nth-child(n+3) { border-top: 1px solid rgba(245,239,228,0.06); }
          .mk-feat-item:nth-child(3) { border-right: 1px solid rgba(245,239,228,0.06); }
        }

        @media (max-width: 480px) {
          .mk-feat-strip { grid-template-columns: 1fr; }
          .mk-feat-section { padding: 0 16px 40px; }
          .mk-feat-item { border-right: none !important; border-top: 1px solid rgba(245,239,228,0.06) !important; }
          .mk-feat-item:first-child { border-top: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Features;