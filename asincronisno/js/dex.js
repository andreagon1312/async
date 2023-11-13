const paragraph = document.getElementById('paragraph');
const loadP = document.getElementById('loadP');
const loader = document.getElementsByClassName('lds-roller')
const APIKEY = '6637faa8d9e38591343e0d4ba75bd213';
/*setTimeout(() => {
  loadP.classList.add('show');
  loader[0].style.display = 'none'

}, 3000)*/

const openWeather = async (city) => {
    const getDataFromAPIWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
    const responseData = await getDataFromAPIWeather.json();
    return responseData;

}

openWeather('London')
    .then((respuestaDelClima) => {
        console.log(respuestaDelClima)
})
    .catch((error) => console.log(error));

