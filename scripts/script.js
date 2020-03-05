const $search = document.getElementById("search")
const $form = document.getElementById("form")
const $button_search = document.getElementById("button_search")
const $image = document.getElementById("image")
const $name = document.getElementById("name")
const $description = document.getElementById("description")
const privateKey = '1c6597085b2ee3129c0154e5479cced5e9d570de',
       publicKey = 'a539ba370aebba43721a40ffbdc3af79'

//get image from to API       
function renderImage(img){
$image.setAttribute('src', img)
}

//get image from to API   
function renderInfo(name, description){
  $name.textContent = name
  $description.textContent = description
}

//connection to the API
const searchHero = name => {
  const ts = Date.now(),
  hash = md5(ts + privateKey + publicKey),
  hero = encodeURIComponent(name),
  URL = `https://gateway.marvel.com/v1/public/characters?name=${hero}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  fetch(URL)
    .then(response => response.json())
    .then(data =>{
      let ruta_base = data.data.results[0]
      let ruta_image = ruta_base.thumbnail.path
      renderImage(`${ruta_image}/portrait_xlarge.jpg`)
      renderInfo(ruta_base.name, ruta_base.description)
    })
    .catch(e => {
      renderInfo("404","Hero not found :(")
      $image.style.display= "none";
    });

    
};
searchHero('deadpool')

$form.addEventListener('submit', (event)=>{
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  //debugger
  searchHero(formData.get('hero-name'))
})


