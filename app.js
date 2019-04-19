// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialize Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.querySelector('#w-change-btn').addEventListener('click', (e)=> {
  const city = document.querySelector('#city').value;
  const country = document.querySelector('#country').value;

// Change location
weather.changeLocation(city, country);

// Set Location in Local Storage
storage.setLocationData(city, country);

// Get and display weather
getWeather();

// Close Modal using jquery
$('#locModal').modal('hide');
});

// weather.changeLocation('Barcelona', 'Spain'); will move to another location

function getWeather(){
weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
