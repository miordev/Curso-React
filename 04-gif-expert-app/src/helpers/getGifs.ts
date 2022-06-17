export const getGifs = async (category: string): Promise<any[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=o7JLcX8uBwKqjmR6qM3EpWkTjpM7HlDF&q=${category}&limit=10`
  const response = await fetch(url)
  const {data} = await response.json()

  const gifList = data.map((image: any) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url
  }))

  return gifList
}