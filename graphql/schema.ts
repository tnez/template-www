import { stitchSchemas } from '@graphql-tools/stitch'

import * as countries from './countries'
import * as metrics from './metrics'

export const buildSchema = async () =>
  stitchSchemas({
    subschemas: [await countries.getSchema(), metrics.schema],
  })
