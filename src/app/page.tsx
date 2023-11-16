import Button from "@/components/button/button";
import "./home.scss";
import Link from "next/link";
export default function Home() {
  return (
    <main id="container_home">
      <section className="hero-section">
        <div className="hero-text">
          <h1 style={{ display: "none" }}>Pheesekai | Vtuber | Streamer</h1>
          <img src="/art/pheesekai_logo.png" alt="" className="hero-logo" />
          <p className="intro">
            Hello~ <span className="green">My name is Phee</span>, an unlucky,{" "}
            <span className="red">red panda</span>, variety vtuber on Twitch! I
            love meeting new people and chatting with viewers~ {"Let's"} get to
            know each other a little better!
          </p>

          <div className="socials">
            <a href="https://twitter.com/pheesekai" target="_blank">
              <img src="/icon/twitter.png"></img>
            </a>
            <a href="https://www.twitch.tv/pheesekai" target="_blank">
              <img src="/icon/twitch.png"></img>
            </a>
            <a
              href="https://www.youtube.com/channel/UCEWaJNS28IFonx0PyMMeWIA"
              target="_blank"
            >
              <img src="/icon/youtube.png"></img>
            </a>
            <a href="https://discord.gg/GxUEtudmRF" target="_blank">
              <img src="/icon/discord.png"></img>
            </a>
            <a href="https://www.tiktok.com/@pheesekai" target="_blank">
              <img src="/icon/tiktok.png"></img>
            </a>
          </div>

          <Link href={"/contacts"}>
            <Button text="Say Hi!" />
          </Link>

          <img src="/gif/phee_alert.webp" alt="" className="decor_tail" />
        </div>
        <div className="hero-art">
          <img src="/art/phee-guitar.png" alt="" className="main-art" />
        </div>
      </section>
    </main>
  );
}
