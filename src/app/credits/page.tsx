import SectionTitle from "@/components/sectionTitle/sectionTitle";
import './credits.scss'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import CreditHeader from "@/components/creditHeader/creditHeader";
export default function Credits() {
	return (
		<main id="container_credits">
			<CreditHeader/>
			<SectionTitle title="credits" description="Some text about the people here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
			<section className="credit-list">
				<Credit handle="@person_name" link="" pfp="/gif/cheer_emote.gif" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
			</section>


			<section className="mods-section">
				<SectionTitle title="meet the mods" description="Meet the lovely mods that help keep this channel running! Each person has greatly aided in helping the channel grow, and deserves a lil' recognition!"/>
				<div className="mods-list">
					<Mods pfp="/gif/cheer_emote.gif" name="Mods Name" link="https://google.com" about="A little description aboutiption about iption about iption about  them"/>
					<Mods pfp="/gif/cheer_emote.gif" name="Mods Name" link="google.com" about="A little description aboutiption about iption about iption about  them"/>
					<Mods pfp="/gif/cheer_emote.gif" name="Mods Name" link="/" about="A little description aboutiption about iption about iption about  them"/>
					<Mods pfp="/gif/cheer_emote.gif" name="Mods Name" link="/" about="A little description aboutiption about iption about iption about  them"/>
					<Mods pfp="/gif/cheer_emote.gif" name="Mods Name" link="/" about="A little description about them"/>
				</div>
			</section>

			<section className="management-info">
					<div className="window">
						<div className="window-header">
							<h2>Management-info.exe</h2>
							<img src="/gif/xp-close.png" alt="" />
						</div>
						<div className="window-body">
							<div className="pfp">
									<img src="https://pbs.twimg.com/profile_images/1663178759996952577/DZApEBW2_400x400.jpg" alt="" />
							</div>
							<div className="details">
								<h2 className="name">Tessa</h2>
								<p className="handle"><a href="https://twitter.com/tessa_vt">@tessa_vt</a> <BsArrowRight/> <a href="https://vgen.co/tessa_vt">VGEN</a> </p>
								<p className="bio">Tessa has been managing Phee for 3 months. She is a quick-witted and understanding manager who has worked with many talents and addressed a variety of needs, from event management to debut planning, to leading growth in content creation. For business inquiries, Tessa can be reached through her Twitter or e-mail.</p>
								<div className="socials">
									<a href="https://twitter.com/tessa_vt"><img src="/icon/twitter.png"/></a>
									<a href="https://www.twitch.tv/tessavillaverde"><img src="/icon/twitch.png"/></a>
									<a href="https://discord.com/invite/GN5nprTpvF"><img src="/icon/discord.png"/></a>
								</div>
							</div>
						</div>
					</div>
			</section>
		</main>
	)
}

type CreditProps = {
	handle:string;
	role:string;
	link?:string;
	pfp:string;
}
function Credit({handle,role,link,pfp}:CreditProps){
	return <a href={link} target="_blank" className="credit">
	<div className="pfp">
		<img src={pfp} alt="" />
	</div>
	<div className="details">
		<h2>{handle}</h2>
		<p>{role}</p>
	</div>
</a>
}

type ModsProps = {
	pfp:string,
	name:string,
	link:string,
	about:string,
}
function Mods({pfp,name,link,about}:ModsProps){
	return <a href={link} target="_blank" className="mods">
			<div className="pfp-part">
				<img src={pfp} alt="" />
			</div>
			<div className="details-part">
				<h2 className="name">{name}</h2>
				<p className="about">{about}</p>
			</div>
	</a>
}