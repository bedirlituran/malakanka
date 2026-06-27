"use client";
import React from "react";
import Link from "next/link";

const categories = [
  { name: "Kolbasa və sosiska", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=500&q=80" },
  { name: "Pendir çeşidləri", img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=500&q=80" },
  { name: "Süd məhsulları", img: "https://plus.unsplash.com/premium_photo-1682129071833-65eed17bcf11?q=80&w=1170&auto=format&fit=crop" },
  { name: "Bal və arıçılıq", img: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1974&auto=format&fit=crop" },
  { name: "Turşu çeşidləri", img: "https://images.unsplash.com/photo-1518736114810-3f3bedfec66a?auto=format&fit=crop&w=500&q=80" },
  { name: "Ət məhsulları", img: "https://images.unsplash.com/photo-1680538491591-7ce20c900f4f?auto=format&fit=crop&w=500&q=80" },
  { name: "Hədiyyə setləri", img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=500&q=80" },
];

const Categories = () => {
  return (
    <section id="categories" className="mk-categories">
      <div className="mk-cat-header">
        <div className="mk-cat-eyebrow">
          <span className="mk-cat-line" />
          <span className="mk-cat-eyebrow-text">Çeşidlərimiz</span>
          <span className="mk-cat-line" />
        </div>
        <h2 className="mk-cat-title">Kateqoriyalar</h2>
      </div>

      <div className="mk-cat-grid">
        {categories.map((cat, i) => (
         <Link
  key={i}
  href={{
    pathname: "/products",
    query: {
      cat: cat.name,
    },
  }}
  className="mk-cat-item"
  prefetch={false}
>
            <div className="mk-cat-img-wrap">
              <div className="mk-cat-img" style={{ backgroundImage: `url(${cat.img})` }} />
              <div className="mk-cat-img-overlay" />
            </div>
            <h3 className="mk-cat-name">{cat.name}</h3>
            <div className="mk-cat-bar" />
          </Link>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&family=Inter:wght@300;400;500&display=swap');
        .mk-categories { background: #FAF7F2; padding: 72px 80px; font-family: 'Inter', sans-serif; }
        .mk-cat-header { text-align: center; margin-bottom: 52px; }
        .mk-cat-eyebrow { display: inline-flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .mk-cat-line { display: block; width: 28px; height: 1px; background: #C9975A; }
        .mk-cat-eyebrow-text { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: #C9975A; font-weight: 500; }
        .mk-cat-title { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 400; color: #0F2419; letter-spacing: 1px; margin: 0; }
        .mk-cat-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 20px; }
        .mk-cat-item { display: flex; flex-direction: column; align-items: center; text-decoration: none; cursor: pointer; transition: transform .3s ease; }
        .mk-cat-item:hover { transform: translateY(-4px); }
        .mk-cat-img-wrap { width: 120px; height: 120px; border-radius: 20px; overflow: hidden; position: relative; border: 2px solid rgba(201,151,90,0.15); transition: border-color .3s, box-shadow .3s; }
        .mk-cat-item:hover .mk-cat-img-wrap { border-color: rgba(201,151,90,0.45); box-shadow: 0 12px 32px rgba(15,36,25,0.14); }
        .mk-cat-img { width: 100%; height: 100%; background-size: cover; background-position: center; transition: transform .4s ease; }
        .mk-cat-item:hover .mk-cat-img { transform: scale(1.07); }
        .mk-cat-img-overlay { position: absolute; inset: 0; background: rgba(15,36,25,0); transition: background .3s; }
        .mk-cat-item:hover .mk-cat-img-overlay { background: rgba(15,36,25,0.12); }
        .mk-cat-name { font-size: 13px; font-weight: 400; color: #3D3D3D; margin: 14px 0 8px; text-align: center; line-height: 1.4; transition: color .3s; }
        .mk-cat-item:hover .mk-cat-name { color: #0F2419; }
        .mk-cat-bar { width: 24px; height: 1.5px; background: rgba(201,151,90,0.4); border-radius: 2px; transition: width .3s ease, background .3s; }
        .mk-cat-item:hover .mk-cat-bar { width: 40px; background: #C9975A; }
        @media (max-width: 1200px) { .mk-cat-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; } .mk-categories { padding: 60px 40px; } }
        @media (max-width: 768px) { .mk-cat-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } .mk-categories { padding: 48px 24px; } .mk-cat-img-wrap { width: 100px; height: 100px; } .mk-cat-title { font-size: 28px; } }
        @media (max-width: 480px) { .mk-cat-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .mk-categories { padding: 40px 16px; } .mk-cat-img-wrap { width: 90px; height: 90px; } .mk-cat-name { font-size: 12px; } }
      `}</style>
    </section>
  );
};

export default Categories;