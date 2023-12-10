'use client'
import React, { useState } from 'react'
import { ArtworkServer, contactType } from './page'
import { urlFor } from '@/db/client'
import Button from '@/components/button/button';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

function sliceIntoChunks<T>(arr:T[], chunkSize:number) {
	const res = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
			const chunk = arr.slice(i, i + chunkSize);
			res.push(chunk);
	}
	return res;
}


type Props = {
	artworks: ArtworkServer[]
}

function ArtworkList({artworks}: Props) {

	const [currentPage,setCurrentPage] = useState(0)
	const chunkedArtworks = sliceIntoChunks(artworks, 8)
	return (
		<>
				<div className='artwork-controls'>
						<Button onClick={()=>setCurrentPage(Math.max(currentPage-1,0))}><BsArrowLeft/> Prev</Button>
						<p>{currentPage + 1}</p>
						<Button onClick={()=>setCurrentPage(Math.min(currentPage+1,chunkedArtworks.length-1))}><BsArrowRight/> Next</Button>
					</div>

					<section className='artwork-list'>
						{
							chunkedArtworks[currentPage] && chunkedArtworks[currentPage].length > 0 && chunkedArtworks[currentPage].map((art) => {
								const contacts = art.contacts?.map((contact)=>
									{
										return {type:contact.media,url:contact.url}
									}
								)  ?? []
								return (
									<ArtworkDisplayer full_height={art.full_height} full_width={art.full_width} art={urlFor(art.art).url()} artist={{name:art.name,url:contacts[0] ? art.contacts[0].url : '/'}} contacts={contacts}  key={art._id}/>
								)
							})
						}
						
					</section>
			
		</>
	)
}

export default ArtworkList



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
	full_width?:boolean
	full_height?:boolean
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
			<div className={`artwork ${props.full_width ? 'full-width' : ''} ${props.full_height ? 'full-height' : ''}`}>
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