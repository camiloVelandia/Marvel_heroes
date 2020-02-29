const $search = document.getElementById("search")
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
  URL = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  fetch(URL)
    .then(response => response.json())
    .then(data =>{
      let ruta_base = data.data.results[4]
      let ruta_image = ruta_base.thumbnail.path
      console.log (data.data.results)
      renderImage(`${ruta_image}/portrait_xlarge.jpg`)
     renderInfo(ruta_base.name, ruta_base.description)
      })
      
      
}

const searchHero = name => {
  const ts = Date.now(),
  hash = md5(ts + privateKey + publicKey),
  hero = encodeURIComponent(name),
  URL = `http://gateway.marvel.com/v1/public/characters?name=${hero}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  fetch(URL)
    .then(response => response.json())
    .then(data =>{
      let ruta_base = data.data.results[0]
      let ruta_image = ruta_base.thumbnail.path
      renderImage(`${ruta_image}/portrait_xlarge.jpg`)
      console.log(data.data.results)
    })
    //.catch(e => console.log(e));

    
};
searchHero('black widow')


search.addEventListener('keyup', e =>{
 // debugger
  if (e.KeyCode === 13) {
    //debugger
   searchHero(e.target.value.trim());
   alert('personaje :'+e.target.value.trim());
 }else {

    //alert('no recive enter');

 }

});
getConnection()

