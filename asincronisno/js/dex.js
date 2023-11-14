const paragraph = document.getElementById('paragraph');
const loadP = document.getElementById('loadP');
const loader = document.getElementsByClassName('lds-roller')
const inputCity = document.getElementById('inputCity');
const btnSearch = document.getElementById('btnSearch');
const nameCountry = document.getElementById('nameCountry');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');
const APIKEY = '6637faa8d9e38591343e0d4ba75bd213';



const openWeather = async (city) => {
    const getDataFromAPIWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
    const responseData = await getDataFromAPIWeather.json();
    return responseData;

}

btnSearch.addEventListener('click', () => {
    loader[0].classList.add('show')
    
    openWeather(inputCity.value)
    .then((respuestaDelClima) => {
        
        loader[0].classList.remove('show');
        loader[0].classList.add('none');
        console.log(respuestaDelClima);
        nameCountry.innerText = respuestaDelClima.sys.country
        city.innerText = respuestaDelClima.name
        temp.innerText = (respuestaDelClima.main.temp - 273.15).toFixed(2)
        wind.innerText = respuestaDelClima.wind.speed

    })
    .catch((error) => console.log(error));
} )










