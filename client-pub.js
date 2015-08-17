var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost');
getRandomIntInRange(0,10).toString();

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

client.on('connect', function () {
  setInterval(function() {
    client.publish('presence', getRandomIntInRange(0,10).toString() ,{retain: false, qa: 1});
  }, 1000);
});
