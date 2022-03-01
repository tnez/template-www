import type * as DocumentType from 'data/metrics/types'
import type { Resolver, Metric } from 'graphql/types'

export const value: Resolver<Metric['value'], DocumentType.Metric> = (
  parent,
): number => Math.random() * parent.maxValue
