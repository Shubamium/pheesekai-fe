import SectionTitle from '@/components/sectionTitle/sectionTitle'
import './games.scss'
import { ReactNode } from 'react'
import { fetchData, urlFor } from '@/db/client'
type Props = {}

type GameListServer = {
  _type: 'document';
  _id?: string;
  _rev?: string;
  _createdAt?: string;
  _updatedAt?: string;
  name: string;
  poster: {
    _type: 'image';
  };
  type: 'frequent' | 'less';
};

type GameStatusServer = {
  _type: 'document';
  _id?: string;
  _createdAt?: string;
  _updatedAt?: string;
  name: string;
  progress: string;
  type: 'progress' | 'completed';
};


export default async function Games({}: Props) {
	const gameListData = await fetchData<GameListServer[]>(
		`
		*[_type == 'games'] | order(_createdAt desc) {
			_id,
			_createdAt,
			_updatedAt,
			name,
			poster,
			type
		}
			
		`
	);

	const gameStatusData = await fetchData<GameStatusServer[]>(
		`
		*[_type == 'games_status'] | order(_updatedAt desc) {
			_id,
			_createdAt,
			_updatedAt,
			name,
			progress,
			type
		}
		`
	)

	const {lessCommonList,frequentlyList} = (() => {
		const less:GameListServer[] = []
		const freq:GameListServer[] = []
	
		gameListData.forEach((game)=>{
			if(game.type === 'less'){	
				less.push(game)
			}else{
				freq.push(game)
			}
	
		})
		return {lessCommonList:less,frequentlyList:freq}
	})()
	const {progress,completed} = (() => {
		const progress:GameStatusServer[] = []
		const completed:GameStatusServer[] = []
	
		gameStatusData.forEach((game)=>{
			if(game.type === 'progress'){	
				progress.push(game)
			}else{
				completed.push(game)
			}
	
		})
		return {completed,progress}
	})()

	
	return (
		<main id='container_games'>
				<SectionTitle title='games'/>
				<section className="game-list fp">
					<img src="/art/section_title-fp.png" alt="" />
					<div className="list">
					{frequentlyList && frequentlyList.length !== 0 && (
							frequentlyList.map((game:GameListServer) => (
									<GameDisplayer name={game.name} image={urlFor(game.poster).url()} key={game._id}/>
							))
						)}
						{frequentlyList.length === 0 && (
							<p>No games at the moment, Please check back another time!</p>
						)}
					</div>
				</section>
				<section className="game-list lc">
					<img src="/art/section-title_lc.png" alt="" />
					<div className="list">
						{lessCommonList && lessCommonList.length !== 0 && (
							lessCommonList.map((game:GameListServer) => (
									<GameDisplayer name={game.name} image={urlFor(game.poster).url()} key={game._id}/>
							))
						)}
					{lessCommonList.length === 0 && (
							<p>No games at the moment, Please check back another time!</p>
						)}
					</div>
				</section>

				<div className="game-status">
					<SectionTitle title='status'/>
					<div className="status-layout">
							<ProgressList title='In Progress' games={progress.map((game)=>{ return {name:game.name,progress:game.progress}})}/>
							<ProgressList title='Completed' games={completed.map((game)=>{ return {name:game.name,progress:game.progress}})}/>

						
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