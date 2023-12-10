'use client'
import Button from '@/components/button/button'
import { mutateData } from '@/db/mutation'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'


export default function ContactClient() {
	const formRef = useRef<null | HTMLFormElement>(null)
	const router = useRouter()
	const submitGuest = async () =>{

		if(formRef.current){
			const formData = new FormData(formRef.current);

			const newGuestbook = {
				name:formData.get('Name'),
				email:formData.get('Email'),
				message:formData.get('Messages'),
			}

			window.alert('Submitting Guestlist..., Please wait a moment!')

			mutateData('guestbook',newGuestbook).then((doc)=>{
				if(doc){
					window.alert('Guest submitted, Thank you for visitting!')
					router.refresh()
				}
			})
		}

		
	}
	return (
		
		<form className="contacts" action={"https://formspree.io/f/mayggwwd"} method='POST' ref={formRef}>
		<div className="art-part">
				<img src="/art/contact-phee.gif" alt="" className='main-art' />
				<div className="details">
					<p>pheevtuber@gmail.com</p>
				</div>
				<img src="/gif/email-me.gif" alt="" className='decor' />
		</div>
		<div className="contact-part">
				<div className="contact-header">
					<img src="/art/contact-y2k.png" alt="" className='title' />
					<div className="actions">
						<Button text='Sign My Guestbook →' type='reset' onClick={(e)=>{e.preventDefault();  submitGuest();}}/>
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
	)
}