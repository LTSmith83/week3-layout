import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="site-title">
        My Website
      </Link>

      <div className="header-buttons">
        <Button href="/contact" variant="outline">
          Login
        </Button>

        <Button href="/contact">
          Register
        </Button>
      </div>
    </header>
  );
}