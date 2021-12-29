import { AsyncExecutor } from '@graphql-tools/utils'
import { introspectSchema } from '@graphql-tools/wrap'
import { print } from 'graphql'

const remoteExecutor: AsyncExecutor = async ({ document, variables }) => {
  const query = print(document)
  const fetchResult = await fetch('https://countries.trevorblades.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  })

  /* eslint-disable @typescript-eslint/no-unsafe-return */
  return fetchResult.json()
  /* eslint-enable @typescript-eslint/no-unsafe-return */
}

export const getCountriesSchema = async () => ({
  schema: await introspectSchema(remoteExecutor),
  executor: remoteExecutor,
})
