import Banner from "@/components/Banner";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className=" container w-[1440px] mx-auto p-96: font-[family-name:var(--font-geist-sans)]">
      <Banner />
      <Products />
    </div>
  );
}
