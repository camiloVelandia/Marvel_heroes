const $image = document.getElementById("image")
const privateKey = '1c6597085b2ee3129c0154e5479cced5e9d570de',
       publicKey = 'a539ba370aebba43721a40ffbdc3af79'

function renderImage(img){
$image.setAttribute('src', img)

}
function renderData(info){

}

const getConnection = () => {
  const ts = Date.now(),
  hash = md5(ts + privateKey + publicKey),
  URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  fetch(URL)
    .then(response => response.json())
    .then(data =>{
      let ruta = data.data.results[18].thumbnail.path
      console.log (ruta)
      console.log (data.data.results)
      renderImage(`${ruta}/portrait_xlarge.jpg`)
    
      })
      
}
getConnection()

