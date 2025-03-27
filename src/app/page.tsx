import Banner from "@/components/Banner";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="container mx-auto max-w-[1440px] px-4 sm:px-8 md:px-12 font-[var(--font-geist-sans)]">
    <Banner />
    <Products />
  </div>
  
  );
}
