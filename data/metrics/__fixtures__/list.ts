import * as DocumentType from 'data/metrics/types'

export const successfulResponse: { ok: true; data: DocumentType.Metric[] } = {
  ok: true,
  data: [
    { id: '01', name: 'speed', maxValue: 100 },
    { id: '02', name: 'mpg', maxValue: 40 },
    { id: '03', name: 'rpm', maxValue: 10_000 },
  ],
}

export const errorResponse = Object.freeze({
  ok: false,
  errors: [{ message: 'Something unexpected happened' }],
})
