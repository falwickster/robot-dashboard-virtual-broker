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


//statusy modułów robota
client.publish("Gripper/Alive", "1");
client.publish("Arm/Alive", "1");
client.publish("Chassis/Alive", "1");
client.publish("Gps/Alive", "0");
client.publish("GpsUSB/Alive", "0");

//statusy chwytaka  
client.publish('Gripper/GripperCurrent', '13 A');
client.publish("Gripper/MoveCurrent", "2 A");
client.publish("Gripper/RotateCurrent", "3 A");
client.publish("Gripper/RotatePosition", "0");
client.publish("Gripper/Voltage", "0V");

//statusy ramienia
  client.publish("Arm/BarkCurrent", "2 A");
  client.publish("Arm/BarkPosition", "0");
  client.publish("Arm/LokiecCurrent", "3 A");
  client.publish("Arm/LokiecPosition", "0");
  client.publish("Arm/ObrotCurrent", "1 A");
  client.publish("Arm/ObrotPosition", "0");

//statusy GPS
  client.publish("GpsUSB/LatitudeDMS", "52 12");
  client.publish("GpsUSB/LongitudeDMS", "42 31");
  client.publish("GpsUSB/LatitudeDD", "52");
  client.publish("GpsUSB/LongitudeDD", "42");
  client.publish("GpsUSB/Track", "1200");
  client.publish("GpsUSB/Speed", "231");

// statusy akumulatora i elektroniki
  client.publish("Chassis/AkuMot", "12 V");
  client.publish("Chassis/AkuEle", "4.5 V");
	
});
