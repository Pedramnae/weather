const myKey = '088559ed8d4a916217c5e92c0c289b34'
let sunny = '<i class="bi bi-brightness-high"></i>'
let suncloud = '<i class="bi bi-cloud-sun"></i>'
let moon = '<i class="bi bi-moon"></i>'
let mooncloud = '<i class="bi bi-cloud-moon"></i>'
let cloudy = '<i class="bi bi-cloud-sun"></i>'
let rainy = '<i class="bi bi-cloud-drizzle"></i>'
let snowy = '<i class="bi bi-cloud-snow"></i>'
let thundercloud = '<i class="bi bi-cloud-lightning-rain"></i>'
let windy = '<i class="bi bi-wind"></i>'


let cityName = document.getElementById('cityname')
let day = document.getElementById('day')
let pressureval = document.getElementById('pressure')
let humidityval = document.getElementById('humidity')
let wind = document.getElementById('wind')
let tempval = document.querySelectorAll('.temp')
let skyval = document.getElementById('sky')
let skyicon = document.getElementById('icon')
let skyicon2 = document.getElementById('skyicon2')



document.getElementById('circle1').style.display = 'none'
document.getElementById('circle2').style.display = 'none'



let currentweather = ''
let pressure = ''
let temp = ''
let humidity = ''
let windspeed = ''
let country = ''
let city = ''
let sky = ''


let date = new Date
document.getElementById('date').innerText = date.toLocaleDateString()
let day2 = document.getElementById('day2')
let flag = ''
weekday(date.getDay())
function weekday(d) {
    switch (d) {
        case 1: flag = 'Monday'; break;
        case 2: flag = 'Tuesday'; break;
        case 3: flag = 'Wednesdays'; break;
        case 4: flag = 'Thursdays'; break;
        case 5: flag = 'Fridays'; break;
        case 6: flag = 'Saturdays'; break;
        case 7: flag = 'Sundays'
    }
}
day.innerText = flag
day2.innerText = flag.slice(0, 3)


document.getElementById('search').addEventListener('click', () => {
    let cityName = document.getElementById("inp").value;


    if (cityName == '') {
        alert("Please enter a valid City Name")
    } else {
        async function myFetch() {
            let data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + myKey + '')
            let x = await data.json()



            pressure = x.main.pressure
            temp = (Math.floor(x.main.temp)) - 273
            humidity = x.main.humidity
            windspeed = x.wind.speed
            currentweather = x.weather[0].icon
            sky = x.weather[0].description
            country = x.sys.country
            city = x.name

            set(pressure, temp, humidity, windspeed, country, city, sky)
            weather(currentweather)
        }
        myFetch()
        document.getElementById('c1').innerText = 'C'
        document.getElementById('c2').innerText = 'C'
        document.getElementById('circle1').style.display = 'flex'
        document.getElementById('circle2').style.display = 'flex'

    }


})


function set(p, t, h, w, co, ci, sky) {
    pressureval.innerText = p + ' hpa'
    tempval.forEach((val) => {
        val.innerText = t
    })
    humidityval.innerText = h + '%'
    wind.innerText = w + ' mph'
    cityName.innerText = ci + ' , ' + co
    skyval.innerText = sky

}
function weather(c) {
    let x = ''
    switch (c) {
        case '01n': x = moon; break;
        case '02n': x = mooncloud; break;
        case '03n': x = cloudy; break;
        case '04n': x = cloudy; break;
        case '09n': x = rainy; break;
        case '10n': x = rainy; break;
        case '11n': x = thundercloud; break;
        case '13n': x = snowy; break;
        case '50n': x = windy; break;

        case '01d': x = sunny; break;
        case '02d': x = suncloud; break;
        case '03d': x = cloudy; break;
        case '04d': x = cloudy; break;
        case '09d': x = rainy; break;
        case '10d': x = rainy; break;
        case '11d': x = thundercloud; break;
        case '13d': x = snowy; break;
        case '50d': x = windy;
    }
    skyicon.innerHTML = x
    skyicon2.innerHTML = x
}