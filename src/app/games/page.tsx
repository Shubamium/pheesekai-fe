import SectionTitle from "@/components/sectionTitle/sectionTitle";
import "./games.scss";
import { GiProcessor } from "react-icons/gi";
import { BsGpuCard } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { BsFillMotherboardFill } from "react-icons/bs";
export default function Games({}) {
  return (
    <main id="container_games">
      <section className="setup-section">
        <SectionTitle
          title="setup"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="setup">
          <div className="specs">
            <img
              src="/art/section-title_pc.png"
              alt=""
              className="spec-title"
            />
            <div className="parts-list">
              <div className="parts">
                <div className="type">
                  <GiProcessor />
                  <h2>Processor</h2>
                </div>
                <div className="parts-name">
                  <p>Intel Core i7 11700</p>
                </div>
              </div>

              <div className="parts">
                <div className="type">
                  <BsGpuCard />
                  <h2>GPU</h2>
                </div>
                <div className="parts-name">
                  <p>NVIDIA GeForce RTX 3060 Ti</p>
                </div>
              </div>

              <div className="parts">
                <div className="type">
                  <BsFillMotherboardFill />
                  <h2>Motherboard</h2>
                </div>
                <div className="parts-name">
                  <p>Gigabyte B560 DS3H AC-Y1</p>
                </div>
              </div>

              <div className="parts">
                <div className="type">
                  <FaMemory />
                  <h2>Ram</h2>
                </div>
                <div className="parts-name">
                  <p>4x NMUD480E82-3000D 8GB</p>
                </div>
              </div>
            </div>
            <div className="decor-pattern"></div>
          </div>
          <div className="art">
            <img
              src="/art/phee-portrait.png"
              alt=""
              className="main-portrait"
            />

            <img src="/gif/esc_skull_99.gif" alt="" className="decor skull" />
            <img
              src="/gif/rainbowspinningstar.gif"
              alt=""
              className="decor bigstar"
            />
            <img src="/gif/3dstar.gif" alt="" className="decor smallstar" />
            <img
              src="/background/abstract.png"
              alt=""
              className="decor abstract"
            />
            <img src="/art/upside_down.png" alt="" className="decor text" />
          </div>
        </div>
      </section>
    </main>
  );
}
