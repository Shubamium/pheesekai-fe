import React from 'react'
import './contacts.scss'
import Button from '@/components/button/button'
export default function Contacts() {
	return (
		<main id='container_contacts'>

			<section className="contacts">
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
								<Button text='Send To Me →'/>
							</div>
						</div>

						<div className="contact-form">
							<div className="self-info">
								<input type="text" name="name" id="name" placeholder='Name:' className='input-1' />
								<input type="text" name="email" id="email" placeholder='Email:' className='input-1' />
							</div>
							<textarea placeholder='Write your messages here!' className='messages'/>
							<img src="/gif/arturito-clear.gif" alt="" className='decor-pengu' />
						</div>

				</div>
			</section>
		</main>
	)
}