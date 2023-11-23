'use client'

import Button from "@/components/button/button"
import { ShowcaseServer } from "./page"
import { useState } from "react"
import { urlFor } from "@/db/client"

type Props = {
	showcase:ShowcaseServer 
}

export default function ShowcaseClient({showcase}: Props) {
	const [active, setActive] = useState(0)
	return (
		<section className='model-previewer'>
		<div className="model-list">
				<div className="list">
						
						{showcase.list?.map((button,index)=>{
							return <Button text={button.title} selected={index === active} key={'button'+button.title} onClick={()=>setActive(index)}/>
						})}
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
						{
							showcase.list[active].media_type === 'image' && 
								<img src={showcase.list[active].art ? urlFor(showcase.list[active].art).url() : 'https://pbs.twimg.com/media/F227BJOXoAIvGVC?format=jpg&name=large'} alt="" />
						}
						{
							showcase.list[active].media_type === 'video' && 
							<div className="youtube">
									<iframe {...{modestBranding:true}} width="700" height="315" src="https://www.youtube.com/embed/5Tj8O1kLVAw?si=b8C6cGlcPWNyeZYL" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
						}
					</div>
					<div className="model-detail">
						<img src="/gif/PheeAlert.gif" alt="" />
						<a href="#">{showcase.list[active].credit}</a>
					</div>
				</div>
		</div>
	</section>
	)
}