import type * as DocumentType from 'data/metrics/types'
import type { Resolver } from 'graphql/types'
import type { Context } from 'graphql/context'

const metrics: Resolver<DocumentType.Metric[], unknown, Context> = async (
  _parent,
  _args,
  ctx,
) => {
  const { ok, data } = await ctx.data.metrics.list()

  if (!ok) {
    throw new Error('Something unexpected occurred')
  }

  return data
}

export const Query = {
  metrics,
}
