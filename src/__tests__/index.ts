import { hello } from '..'

describe('hello', () => {
  it('should return expected value when using default value for name', () => {
    const result = hello()
    expect(result).toBe('Hello you!')
  })

  it('should return expected value when given name', () => {
    const result = hello('Jerry')
    expect(result).toBe('Hello Jerry!')
  })
})
