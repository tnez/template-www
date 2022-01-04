import { IncomingMessage, ServerResponse } from 'http'
import { setCorsHeaders } from './set-cors-headers'

it('should set expected headers', () => {
  const responsePre = new ServerResponse({} as IncomingMessage)

  const responsePost = setCorsHeaders(responsePre)

  expect(responsePost.getHeader('Access-Control-Allow-Credentials')).toBe(
    'true',
  )
  expect(responsePost.getHeader('Access-Control-Allow-Origin')).toBe(
    'https://studio.apollographql.com',
  )
  expect(responsePost.getHeader('Access-Control-Allow-Headers')).toBe(
    'Origin, X-Requested-With, Content-Type, Accept',
  )
})
