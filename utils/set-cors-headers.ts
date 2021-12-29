import { ServerResponse } from 'node:http'
import { NextApiResponse } from 'next'

export const setCorsHeaders = <T extends NextApiResponse | ServerResponse>(
  response: T,
): T => {
  response.setHeader('Access-Control-Allow-Credentials', 'true')
  response.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com',
  )
  response.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )

  return response
}
