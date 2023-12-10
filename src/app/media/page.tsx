import { fetchData } from '@/db/client';
import { GeneralServer } from '../page';
import './media.scss'

export default async function Media() {
	const generalData = await fetchData<GeneralServer[]>(`
		*[_type == 'general' && preset == 'main'] {
			_id,
			_createdAt,
			_updatedAt,
			preset,
			schedules,
			stats {
				avg,
				peak,
				twitter,
				tiktok,
				twitch,
				youtube
			}
		}
	
	`);
	const stats = generalData[0].stats
	return (
		<main id="container_media">
			<section className="media-about">
				<div className="text-part">
						<h2 className="title">
							About Phee - 
						</h2>
						<p className="about">
						<b><span className='bright'>Pheesekai</span></b> is an unseiso, <span className='magenta'>magenta</span> red panda vtuber who causes chaos, and streams on Twitch and occassionally Youtube!
						
						<br/><br/> They have been known to engage in just chatting streams with their chat, do fun handcam streams where they <b>build legos</b>, <b>model kits</b>, or other <b>crafts</b>, and even play <u className='games'>a multitude of game genres such as horror, puzzles, FPS, RPG, and even sandbox or open world survival crafting games!</u> 
						
						<br/><br/><span className='green'>Phee</span> is an advocate for <u className='advocate'> helping others get into the gaming scene</u>, and always aims to entertain, inform, and inspire, no matter what they pursue. 
						<br/> <br/> If you are <u>interested in working with Pheesekai</u>, please take a look at the below <b className='bright'>statistics</b> in order to decide if they are the right fit for your project or campaign. <span className='business'>For business inquires, please reach out to Phee personally or their manager, Tessa</span>.
						</p>
				</div>
				<div className="art-part">
					<img src="/art/pheesmug.png" className="main-img"/>
					<img src="/art/pheesekai_logo.png" className="logo" />
				</div>
			</section>

			<section className="media-stats">
				<div className="media-stat-panel">
					{/* Head */}
					<div className="stat-head">
						<h2>My Social Statistics</h2>
					</div>
					{/* Body */}
					<div className="stat-body">
						<div className="ccv-container">
							<img src="/art/phee_icon.png" alt="" />
							<div className="ccv-list">
								<div className="ccv avg">
										<h3>Average CCV</h3>
										<p>{stats?.avg}</p>
								</div>
								<div className="ccv peak">
										<h3>Peak CCV</h3>
										<p>{stats?.peak}</p>
								</div>
							</div>
						</div>
						<div className="socials-container">
								<div className="stat">
									<img src="/icon/twitter_high.png" alt="" className='icon' />
									<div className="text">
										<p className='amount'>{stats?.twitter}</p>
										<p className='name'>Twitter</p>
									</div>
								</div>
								<div className="stat">
									<img src="/icon/tiktok_high.png" alt="" className='icon' />
									<div className="text">
										<p className='amount'>{stats?.tiktok}</p>
										<p className='name'>Tiktok</p>
									</div>
								</div>
								<div className="stat">
									<img src="/icon/twitch_high.png" alt="" className='icon' />
									<div className="text">
										<p className='amount'>{stats?.twitch}</p>
										<p className='name'>Twitch</p>
									</div>
								</div>
								<div className="stat">
									<img src="/icon/youtube_high.png" alt="" className='icon' />
									<div className="text">
										<p className='amount'>{stats?.youtube}</p>
										<p className='name'>Youtube</p>
									</div>
								</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}