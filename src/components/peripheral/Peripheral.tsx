'use client'
type PeripheralProps = {
	image?:string,
	name:string,
	url:string,
}
export const Peripheral = ({image,name,url}:PeripheralProps) => {
	return <div className="peripheral" onClick={()=>{
		if(!url) return
		window.open(url,'_blank','noopener,noreferrer')
	}}>
		<div className="image">
			<img src={image} alt="" className="periph-img"/>
			<img src="/art/phee_icon.png" alt="" className="decor" />
		</div>
		<div className="detail">
			<h2>{name}</h2>
		</div>
	</div>	
}