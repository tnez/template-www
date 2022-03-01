import type { Context } from 'graphql/context'

const metrics = async (_: any, __: any, ctx: Context) => {
  const { ok, data } = await ctx.data.metrics.list()

  if (!ok) {
    throw new Error('Something unexpected occurred')
  }

  return data
}

export const Query = {
  metrics,
}
