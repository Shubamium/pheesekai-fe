import React from 'react'


import './showcase.scss'
import Button from '@/components/button/button'

export default function Showcase() {
	return (
		<main id='container_showcase'>

				<section className='model-previewer'>
					<div className="model-list">
							<div className="list">
									<Button text='Phee 1.0'/>
									<Button text='Phee 2.0'/>
									<Button text='Phee 3.0'/>
							</div>

							<div className="decoration">
										<img src="/gif/esc_skull_99.gif" alt="" className='skull' />
										<img src="/art/pheesekai-y2k.png" alt="" className='text' />
							</div>
					</div>
					<div className="previewer">
							<div className="previewer-header">
								<h2>model-previewer.exe</h2>
								<img src="/gif/xp-close.png" alt="" />
							</div>
							
							<div className="previewer-body">
								<div className="model-sheet">
									<img src="https://pbs.twimg.com/media/F227BJOXoAIvGVC?format=jpg&name=large" alt="" />
								</div>
								<div className="model-detail">
									<img src="/gif/PheeAlert.gif" alt="" />
									<a href="#">@Artist-Name</a>
								</div>
							</div>
					</div>
				</section>
		</main>
	)
}