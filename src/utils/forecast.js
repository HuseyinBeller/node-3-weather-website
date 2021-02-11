const request = require('request')


const forecast =(latidude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=498a3b463c930b04433d70fa18768d50&query=' + latidude + ',' + longitude + '&units=f'   

   request({ url, json: true}, (error, { body }) => {
     if (error) {
        callback('Unable to connect to weather service!', undefined)
     }  else if (body.error) {
        callback('Unable to find location!', undefined)
     }  else {
        callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out. The humidity is ' + body.current.humidity + '%.')     }
   })
}


    module.exports = forecast

