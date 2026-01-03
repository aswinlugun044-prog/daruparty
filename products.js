import Navbar from "../components/Navbar";

const products = [
  { name: "Royal Stag", price: "₹650", icon: "🥃" },
  { name: "Kingfisher Beer", price: "₹180", icon: "🍺" },
  { name: "Bira White", price: "₹200", icon: "🍺" },
  { name: "McDowell’s Rum", price: "₹520", icon: "🍹" },
];

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Our Products</h1>

        <div style={grid}>
          {products.map((p, i) => (
            <div key={i} style={card}>
              <h2>{p.icon}</h2>
              <h3>{p.name}</h3>
              <p>{p.price}</p>
              <button>Order Now</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  marginTop: "30px",
};

const card = {
  background: "#1a1a1a",
  padding: "25px",
  borderRadius: "10px",
  textAlign: "center",
  border: "1px solid #333",
};
