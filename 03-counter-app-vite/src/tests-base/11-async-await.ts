export const getImage = async() => {
  try {
    const apiKey = 'OfX0MOOuahVHfgG3WwbvzswtWk0nlUHq';
    const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json();

    const { url } = data.images.original;
    return url
  } catch (error) {
    console.error(error)
    return 'the image does not exist'
  }

}
