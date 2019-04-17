// Initialize Weather Object
const weather = new Weather('Boston', 'USA');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// weather.changeLocation('Barcelona', 'Spain'); will move to another location

function getWeather(){
weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));
}
