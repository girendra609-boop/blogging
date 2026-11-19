// app/services/layout.tsx
import Link from "next/link";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: "flex", gap: "20px" }}>
      <aside style={{ width: "200px", borderRight: "1px solid #ccc" }}>
        <h3>Services Menu</h3>
        <nav>
          <Link href="/services">All Services</Link><br />
          <Link href="/services/printing">Printing</Link><br />
          <Link href="/services/lamination">Lamination</Link>
        </nav>
      </aside>
      <div style={{ flex: 1 }}>{children}</div>
    </section>
  );
}