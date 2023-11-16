import Button from "@/components/button/button";
import "./header.scss";
import Link from "next/link";

export function Header() {
  return (
    <header id="header">
      <section className="header-top">
        <div className="confine"></div>
      </section>
      <nav className="navigation">
        <div className="confine">
          <div className="links">
            <Link href={"/"}>
              <Button text="home" />
            </Link>
            <Link href={"/about"}>
              <Button text="about" />
            </Link>
            <Link href={"/artworks"}>
              <Button text="artworks" />
            </Link>
            <Link href={"/showcase"}>
              <Button text="showcase" />
            </Link>
            <Link href={"/contacts"}>
              <Button text="contacts" />
            </Link>
          </div>

          <div className="extra-links">
            <Link href={"/guestlist"}>Guestlist</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
