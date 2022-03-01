import type * as DocumentType from 'data/metrics/types'

export const value = (parent: DocumentType.Metric): number =>
  Math.random() * parent.maxValue
