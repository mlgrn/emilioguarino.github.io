import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity";
import { Video } from "../../typings";
import { sanityClient } from "../../sanity";

type Data = {
    video: Video[]
}

const query = groq`*[_type == 'video']`

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>) {
        
        const video: Video[] = await sanityClient.fetch(query)
        res.status(200).json({video})
}