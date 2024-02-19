
import SectionTitle from "@/components/sectionTitle/sectionTitle";
import "./setup.scss";
import { GiProcessor } from "react-icons/gi";
import { BsGpuCard } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { BsFillMotherboardFill } from "react-icons/bs";
import { GeneralServer } from "../page";
import { fetchData, urlFor } from "@/db/client";

type PeripheralServer = GeneralServer & {
	pc:{
		gpu:string,
		processor:string,
		ram:string,
		motherboard:string,
	}
	peripherals:{
		item_name:string,
		item_image:any,
	}[]
}
export default async function Setup({}) {

	const generalData = await fetchData<PeripheralServer[]>(`
		*[_type == 'general' && preset == 'main'] {
			_id,
			_createdAt,
			_updatedAt,
			preset,
			pc,
			peripherals
		}
	
	`);

	console.log(generalData)
  return (
    <main id="container_setup">
      <section className="setup-section">
        <SectionTitle
          title="setup"
          description={
						<p>
							Listed here are <b className="green">the hardware and software</b> used to help make this channel possible! If {"you're"} curious about something listed here, please <a href="https://discord.gg/GxUEtudmRF" target="_blank" className="pink">feel free to ask me in my discord server</a>, or the next time I stream!
						</p>
					}
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
                  <p>{generalData[0].pc.processor}</p>
                </div>
              </div>

              <div className="parts">
                <div className="type">
                  <BsGpuCard />
                  <h2>GPU</h2>
                </div>
                <div className="parts-name">
                  <p>{generalData[0].pc.gpu}</p>
                </div>
              </div>

              <div className="parts">
                <div className="type">
                  <BsFillMotherboardFill />
                  <h2>Motherboard</h2>
                </div>
                <div className="parts-name">
                  <p>{generalData[0].pc.motherboard}</p>
                </div>
              </div>

              <div className="parts">
                <div className="type">
                  <FaMemory />
                  <h2>Ram</h2>
                </div>
                <div className="parts-name">
                  <p>{generalData[0].pc.ram}</p>
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
			<section className="peripheral-section">
				<img src="/art/section-title_peripherals.png" alt="" className="title" />

				<div className="peripherals">
						{generalData[0].peripherals.map((per)=>{
							return <Peripheral name={per.item_name} key={per.item_name} image={urlFor(per.item_image).url()}/>
						})}
						{/* <Peripheral name="HTC Vive 3.0 Trackers (x3 for hips and each leg)" image="https://immersive-display.com/img/cms/Blog/self_tracking-tracker_htc_vive.png"/> */}

						{/* PC */}
						{/* <Peripheral name="Akko Keyboard Kuromi 5108B Plus W/ Crystal Switches" image="https://en.akkogear.com/wp-content/uploads/2022/08/Kuromi-5108B-Plus-SP5.jpg"/>
						<Peripheral name="Neewer NW-700 Condenser Microphone (Modded by ACEROLAVR)" image="https://images.reverb.com/image/upload/s--XOi3igLZ--/a_0/f_auto,t_large/v1685933791/vs3iczb9ydc52gympicc.jpg"/>
						<Peripheral name="Presonus Audiobox USB Interface" image="https://pae-web.presonusmusic.com/uploads/products/mediabars/english/images/AudioBox-USB-8.jpg"/>
						<Peripheral name="Logitech Webcam" image="https://resource.logitech.com/w_1200,h_630,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/video-conferencing/c920e/c920e-og-image-new.jpg?v=1"/> */}

						{/* Vive */}
						{/* <Peripheral name="Valve Index" image="https://cdn.akamai.steamstatic.com/valvesoftware/images/index/HMD_3.jpg"/>
						<Peripheral name="Valve Index Controllers" image="https://cdn.akamai.steamstatic.com/valvesoftware/images/index/CTRL_4.jpg"/>
						<Peripheral name="HTC Vive 3.0 Trackers (x3 for hips and each leg)" image="https://immersive-display.com/img/cms/Blog/self_tracking-tracker_htc_vive.png"/>
						<Peripheral name="2.0 Base Stations (x3)" image="https://cdn.akamai.steamstatic.com/valvesoftware/images/index/BS_3.jpg"/> */}
				</div>
			</section>

    </main>
  );
}


type PeripheralProps = {
		image?:string,
		name:string
}
const Peripheral = ({image,name}:PeripheralProps) => {
	return <div className="peripheral">
	<div className="image">
		<img src={image} alt="" className="periph-img"/>
		<img src="/art/phee_icon.png" alt="" className="decor" />
	</div>
	<div className="detail">
		<h2>{name}</h2>
	</div>
</div>	
}