"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const allProducts = [
  { id: 1, name: "Malakanka Servelatı", weight: "500 q", price: "11.50", category: "Kolbasa və sosiska", tag: "Ət məhsulu", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80", badge: "Bestseller" },
  { id: 2, name: "Kənd Sosiskası", weight: "400 q", price: "8.00", category: "Kolbasa və sosiska", tag: "Ət məhsulu", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80" },
  { id: 3, name: "Ev Kolbasası", weight: "600 q", price: "14.00", category: "Kolbasa və sosiska", tag: "Ət məhsulu", img: "https://images.unsplash.com/photo-1606851091851-e8c8c0fca5ba?auto=format&fit=crop&w=700&q=80" },
  { id: 4, name: "Ev Qurusu Pendiri", weight: "1 kq", price: "13.00", category: "Pendir çeşidləri", tag: "Süd məhsulu", img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=700&q=80" },
  { id: 5, name: "Duzlu Pendir", weight: "500 q", price: "7.50", category: "Pendir çeşidləri", tag: "Süd məhsulu", img: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&w=700&q=80" },
  { id: 6, name: "Kənd Kəsməyi", weight: "1 kq", price: "9.00", category: "Pendir çeşidləri", tag: "Süd məhsulu", img: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?auto=format&fit=crop&w=700&q=80" },
  { id: 7, name: "Təbii İnek Südü", weight: "1 l", price: "3.50", category: "Süd məhsulları", tag: "Süd məhsulu", img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80" },
  { id: 8, name: "Ev Qaymağı", weight: "500 q", price: "6.00", category: "Süd məhsulları", tag: "Süd məhsulu", img: "https://images.unsplash.com/photo-1587734195342-99d2b29c3ce5?auto=format&fit=crop&w=700&q=80" },
  { id: 9, name: "Kənd Yağı", weight: "500 q", price: "12.00", category: "Süd məhsulları", tag: "Süd məhsulu", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80", badge: "Yeni" },
  { id: 10, name: "Təbii Çiçək Balı", weight: "1 kq", price: "18.00", category: "Bal və arıçılıq", tag: "Arıçılıq", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=700&q=80", badge: "Bestseller" },
  { id: 11, name: "Qarabaşaq Balı", weight: "1 kq", price: "22.00", category: "Bal və arıçılıq", tag: "Arıçılıq", img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=700&q=80" },
  { id: 12, name: "Arı Sütü", weight: "100 q", price: "25.00", category: "Bal və arıçılıq", tag: "Arıçılıq", img: "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=700&q=80" },
  { id: 13, name: "Xiyar Turşusu", weight: "1 l", price: "4.00", category: "Turşu çeşidləri", tag: "Turşu", img: "https://images.unsplash.com/photo-1518736114810-3f3bedfec66a?auto=format&fit=crop&w=700&q=80" },
  { id: 14, name: "Kələm Turşusu", weight: "1 l", price: "3.50", category: "Turşu çeşidləri", tag: "Turşu", img: "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=700&q=80" },
  { id: 15, name: "Limon Turşusu", weight: "500 q", price: "5.00", category: "Turşu çeşidləri", tag: "Turşu", img: "https://images.unsplash.com/photo-1587224570254-8b1adbc8e7c3?auto=format&fit=crop&w=700&q=80" },
  { id: 16, name: "Kənd Qiyməsi", weight: "1 kq", price: "16.00", category: "Ət məhsulları", tag: "Ət məhsulu", img: "https://images.unsplash.com/photo-1680538491591-7ce20c900f4f?auto=format&fit=crop&w=700&q=80" },
  { id: 17, name: "Ev Quzu Əti", weight: "1 kq", price: "24.00", category: "Ət məhsulları", tag: "Ət məhsulu", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80", badge: "Təzə" },
  { id: 18, name: "Premium Hədiyyə Seti", weight: "Qarışıq", price: "45.00", category: "Hədiyyə setləri", tag: "Hədiyyə", img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=700&q=80", badge: "Yeni" },
  { id: 19, name: "Bal & Pendir Seti", weight: "Qarışıq", price: "32.00", category: "Hədiyyə setləri", tag: "Hədiyyə", img: "https://images.unsplash.com/photo-1519915028121-7d3463d5b1ff?auto=format&fit=crop&w=700&q=80" },
];

const categories = [
  "Kolbasa və sosiska",
  "Pendir çeşidləri",
  "Süd məhsulları",
  "Bal və arıçılıq",
  "Turşu çeşidləri",
  "Ət məhsulları",
  "Hədiyyə setləri",
];

const Products = () => {
  const searchParams = useSearchParams();

  const activeCategory = useMemo(() => {
    const category = searchParams?.get("cat");
    return categories.includes(category) ? category : null;
  }, [searchParams]);

  const filtered = useMemo(() => {
    return allProducts.filter((product) => {
      return !activeCategory || product.category === activeCategory;
    });
  }, [activeCategory]);

  const heroTitle = activeCategory ? `Məhsullarımız | ${activeCategory}` : "Məhsullarımız";
  const heroSubtitle = activeCategory
    ? `Hazırda baxırsınız: ${activeCategory}`
    : "Kəndimizin ən təbii dadlarını süfrənizə çatdırırıq";

  return (
    <>
      <div style={{ background: "#FAF7F2", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>

      <div style={{ background: "#0F2419", padding: "64px 80px 56px", position: "relative", overflow: "hidden" }} className="prod-hero">
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(245,239,228,0.03) 1px, transparent 0)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "28px", height: "1px", background: "#C9975A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9975A", fontWeight: 500 }}>Malakanka MMC</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "52px", fontWeight: 400, color: "#F5EFE4", margin: "0 0 12px", letterSpacing: "1px" }} className="prod-h1">{heroTitle}</h1>
          <p style={{ fontSize: "15px", color: "rgba(245,239,228,0.5)", fontWeight: 300, maxWidth: "480px" }}>{heroSubtitle}</p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "18px" }}>
            {activeCategory && (
              <Link href="/products" className="prod-all-btn">
                ← Bütün məhsullar
              </Link>
            )}
            <Link href="/#categories" className="prod-all-btn">
              ← Kateqoriyalara geri dön
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "48px 80px 96px" }} className="prod-body">
        <div style={{ display: "flex", gap: "16px", marginBottom: "40px", flexWrap: "wrap", alignItems: "center" }} className="prod-toolbar">
        </div>

        <p style={{ fontSize: "12px", color: "rgba(15,36,25,0.4)", marginBottom: "28px", letterSpacing: "0.3px" }}>
          {filtered.length} məhsul tapıldı
        </p>

        <div className="prod-grid">
          {filtered.map((product) => (
            <div key={product.id} className="prod-card">
              <div className="prod-img-wrap">
                <div className="prod-img" style={{ backgroundImage: `url(${product.img})` }} />
                <div className="prod-img-overlay" />
                {product.badge && <span className="prod-badge">{product.badge}</span>}
                <span className="prod-tag">{product.tag}</span>
              </div>
              <div className="prod-body-inner">
                <h3 className="prod-name">{product.name}</h3>
                <p className="prod-weight">{product.weight}</p>
                <div className="prod-footer">
                  <div className="prod-price">
                    <span className="prod-price-num">{product.price}</span>
                    <span className="prod-price-cur">AZN</span>
                  </div>

                  <a href={`https://wa.me/994103140808?text=${encodeURIComponent(`Salam! "${product.name}" məhsulunu sifariş etmək istəyirəm.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prod-btn"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Sifariş et
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 20px", color: "rgba(15,36,25,0.4)" }}>
            <p style={{ fontSize: "18px", fontFamily: "'Playfair Display', serif" }}>Məhsul tapılmadı</p>
            <p style={{ fontSize: "13px", marginTop: "8px" }}>Axtarışı dəyişdirərək yenidən cəhd edin</p>
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&family=Inter:wght@300;400;500;600&display=swap');
        .prod-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
        .prod-card { background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(201,151,90,0.1); transition: transform .3s, box-shadow .3s, border-color .3s; }
        .prod-card:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(15,36,25,0.11); border-color: rgba(201,151,90,0.28); }
        .prod-img-wrap { position: relative; height: 210px; overflow: hidden; }
        .prod-img { width: 100%; height: 100%; background-size: cover; background-position: center; transition: transform .45s; }
        .prod-card:hover .prod-img { transform: scale(1.06); }
        .prod-img-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 50%, rgba(15,36,25,0.32) 100%); }
        .prod-badge { position: absolute; top: 12px; left: 12px; background: #C9975A; color: #0F2419; font-size: 10px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; }
        .prod-tag { position: absolute; bottom: 12px; left: 12px; background: rgba(15,36,25,0.65); color: rgba(245,239,228,0.85); font-size: 10px; letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; backdrop-filter: blur(4px); }
        .prod-body-inner { padding: 20px 20px 18px; }
        .prod-name { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 400; color: #0F2419; margin: 0 0 5px; line-height: 1.3; }
        .prod-weight { font-size: 12px; color: rgba(15,36,25,0.4); margin: 0 0 16px; }
        .prod-footer { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .prod-price { display: flex; align-items: baseline; gap: 4px; }
        .prod-price-num { font-family: 'Playfair Display', serif; font-size: 22px; color: #0F2419; line-height: 1; }
        .prod-price-cur { font-size: 11px; color: rgba(15,36,25,0.45); }
        .prod-btn { display: inline-flex; align-items: center; gap: 6px; background: #25D366; color: #fff; border: none; border-radius: 8px; padding: 8px 13px; font-size: 12px; font-weight: 500; cursor: pointer; font-family: 'Inter', sans-serif; text-decoration: none; transition: background .2s; white-space: nowrap; }
        .prod-btn:hover { background: #1ead54; }
        .prod-all-btn { display: inline-flex; margin-top: 18px; padding: 10px 16px; border-radius: 999px; background: rgba(245,239,228,0.15); color: #F5EFE4; text-decoration: none; font-size: 12px; font-weight: 500; border: 1px solid rgba(245,239,228,0.3); transition: all .2s; }
        .prod-all-btn:hover { background: rgba(245,239,228,0.25); }
        @media (max-width: 1100px) { .prod-grid { grid-template-columns: repeat(3, 1fr); } .prod-body { padding: 40px 40px 72px !important; } .prod-hero { padding: 48px 40px 40px !important; } }
        @media (max-width: 768px) { .prod-grid { grid-template-columns: repeat(2, 1fr); } .prod-body { padding: 32px 24px 56px !important; } .prod-hero { padding: 40px 24px !important; } .prod-h1 { font-size: 36px !important; } }
        @media (max-width: 480px) { .prod-grid { grid-template-columns: 1fr; } .prod-body { padding: 24px 16px 48px !important; } .prod-toolbar { flex-direction: column; align-items: stretch !important; } }
      `}</style>
    </div>
    </>
  );
};

export default Products;