import {jest} from '@jest/globals'

beforeAll(() => {
  process.chdir('examples/cjs')
})

afterAll(() => {
  process.chdir('../..')
})

test('example works', async () => {
  console.log = jest.fn()
  await import('./example.js')
  expect(console.log).toHaveBeenCalledWith(`<p><img src="img.png" alt="" width="640" height="480"></p>`)
})
