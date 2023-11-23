import React from 'react'
import './contacts.scss'
import Button from '@/components/button/button'
import SectionTitle from '@/components/sectionTitle/sectionTitle'
export default function Contacts() {
	return (
		<main id='container_contacts'>

			<form className="contacts" action={"https://formspree.io/f/mayggwwd"} method='POST'>
				<div className="art-part">
						<img src="/art/contact-phee.png" alt="" className='main-art' />
						<div className="details">
							<p>pheevtuber@gmail.com</p>
						</div>
						<img src="/gif/email-me.gif" alt="" className='decor' />
				</div>
				<div className="contact-part">
						<div className="contact-header">
							<img src="/art/contact-y2k.png" alt="" className='title' />
							<div className="actions">
								<Button text='Sign My Guestbook →'/>
								<Button text='Send To Me →' type="submit"/>
							</div>
						</div>

						<div className="contact-form">
							<div className="self-info">
								<input type="text" name="Name" id="Name" placeholder='Name:' className='input-1' required/>
								<input type="text" name="Email" id="Email" placeholder='Email:' className='input-1' />
							</div>
							<textarea placeholder='Write your messages here!' className='messages' name='Messages' id='Messages' required/>
							<img src="/gif/arturito-clear.gif" alt="" className='decor-pengu' />
						</div>

				</div>
			</form>

			<SectionTitle title='guestbook' description="Thanks for stopping by my site! I hope you enjoyed your stay! If you want to leave a little message for me, please sign my guestbook. Just make sure to keep it appropriate and kind!"/>
			<section id='guestbook' className='guestbook'>
				<Guest messages="Hi Phee, Thank you so much for trusting me to make this site. I hope you're satisfied with the result! :)" username='Shubamium' email='shubamium@gmail.com' visitedDate={new Date()}/>
				<Guest messages='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iste dolore consequuntur voluptatum aliquid soluta nihil quibusdam iure quisquam, ducimus awdad .' username='Phee' email='pheevtuber@gmail.com' visitedDate={new Date()}/>
				<Guest messages='Messages of the guest... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iste dolore consequuntur voluptatum aliquid soluta nihil quibusdam iure quisquam, ducimus fugiat voluptates veniam omnis blanditiis dolor laborum veritatis, nostrum quasi molestias id voluptatem error ipsa qui. Pariatur ut earum quibusdam? Obcaecati consequatur optio, alias ut qui, aliquam fuga ducimus enim dignissimos nostrum unde facilis odit itaque ipsa atque minima eaque incidunt! Quis, tempore tempora maiores a officia nam aperiam excepturi totam aliquam sunt laborum asperiores qui enim, consequatur numquam quidem quos. Inventore, tenetur. Molestiae itaque possimus magnam porro ab corporis saepe enim quisquam aperiam est. Facilis necessitatibus dicta consequuntur at pariatur numquam ipsum ex vel accusamus. Distinctio illo minus, rem pariatur iure praesentium repellat vitae aut voluptatibus doloremque similique quod.' username='Phee' email='pheevtuber@gmail.com' visitedDate={new Date()}/>
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
					<h2 className='detail'>sample@email.com - Visited On:<span> 15:30PM 23 Jan 2023 </span></h2>
				</div>
				<img src="/gif/phee_alert.webp" alt=""  className='decor'/>
			</div>
		</div>
	)
}