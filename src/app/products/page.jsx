import { Suspense } from "react";
import Products from "../components/Products";


export default function Page() {
  return (
    <Suspense fallback={<div>Yüklənir...</div>}>
      <Products/>
    </Suspense>
  );
}