import { stitchSchemas } from '@graphql-tools/stitch'

import metricsSchema from './metrics'

import { getCountriesSchema } from './countries'

export const buildSchema = async () =>
  stitchSchemas({
    subschemas: [metricsSchema, await getCountriesSchema()],
  })
