import Header from "../components/Header";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Plans from "../components/Plans";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="mt-16">
        <Carousel />
        <div className="container mx-auto px-4 py-8">
          {/* 📌 使用 grid 控制排列 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 about-plans">
            <div className="order-1 md:order-2">
              <Plans />
            </div>
            <div className="order-2 md:order-1">
              <About />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}