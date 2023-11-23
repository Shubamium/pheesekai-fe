import React from 'react'


import './showcase.scss'
import Button from '@/components/button/button'
import { fetchData } from '@/db/client';
import ShowcaseClient from './ShowcaseClient';
export type ShowcaseServer = {
  _type: 'document';
  _id?: string;
  _rev?: string;
  _createdAt?: string;
  _updatedAt?: string;
  preset: string;
  list: Array<{
    _type: 'object';
    title: string;
    media_type: 'image' | 'video';
    art?: {
      _type: 'image';
    };
    video_id?: string;
  }>;
};


export default async function Showcase() {

	const showcaseData = await fetchData<ShowcaseServer[]>(
		`*[_type == 'showcase' && preset == 'main']  {
			_id,
			_createdAt,
			_updatedAt,
			preset,
			list
		}`
	);
	return (
		<main id='container_showcase'>

				<ShowcaseClient showcase={showcaseData[0]}/>
		</main>
	)
}