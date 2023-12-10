
import React from 'react'
import './artworks.scss'
import CreditHeader from '@/components/creditHeader/creditHeader'
import SectionTitle from '@/components/sectionTitle/sectionTitle'
import { fetchData,  } from '@/db/client';
import ArtworkList from './ArtworkList';

export type contactType = 'twitter' | 'youtube' | 'discord' | 'vgen' | 'kofi' | 'website';

export type ArtworkServer = {
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
	full_width:boolean;
	full_height:boolean;
};

export default async function Artworks() {

	const artworkData = await fetchData<ArtworkServer[]>(`
		*[_type == 'artworks'] | order(_createdAt desc) {
			_id,
			_createdAt,
			_updatedAt,
			art,
			name,
			contacts,
			full_width,
			full_height,
		}
	`);
	console.log(artworkData)
	return (
		<main id='container_artworks'>
				<CreditHeader/>
				<SectionTitle title='artworks' description="If you're interested in any of the artworks that have been used on my socials, you can find everything listed here! Make sure to send plenty of love over to my artists, because they all worked super hard!"/>
				{artworkData && <ArtworkList artworks={artworkData}/>}
		</main>
	)
}


