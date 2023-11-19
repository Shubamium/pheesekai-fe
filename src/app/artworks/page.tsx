import React from 'react'
import './artworks.scss'
import CreditHeader from '@/components/creditHeader/creditHeader'
import SectionTitle from '@/components/sectionTitle/sectionTitle'

export default function Artworks() {
	return (
		<main id='container_artworks'>
				<CreditHeader/>
				<SectionTitle title='artworks' description='Some text about the art here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
				
				<section className='artwork-list'>
						<ArtworkDisplayer art='https://pbs.twimg.com/media/F_AqpuKW8AA43tH?format=jpg&name=4096x4096' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'twitter',url:'https://twitter.com'})}/>
						<ArtworkDisplayer art='/art/phee-guitar.png' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'website',url:'https://twitter.com'})}/>
						<ArtworkDisplayer art='/art/phee-guitar.png' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'twitter',url:'https://twitter.com'})}/>
						<ArtworkDisplayer art='/art/phee-guitar.png' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'vgen',url:'https://twitter.com'})}/>
						<ArtworkDisplayer art='/art/phee-guitar.png' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'twitter',url:'https://twitter.com'})}/>
						<ArtworkDisplayer art='/art/phee-guitar.png' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'twitter',url:'https://twitter.com'})}/>
						<ArtworkDisplayer art='/art/phee-guitar.png' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'twitter',url:'https://twitter.com'})}/>
				</section>
		</main>
	)
}



type contactType = 'twitter' | 'youtube' | 'discord' | 'vgen' | 'kofi' | 'website';
type ArtworkDisplayerProps = {
	art:string;
	artist:{
		name:string,
		url:string
	}
	contacts:{
		type:contactType,
		url:string
	}[]
}

const contactIcon = {
	'twitter':'/icon/twitter.png',
 	'youtube':'/icon/youtube.png',
	'discord': '/icon/discord.png',  
	'vgen': '/icon/vgen.png',  
	'kofi': '/icon/kofi.png',  
	'website': '/icon/website.png',  
}
function ArtworkDisplayer(props:ArtworkDisplayerProps){


	return (
			<div className="artwork">
				<div className="main-container">
					<div className="image-part">
						<img src={props.art} alt="" />
					</div>
					<div className="details">
						<img src='/gif/PheeAlert.gif' alt=''/>
						<a href={props.artist.url}>{props.artist.name}</a>
					</div>
				</div>
				<div className="contact-container">
						{
							props.contacts?.map((contact,index)=>{
								return <a href={contact.url} key={contact.url + 'contact-key' + index}> <img src={contactIcon[contact.type]} alt="" /></a>
							})
						}
					
				</div>
			</div>
	)
}