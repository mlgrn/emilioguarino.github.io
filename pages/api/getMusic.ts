import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity";
import { Music } from "../../typings";
import { sanityClient } from "../../sanity";

type Data = {
    music: Music[]
}

const query = groq`*[_type == 'music']`

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>) {
        
        const music: Music[] = await sanityClient.fetch(query)
        res.status(200).json({music})
}