beforeAll(() => {
  process.chdir('examples/cjs')
})

afterAll(() => {
  process.chdir('../..')
})

test('example works', () => {
  console.log = jest.fn()
  require('./example.js')
  expect(console.log).toHaveBeenCalledWith(`<p><img src="img.png" alt="" width="640" height="480"></p>`)
})
