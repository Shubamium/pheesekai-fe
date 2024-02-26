'use client'
import Button from '@/components/button/button'
// import { mutateData } from '@/db/mutation'
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

			if(!newGuestbook.name || !newGuestbook.email || !newGuestbook.message) {
				window.alert('Please fill all of the field before submitting!')
				return
			};
			window.alert('Submitting Guestlist..., Please wait a moment!')

			// mutateData('guestbook',newGuestbook).then((doc)=>{
			// 	if(doc){
			// 		window.alert('Guest submitted, Thank you for visitting!')
			// 		router.refresh()
			// 	}
			// })
			fetch('contacts/addguest', {
				method: 'POST',
				body:JSON.stringify(newGuestbook)
			})
			.then((doc)=>{
					if(!doc.ok) throw new Error("Hey it's not working")
					return doc.json()
			}).then((doc)=>{
					if(doc){
						window.alert('Guest submitted, Thank you for visiting the site!')
						formRef.current?.reset()
						router.refresh()
					}
			})
			.catch((err)=>{
					console.error(err,`hey there's an error`)
					window.alert('Something went wrong, please try again later!')
					formRef.current?.reset()
			})
		}

		
	}
	return (
		
		<form className="contacts" action={"https://formsubmit.co/a5a74d54c577350a94f3722117bc02bd"} method='POST' ref={formRef}>

			{/* Metadata */}
			<input type="hidden" name="_subject" value="New contact submission from Pheesekai Website!"></input>
			<input type="hidden" name="_cc" value="pheevtuber@gmail.com"></input>
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
						<input type="email" name="Email" id="Email" placeholder='Email:' className='input-1' />
					</div>
					<textarea placeholder='Write your messages here!' className='messages' name='Messages' id='Messages' required/>
					<img src="/gif/arturito-clear.gif" alt="" className='decor-pengu' />
				</div>

		</div>
	</form>
	)
}