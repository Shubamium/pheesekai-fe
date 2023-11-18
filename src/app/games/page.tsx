import SectionTitle from '@/components/sectionTitle/sectionTitle'
import './games.scss'
import { ReactNode } from 'react'
type Props = {}

export default function Games({}: Props) {
	return (
		<main id='container_games'>
				<SectionTitle title='games'/>
				<section className="game-list fp">
					<img src="/art/section_title-fp.png" alt="" />
					<div className="list">
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
					</div>
				</section>
				<section className="game-list lc">
					<img src="/art/section-title_lc.png" alt="" />
					<div className="list">
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
						<GameDisplayer image='https://m.media-amazon.com/images/I/71LTpSLz57L.jpg' name='Valorant '/>
					</div>
				</section>

				<div className="game-status">
					<SectionTitle title='status'/>
					<div className="status-layout">
							<ProgressList title='In Progress' games={new Array(5).fill({name:'Cult of The Lamb',progress:'0%'})}/>
							<ProgressList title='Completed' games={new Array(3).fill({name:'Cult of The Lamb',progress:'100%'})}/>
					</div>
				</div>
		</main>
	)
}
type ProgressListProps = {
	title:string | ReactNode;
	games:{
		name:string,
		progress:string,
	}[];
}

function ProgressList({title,games} : ProgressListProps) {
	return <div className="progress-list">
	<div className="header">
			<h2>{title}</h2>
	</div>
	<div className="items">
			{games?.map((game)=>{
				return <div className="item" key={game.name}>
					<p className='name'>{game.name}</p>
					<p className='progress'>{game.progress}</p>
				</div>
			})}
	</div>
</div>
}
type GameDisplayerProps = {
	image:string,
	name:string,
}
function GameDisplayer({image, name}:GameDisplayerProps){

	return (
		<div className="game-displayer">
			<div className="img-part">
				<img src={image} alt="" className='poster'/>
			</div>
			<div className="text-part">
				<h2>{name}</h2>
			</div>
		</div>
	)
}