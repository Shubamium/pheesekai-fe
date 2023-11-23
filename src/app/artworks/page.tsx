import React from 'react'
import './artworks.scss'
import CreditHeader from '@/components/creditHeader/creditHeader'
import SectionTitle from '@/components/sectionTitle/sectionTitle'
import { fetchData, urlFor } from '@/db/client';

type contactType = 'twitter' | 'youtube' | 'discord' | 'vgen' | 'kofi' | 'website';

type ArtworkServer = {
  _type: 'document';
  _id?: string;
  _rev?: string;
  _createdAt?: string;
  _updatedAt?: string;
  art: {
    _type: 'image';
  };
  name: string;
  contacts: {
    _type: 'object';
    url: string;
    media: contactType;
  }[];
};

export default async function Artworks() {

	const artworkData = await fetchData<ArtworkServer[]>(`
		*[_type == 'artworks'] | order(_createdAt desc) {
			_id,
			_createdAt,
			_updatedAt,
			art,
			name,
			contacts
		}
	`);
	return (
		<main id='container_artworks'>
				<CreditHeader/>
				<SectionTitle title='artworks' description="If you're interested in any of the artworks that have been used on my socials, you can find everything listed here! Make sure to send plenty of love over to my artists, because they all worked super hard!"/>
				
				<section className='artwork-list'>
					  {
							artworkData !== null && artworkData?.map((art) => {
								const contacts = art.contacts?.map((contact)=>
									{
										return {type:contact.media,url:contact.url}
									}
								)  ?? []
								return (
									<ArtworkDisplayer art={urlFor(art.art).url()} artist={{name:art.name,url:contacts[0] ? art.contacts[0].url : '/'}} contacts={contacts}  key={art._id}/>
								)
							})
						}
						{/* <ArtworkDisplayer art='https://pbs.twimg.com/media/F_AqpuKW8AA43tH?format=jpg&name=4096x4096' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'twitter',url:'https://twitter.com'})}/> */}
						{/* <ArtworkDisplayer art='/art/phee-guitar.png' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'website',url:'https://twitter.com'})}/>
						<ArtworkDisplayer art='/art/phee-guitar.png' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'twitter',url:'https://twitter.com'})}/>
						<ArtworkDisplayer art='/art/phee-guitar.png' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'vgen',url:'https://twitter.com'})}/>
						<ArtworkDisplayer art='/art/phee-guitar.png' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'twitter',url:'https://twitter.com'})}/>
						<ArtworkDisplayer art='/art/phee-guitar.png' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'twitter',url:'https://twitter.com'})}/>
						<ArtworkDisplayer art='/art/phee-guitar.png' artist={{name:'@ArtistName', url:'https://artistwebsite.com'}} contacts={new Array(4).fill({type:'twitter',url:'https://twitter.com'})}/> */}
				</section>
		</main>
	)
}



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