// app/services/page.tsx
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main>
      <h1>हमारी Services</h1>
      <ul>
        <li><Link href="/services/printing">Printing</Link></li>
        <li><Link href="/services/lamination">Lamination</Link></li>
      </ul>
    </main>
  );
}