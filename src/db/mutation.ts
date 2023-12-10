'use server'

import { createClient } from "next-sanity";

export const client = createClient({
	projectId:'68v55hgo',
	dataset:'production',
	apiVersion:'2023-05-03',
	token:'skdDNYEe7Q7XefwSqgxkeywlcAi7HDlohepzTTvhctYNLFBHeOFKI2Hks8aQHPMlVW9OqzecnKEcFM6stEv1Fmsv3uhJzratkUXqIojfK8Yqq7y4qFPRYVWisW5Y0vWmqKqzjk40y942KfQiNENgl3kI21pzx3l8iN8x8ysgjX1YMXi2ertr',
	useCdn:true,

})

export async function mutateData(documentType:string, data:any){
	const mutation = {
			_type: documentType,
			...data
	};

	return client.create(mutation)
	
}