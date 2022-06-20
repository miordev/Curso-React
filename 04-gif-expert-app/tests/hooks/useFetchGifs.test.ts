import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests in useFetchGifs', () => {
  const mockCategory = 'One Punch'

  test('should return the initial state', () => {
    const {result} = renderHook(() => useFetchGifs(mockCategory))
    const {gifList, isLoading} = result.current
    expect(gifList.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('should return a gifs array and isLoading as false', async () => {
    const {result} = renderHook(() => useFetchGifs(mockCategory))
    await waitFor(
      () => expect(result.current.gifList.length).toBeGreaterThan(0)
    )
    const {gifList, isLoading} = result.current

    expect(gifList.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})