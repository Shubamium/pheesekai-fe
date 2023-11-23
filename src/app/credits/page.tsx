import SectionTitle from "@/components/sectionTitle/sectionTitle";
import './credits.scss'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import CreditHeader from "@/components/creditHeader/creditHeader";
import { GiMailbox } from "react-icons/gi";
import { fetchData, urlFor } from "@/db/client";

type CreditServer = {
  _type: 'document';
  _id?: string;
  _rev?: string;
  _createdAt?: string;
  _updatedAt?: string;
  name: string;
  position: string;
  link: string;
  pfp: {
    _type: 'image';
  }
}

type ModServer = {
  _type: 'document';
  _id?: string;
  _rev?: string;
  _createdAt?: string;
  _updatedAt?: string;
  name: string;
  about: string;
  link: string;
  pfp: {
    _type: 'image';
  };
};
export default async function Credits() {

	const creditData = await fetchData<CreditServer[]>(`
		*[_type == 'credits'] | order(_createdAt desc) {
			_id,
			_createdAt,
			_updatedAt,
			name,
			position,
			link,
			pfp
		}
	`)

	const modData = await fetchData<ModServer[]>(`
		*[_type == 'mods'] | order(_createdAt desc) {
			_id,
			_createdAt,
			_updatedAt,
			name,
			about,
			link,
			pfp
		}
	`);
	
	return (
		<main id="container_credits">
			<CreditHeader/>
			<SectionTitle title="credits" description="Check out the people behind the magic! Listed are everyone who helped make assets, models, or music for the channel. Feel free to check out their other work through their socials!"/>
			<section className="credit-list">

				{creditData?.map((person)=>{
					return ( 
						<Credit handle={person.name} pfp={urlFor(person.pfp).url()} role={person.position} link={person.link} key={person._id}/>
					)
				})}
			
			</section>


			<section className="mods-section">
				<SectionTitle title="meet the mods" description="Meet the lovely mods that help keep this channel running! Each person has greatly aided in helping the channel grow, and deserves a lil' recognition!"/>
				<div className="mods-list">

					{
						modData?.map((mod)=>{
							return <Mods pfp={urlFor(mod.pfp).url()} about={mod.about} link={mod.link} name={mod.name} key={mod._id}/>
						})
					}
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
								<a className="contact-email" href="mailto:tessavillaverde@evergreenproject.io"> <GiMailbox/> tessavillaverde@evergreenproject.io</a>
								<p className="bio">Tessa has been managing Phee for 3 months. She is a quick-witted and understanding manager who has worked with many talents and addressed a variety of needs, from event management to debut planning, to leading growth in content creation. For business inquiries, Tessa can be reached through her Twitter or e-mail.</p>
								<div className="socials">
									<a target="_blank" href="https://twitter.com/tessa_vt"><img src="/icon/twitter.png"/></a>
									<a target="_blank" href="https://www.twitch.tv/tessavillaverde"><img src="/icon/twitch.png"/></a>
									<a target="_blank" href="https://discord.com/invite/GN5nprTpvF"><img src="/icon/discord.png"/></a>
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