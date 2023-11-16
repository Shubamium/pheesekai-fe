import LiveTime from "@/components/liveTime/liveTime";
import "./footer.scss";
import Clock from "react-live-clock";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="left-side">
        <a
          href="https://twitter.com/shubamium2"
          target="_blank"
          className="credits"
        >
          website design by <span>@shubamium</span>
        </a>
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
      </div>
      <div className="right-side">
        <LiveTime />
        <img src="/gif/FPCreated.gif" alt="" className="decor_brand" />
        <img src="/gif/ie.webp" alt="" className="decor_brand" />
      </div>
    </footer>
  );
}
