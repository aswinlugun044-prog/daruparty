import Navbar from "../components/Navbar";
import AgeGate from "../components/AgeGate";

export default function Home() {
  return (
    <AgeGate>
      <Navbar />
      <div className="hero">
        <h1>Premium Liquor Store 🍺</h1>
        <p>Original Brands • Best Price • Trusted Shop</p>
        <button>View Products</button>
      </div>
    </AgeGate>
  );
}
