import SectionTitle from "@/components/sectionTitle/sectionTitle";
import './credits.scss'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
export default function Credits() {
	return (
		<main id="container_credits">
			<section className="credit-header">
					<div className="header-art">
						<img src="/gif/cheer_emote.gif" alt="" className="emote" />
						<img src="/art/pheesekai_logo.png" alt="" className="logo"/>
					</div>
					<SectionTitle title="credits" description="Some text about the people here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
			</section>
			<section className="credit-list">
				<Credit handle="@person_name" link="" pfp="/gif/cheer_emote.gif" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
				<Credit handle="@person_name" link="/" pfp="" role="Position Name"/>
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
								<p className="bio">3 years and counting serving VTubers as a manager and Creative Director with excellence by doing the following: Content/Data Analysis, Brand Review, Personalized Marketing Strategies, Sales/Merch Strategies, Project Management, Talent Management, Business Development, Debut Management, Lore Creation & more!</p>
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