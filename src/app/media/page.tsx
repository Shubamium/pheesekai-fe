import './media.scss'

export default function Media() {
	return (
		<main id="container_media">
			<section className="media-about">
				<div className="text-part">
						<h2 className="title">
							About This Page
						</h2>
						<p className="about">
							A large text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Some text about the people here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Some text about the people here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
										<p>000</p>
								</div>
								<div className="ccv peak">
										<h3>Peak CCV</h3>
										<p>000</p>
								</div>
							</div>
						</div>
						<div className="socials-container">
								<div className="stat">
									<img src="/icon/twitter_high.png" alt="" className='icon' />
									<p className='amount'>1.3 Subscribers</p>
									<p className='name'>Twitter</p>
								</div>
								<div className="stat">
									<img src="/icon/tiktok_high.png" alt="" className='icon' />
									<p className='amount'>1.3 Subscribers</p>
									<p className='name'>Tiktok</p>
								</div>
								<div className="stat">
									<img src="/icon/twitch_high.png" alt="" className='icon' />
									<p className='amount'>1.3 Subscribers</p>
									<p className='name'>Twitch</p>
								</div>
								<div className="stat">
									<img src="/icon/youtube_high.png" alt="" className='icon' />
									<p className='amount'>1.3 Subscribers</p>
									<p className='name'>Youtube</p>
								</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}