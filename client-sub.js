var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost');

client.on('connect', function () {
  client.subscribe('presence'); //test brokera
  client.subscribe("Gripper/GripperCurrent");
  client.subscribe("Gripper/MoveCurrent");
  client.subscribe("Gripper/RotateCurrent");
  client.subscribe("Gripper/RotatePosition");
  client.subscribe("Gripper/Voltage"); //Napięcie które mamy zmierzyć podczas zadania;
  client.subscribe("Arm/BarkCurrent");
  client.subscribe("Arm/BarkPosition");
  client.subscribe("Arm/LokiecCurrent");
  client.subscribe("Arm/LokiecPosition");
  client.subscribe("Arm/ObrotCurrent");
  client.subscribe("Arm/ObrotPosition");

  client.subscribe("GpsUSB/LatitudeDD");
  client.subscribe("GpsUSB/LongitudeDD");
  client.subscribe("GpsUSB/Track");
  client.subscribe("GpsUSB/Speed");

  client.subscribe("Gripper/Alive"); //Subskrybowanie tematu z sygnalem testowym modułu chwytaka
  client.subscribe("Arm/Alive"); //Subskrybowanie tematu z sygnalem testowym modułu ramienia
  client.subscribe("Chassis/Alive"); //Subskrybowanie tematu z sygnalem testowym modułu podwozia
  client.subscribe("Gps/Alive"); //Subskrybowanie tematu z sygnalem testowym modułu gps -tiva
  client.subscribe("GpsUSB/Alive"); //Subskrybowanie tematu z sygnalem testowym modułu gps-usb -rpi

  client.subscribe("Chassis/AkuMot"); //Subskrybowanie tematu z napieciem akumulatora silników
  client.subscribe("Chassis/AkuEle"); //Subskrybowanie tematu z napieciem akumulatora elektroniki
		
  
client.on('message', function (topic, message) {
  console.log(message.toString());
  });
});
