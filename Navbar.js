import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={nav}>
      <h2>🍾 DARU SHOP</h2>
      <div>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  background: "#000",
  borderBottom: "1px solid #333",
};
