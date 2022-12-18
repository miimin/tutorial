export async function fetchImages(gameseries) {
  const response = await fetch(
    `https://amiiboapi.com/api/amiibo/?gameseries=${gameseries}`
  );
  const data = await response.json();
  const amiiboArray = data.amiibo;
  const images = amiiboArray.map((amiibo) => amiibo.image);
  return images;
}
/*export async function fetchImages(gameseries) {
  const response = await fetch(
    `https://amiiboapi.com/api/amiibo/?gameseries=${gameseries}`
  );
  const data = await response.json();
  data.map((value) => console.log(value));
  //const list = data.map((value) => value.amiibo);
  console.log(list);
  return data.image;
}
*/
//  /`https://dog.ceo/api/breed/${breed}/images/random/12`
//https://amiiboapi.com/api/amiibo/?gameseries=${gameseries}
//https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png
//https://amiiboapi.com/api/amiibo/?gameseries=Super%20Mario
