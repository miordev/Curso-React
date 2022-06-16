describe('First describe', () => {
  test('First test', () => {
    const firstMessage = 'Hello World'
    const secondMessage = firstMessage.trim()
    expect(firstMessage).toBe(secondMessage)
  })
})