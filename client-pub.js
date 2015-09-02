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
  	setInterval(function() {
    client.publish("Gripper/Alive", getRandomIntInRange(0,2).toString(),{retain: false, qa: 1});
  }, 1000);
	setInterval(function() {
    client.publish("Arm/Alive", getRandomIntInRange(0,2).toString(),{retain: false, qa: 1});
  }, 1000);
	setInterval(function() {
    client.publish("Chassis/Alive", getRandomIntInRange(0,2).toString(),{retain: false, qa: 1});
  }, 1000);
	setInterval(function() {
    client.publish("Gps/Alive", getRandomIntInRange(0,2).toString(),{retain: false, qa: 1});
  }, 1000);
	setInterval(function() {
    client.publish("GpsUSB/Alive", getRandomIntInRange(0,2).toString(),{retain: false, qa: 1});
  }, 1000);

//statusy chwytaka
setInterval(function() {
    client.publish("Gripper/GripperCurrent", getRandomIntInRange(0,20).toString()+'A',{retain: false, qa: 1});
  }, 5000);
setInterval(function() {
    client.publish("Gripper/MoveCurrent", getRandomIntInRange(0,20).toString()+'A',{retain: false, qa: 1});
  }, 5000);
setInterval(function() {
    client.publish("Gripper/RotateCurrent", getRandomIntInRange(0,20).toString()+'A',{retain: false, qa: 1});
  }, 5000);
setInterval(function() {
    client.publish("Gripper/RotatePosition", getRandomIntInRange(0,20).toString(),{retain: false, qa: 1});
  }, 5000);
setInterval(function() {
    client.publish("Gripper/Voltage", getRandomIntInRange(0,20).toString()+'V',{retain: false, qa: 1});
  }, 5000);  

//statusy ramienia
setInterval(function() {
    client.publish("Arm/BarkCurrent", getRandomIntInRange(0,20).toString(),{retain: false, qa: 1});
  }, 5000);  
setInterval(function() {
    client.publish("Arm/BarkPosition", getRandomIntInRange(0,20).toString(),{retain: false, qa: 1});
  }, 5000);  
setInterval(function() {
    client.publish("Arm/LokiecCurrent", getRandomIntInRange(0,20).toString(),{retain: false, qa: 1});
  }, 5000);  
setInterval(function() {
    client.publish("Arm/LokiecPosition", getRandomIntInRange(0,20).toString(),{retain: false, qa: 1});
  }, 5000);  
setInterval(function() {
    client.publish("Arm/ObrotCurrent", getRandomIntInRange(0,20).toString()+'A',{retain: false, qa: 1});
  }, 5000);  
setInterval(function() {
    client.publish("Arm/ObrotPosition", getRandomIntInRange(0,20).toString(),{retain: false, qa: 1});
  }, 5000);  

//statusy GPS
setInterval(function() {
    client.publish("GpsUSB/LatitudeDD", getRandomIntInRange(0,20).toString(),{retain: false, qa: 1});
  }, 5000);  
setInterval(function() {
    client.publish("GpsUSB/LongitudeDD", getRandomIntInRange(0,20).toString(),{retain: false, qa: 1});
  }, 5000);  
setInterval(function() {
    client.publish("GpsUSB/Track", getRandomIntInRange(0,20).toString(),{retain: false, qa: 1});
  }, 5000);  
setInterval(function() {
    client.publish("GpsUSB/Speed", getRandomIntInRange(0,20).toString(),{retain: false, qa: 1});
  }, 5000);  

// statusy akumulatora i elektroniki
setInterval(function() {
    client.publish("Chassis/AkuMot", getRandomIntInRange(0,101).toString(),{retain: false, qa: 1});
  }, 1000);
setInterval(function() {
    client.publish("Chassis/AkuEle", getRandomIntInRange(0,101).toString(),{retain: false, qa: 1});	
}, 1000);
});
