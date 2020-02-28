const $image = document.getElementById("image")
const $name = document.getElementById("name")
const $description = document.getElementById("description")
const privateKey = '1c6597085b2ee3129c0154e5479cced5e9d570de',
       publicKey = 'a539ba370aebba43721a40ffbdc3af79'

function renderImage(img){
$image.setAttribute('src', img)
}
function renderInfo(name, description){
  $name.textContent = name
  $description.textContent = description
}


const getConnection = () => {
  const ts = Date.now(),
  hash = md5(ts + privateKey + publicKey),
  URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  fetch(URL)
    .then(response => response.json())
    .then(data =>{
      let ruta_base = data.data.results[4]
      let ruta_image = ruta_base.thumbnail.path
      //console.log (ruta)
      console.log (ruta_base)
      renderImage(`${ruta_image}/portrait_xlarge.jpg`)
      renderInfo(ruta_base.name, ruta_base.description)
    
      })
      
}


getConnection()

