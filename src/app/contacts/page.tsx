import React from 'react'
import './contacts.scss'
import Button from '@/components/button/button'
import SectionTitle from '@/components/sectionTitle/sectionTitle'
import { fetchData } from '@/db/client'
import dayjs from 'dayjs'
import ContactClient from './contacts'

type GuestbookServer = {
  _type: 'document';
  _id?: string;
  _rev?: string;
  _createdAt?: string;
  _updatedAt?: string;
  name: string;
  email?: string; // made optional
  message: string;
};
export default async function Contacts() {
	const guestbookData = await fetchData<GuestbookServer[]>(`
		*[_type == 'guestbook'] | order(_createdAt desc) {
			_id,
			_createdAt,
			_updatedAt,
			name,
			email,
			message
		}
	`)
	return (
		<main id='container_contacts'>
			<ContactClient/>

			<SectionTitle title='guestbook' description="Thanks for stopping by my site! I hope you enjoyed your stay! If you want to leave a little message for me, please sign my guestbook. Just make sure to keep it appropriate and kind!"/>
			<section id='guestbook' className='guestbook'>

				{guestbookData?.map((guest)=>{
					return <Guest email={guest.email ?? ''} messages={guest.message} username={guest.name} visitedDate={new Date(guest._createdAt ?? '')}  key={guest._id}/>
				})}
				{/* <Guest messages="Hi Phee, Thank you so much for trusting me to make this site. I hope you're satisfied with the result! :)" username='Shubamium' email='shubamium@gmail.com' visitedDate={new Date()}/> */}
				{/* <Guest messages='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iste dolore consequuntur voluptatum aliquid soluta nihil quibusdam iure quisquam, ducimus awdad .' username='Phee' email='pheevtuber@gmail.com' visitedDate={new Date()}/> */}
				{/* <Guest messages='Messages of the guest... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iste dolore consequuntur voluptatum aliquid soluta nihil quibusdam iure quisquam, ducimus fugiat voluptates veniam omnis blanditiis dolor laborum veritatis, nostrum quasi molestias id voluptatem error ipsa qui. Pariatur ut earum quibusdam? Obcaecati consequatur optio, alias ut qui, aliquam fuga ducimus enim dignissimos nostrum unde facilis odit itaque ipsa atque minima eaque incidunt! Quis, tempore tempora maiores a officia nam aperiam excepturi totam aliquam sunt laborum asperiores qui enim, consequatur numquam quidem quos. Inventore, tenetur. Molestiae itaque possimus magnam porro ab corporis saepe enim quisquam aperiam est. Facilis necessitatibus dicta consequuntur at pariatur numquam ipsum ex vel accusamus. Distinctio illo minus, rem pariatur iure praesentium repellat vitae aut voluptatibus doloremque similique quod.' username='Phee' email='pheevtuber@gmail.com' visitedDate={new Date()}/> */}
			</section>

		</main>
	)
}

type guestProps = {
	messages:string,
	username:string,
	email:string,
	visitedDate: Date,
}
function Guest({messages,username,email,visitedDate}:guestProps){
	return (
		<div className="guest">
			<p className='messages'><span>&#34;</span> {messages} <span>&#34;</span> </p>
			<div className="info">
				<div className="text">
					<h2 className='username'> ♥ {username} <span>.　 . • ☆ . ° .• °:. *₊ ° . ☆</span></h2>
					<h2 className='detail'>{email ? email + ' -' : ''} Visited On:<span> {dayjs(visitedDate).format(' MMMM D YYYY  hh:mm A')} </span></h2>
				</div>
				<img src="/gif/phee_alert.webp" alt=""  className='decor'/>
			</div>
		</div>
	)
}