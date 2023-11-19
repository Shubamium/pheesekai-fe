import Button from "@/components/button/button";
import "./header.scss";
import Link from "next/link";

export function Header() {
  return (
    <header id="header">
      <section className="header-top">
        <div className="confine">
          {/* Icon Side */}
          <div className="pheeicon">
            <img src="/gif/pheeicon_speen.webp" alt="" className="main_speen" />
            <img src="/gif/rainbow.webp" alt="" className="decor rainbow" />
            <img src="/art/pheesekai_logo_y2k.png" className="decor y2klogo" />
            <img src="/art/pheesekai_wordart.png" className="decor wordart" />
          </div>

          {/* Logo Side */}
          <div className="pheelogo">
            <img src="/art/pheesekai_logo.png" alt="" className="main_logo" />
          </div>
        </div>
      </section>
      <nav className="navigation">
        <div className="confine">
          {/* Navigation Links */}
          <div className="links">
            <Link href={"/"}>
              <Button text="home" />
            </Link>
            <div className="extra-nav">
              <input
                type="checkbox"
                name="nav-activate"
                className="nav-activate"
              />
              <Button text="about" />
              <div className="extra">
                <Link href={"/setup"}>
                  <Button text="setup" />
                </Link>
                <Link href={"/games"}>
                  <Button text="games" />
                </Link>
                <Link href={"/credits"}>
                  <Button text="credits" />
                </Link>
              </div>
            </div>
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

          {/* Extra Nav Link */}
          <div className="extra-links">
            <a href="https://www.cutercounter.com/" target="_blank">
              <img
                src="https://www.cutercounter.com/hits.php?id=hxonkno&nd=6&style=11"
                alt="best free website hit counter"
              />
            </a>

            <Link href={"/contacts#guestbook"}>
              <img src={"/gif/guestbook.webp"} className={"guestbook"} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
