import React from "react";

const products = [
  {
    name: "Malakanka Servelatı",
    weight: "500 q",
    price: "11.50",
    tag: "Ət məhsulu",
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Ev Qurusu Pendiri",
    weight: "1 kq",
    price: "13.00",
    tag: "Süd məhsulu",
    img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Təbii Çiçək Balı",
    weight: "1 kq",
    price: "18.00",
    tag: "Arıçılıq",
    badge: "Bestseller",
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Xiyar Turşusu",
    weight: "1 l",
    price: "4.00",
    tag: "Turşu",
    img: "https://images.unsplash.com/photo-1518736114810-3f3bedfec66a?auto=format&fit=crop&w=700&q=80",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="mk-fp-section">
      {/* Header */}
      <div className="mk-fp-header">
        <div className="mk-fp-eyebrow">
          <span className="mk-fp-eline" />
          <span className="mk-fp-etext">Təzə və keyfiyyətli</span>
          <span className="mk-fp-eline" />
        </div>
        <div className="mk-fp-title-row">
          <h2 className="mk-fp-title">Seçilmiş Məhsullar</h2>
          <a href="#" className="mk-fp-all-link">
            Bütün məhsullar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="mk-fp-grid">
        {products.map((product, i) => (
          <div key={i} className="mk-fp-card">
            {/* Image */}
            <div className="mk-fp-img-wrap">
              <div
                className="mk-fp-img"
                style={{ backgroundImage: `url(${product.img})` }}
              />
              <div className="mk-fp-img-overlay" />
              {product.badge && (
                <span className="mk-fp-badge">{product.badge}</span>
              )}
              <span className="mk-fp-tag">{product.tag}</span>
            </div>

            {/* Body */}
            <div className="mk-fp-body">
              <h3 className="mk-fp-name">{product.name}</h3>
              <p className="mk-fp-weight">{product.weight}</p>

              <div className="mk-fp-footer">
                <div className="mk-fp-price">
                  <span className="mk-fp-price-num">{product.price}</span>
                  <span className="mk-fp-price-cur">AZN</span>
                </div>

                <button className="mk-fp-btn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 7h13" />
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                  </svg>
                  Səbətə əlavə et
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Inter:wght@300;400;500;600&display=swap');

        .mk-fp-section {
          background: #F5F1EA;
          padding: 72px 80px;
          font-family: 'Inter', sans-serif;
        }

        .mk-fp-header {
          margin-bottom: 48px;
        }

        .mk-fp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .mk-fp-eline {
          display: block;
          width: 28px;
          height: 1px;
          background: #C9975A;
        }

        .mk-fp-etext {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #C9975A;
          font-weight: 500;
        }

        .mk-fp-title-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
        }

        .mk-fp-title {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 400;
          color: #0F2419;
          margin: 0;
          letter-spacing: 0.5px;
        }

        .mk-fp-all-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          color: #0F2419;
          text-decoration: none;
          border-bottom: 1px solid rgba(15,36,25,0.2);
          padding-bottom: 2px;
          transition: border-color .25s, color .25s;
          white-space: nowrap;
          margin-bottom: 6px;
        }

        .mk-fp-all-link:hover {
          color: #C9975A;
          border-color: #C9975A;
        }

        .mk-fp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .mk-fp-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(201,151,90,0.1);
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s;
        }

        .mk-fp-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 44px rgba(15,36,25,0.11);
          border-color: rgba(201,151,90,0.28);
        }

        .mk-fp-img-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
        }

        .mk-fp-img {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform .45s ease;
        }

        .mk-fp-card:hover .mk-fp-img {
          transform: scale(1.06);
        }

        .mk-fp-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(15,36,25,0.35) 100%);
        }

        .mk-fp-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #C9975A;
          color: #0F2419;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 6px;
        }

        .mk-fp-tag {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(15,36,25,0.65);
          color: rgba(245,239,228,0.85);
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 6px;
          backdrop-filter: blur(4px);
        }

        .mk-fp-body {
          padding: 20px 20px 18px;
        }

        .mk-fp-name {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 400;
          color: #0F2419;
          margin: 0 0 6px;
          line-height: 1.3;
        }

        .mk-fp-weight {
          font-size: 12px;
          color: rgba(15,36,25,0.4);
          letter-spacing: 0.5px;
          margin: 0 0 18px;
        }

        .mk-fp-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .mk-fp-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .mk-fp-price-num {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 400;
          color: #0F2419;
          line-height: 1;
        }

        .mk-fp-price-cur {
          font-size: 12px;
          color: rgba(15,36,25,0.5);
          font-weight: 400;
        }

        .mk-fp-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #0F2419;
          color: #F5EFE4;
          border: none;
          border-radius: 8px;
          padding: 9px 14px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.3px;
          transition: background .25s, border-color .25s;
          border: 1px solid transparent;
          white-space: nowrap;
        }

        .mk-fp-btn:hover {
          background: #1a3d2b;
          border-color: rgba(201,151,90,0.3);
        }

        .mk-fp-btn svg {
          color: #C9975A;
          flex-shrink: 0;
        }

        @media (max-width: 1100px) {
          .mk-fp-grid { grid-template-columns: repeat(2, 1fr); }
          .mk-fp-section { padding: 60px 40px; }
        }

        @media (max-width: 640px) {
          .mk-fp-grid { grid-template-columns: 1fr; }
          .mk-fp-section { padding: 48px 20px; }
          .mk-fp-title { font-size: 28px; }
          .mk-fp-title-row { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;