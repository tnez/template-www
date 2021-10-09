import { sayHello } from '..'

describe('when called with argment', () => {
  let result: unknown
  beforeAll(() => {
    result = sayHello('David')
  })

  it('should produce expected result', () => {
    expect(result).toBe('Hello David')
  })
})

describe('when called with no argument', () => {
  let result: unknown
  beforeAll(() => {
    result = sayHello()
  })

  it('should produce expected result', () => {
    expect(result).toBe('Hello Larry')
  })
})
