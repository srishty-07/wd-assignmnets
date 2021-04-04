const api = {
  key: "7ae1ec5cdd3129ffd585006788436f80"
}
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(e) {
  if (e.keyCode == 13) {
    getResults(searchbox.value);
    console.log(searchbox.value);
    searchbox.value = "";
  }
}
function getResults(query) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults)
    .catch(err => {
      // (displayError); 
      console.log(err);
    })
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name},${weather.sys.country}`;

  let newd = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(newd);

  let temp = document.querySelector('.temp');
  let t1 = `${Math.round(weather.main.temp)}`;
  let t2 = Math.round(t1 - 273.15);

  temp.innerHTML = `${t2}<span> °C</span>`;

  let weather1 = document.querySelector('.weather');
  let w1 = `${weather.weather[0].main}`;
  weather1.innerText = `${w1}`;

  let visibility = document.querySelector('.visibility');
  visibility.innerText = `${weather.visibility}`;

  let highLow = document.querySelector('.hi-lo');
  let t3 = `${weather.main.temp_min}`;
  let t4 = Math.round(t3 - 273.15);
  let t5 = `${weather.main.temp_max}`;
  let t6 = Math.round(t5 - 273.15);
  highLow.innerText = `${t4} °C/${t6} °C`;




  if (w1 == "Clouds") {
    
    document.body.style.background = "url('https://i.gifer.com/7RtV.gif')no-repeat center center ";
    document.body.style.backgroundSize="100% 100%";
    document.body.style.color = 'white';
  }
  else if (w1 == "Haze") {
    document.body.style.background = "url('https://media1.giphy.com/media/ZWRCWdUymIGNW/giphy.gif')no-repeat center center";
    document.body.style.backgroundSize = "100px cover top center";
    document.body.style.backgroundSize="100% 100%";
    document.body.style.color = '#fefae0';
  }
  else if (w1 == "Clear") {
    document.body.style.background = "url('https://media1.giphy.com/media/u01ioCe6G8URG/giphy.gif')no-repeat center center";
    document.body.style.color = '#003566';
    document.body.style.backgroundSize="100% 100%";
  }
  else if (w1 == "Mist") {
    document.body.style.background = "url('https://media1.giphy.com/media/ZWRCWdUymIGNW/giphy.gif')no-repeat center center";
    document.body.style.color = '#ccff33';
    document.body.style.backgroundSize="100% 100%";
  }
  else if (w1 == "Snow") {
    document.body.style.background = "url('https://miro.medium.com/max/1000/1*uBeeSxy5jIN3qFK0EE5STA.gif')no-repeat center center ";
    document.body.style.color = 'yellow';
    document.body.style.backgroundSize="100% 100%";
  }
    else if (w1 == "Rain") {
    document.body.style.background = "url('https://data.whicdn.com/images/294789971/original.gif')no-repeat center center";
    document.body.style.color = '#caf0f8';
    document.body.style.backgroundSize="100% 100%";
  }
  else if (w1 == "Smoke") {
    document.body.style.background = "url('https://media4.giphy.com/media/l0HU6CzJfxcTk5pN6/200.gif')no-repeat center center";
    document.body.style.color = 'white';
    document.body.style.backgroundSize="100% 100%";
  }
 


}
function dateBuilder(e) {
  let months = ['January', 'February', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];

  let day = days[e.getDay()];
  let date = e.getDate();
  let month = months[e.getMonth()];
  let year = e.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
// function displayError(weather)
// {
//   city.innerText=` `;
// }
