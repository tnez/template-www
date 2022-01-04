import { NextApiHandler } from 'next'
import { ApolloServer } from 'apollo-server-express'
import { Router, Request, Response } from 'express'

import { buildSchema } from '../../graphql/schema'

const initialize = (async () => {
  const schema = await buildSchema()
  const server = new ApolloServer({
    schema,
  })

  await server.start()

  return server.getMiddleware({
    path: '/api/graphql',
  })
})()

const handler: NextApiHandler = async (request, response) => {
  const apolloMiddleware = await initialize
  await runMiddleware(request, response, apolloMiddleware)
}

export default handler

export const config = {
  api: {
    bodyParser: false,
  },
}

async function runMiddleware(
  request: unknown,
  response: unknown,
  next: Router,
) {
  return new Promise((resolve, reject) => {
    next(request as Request, response as Response, (result) => {
      if (result instanceof Error) {
        reject(result)
      }

      resolve(result)
    })
  })
}
