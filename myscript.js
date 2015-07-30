//initialize player data
var player = {
  tech: 0,
  energy: 0,
};
//initialize tech building data
var engineer = {
  name: "Engineer",
  owned: 0,
  cost: 15,
  generates: 1
};
var android = {
  name: "Android",
  owned: 0,
  cost: 100,
  generates: 2
};
var robot = {
  name: "Robot",
  owned: 0,
  cost: 500,
  generates: 4
};
var resLab = {
  name: "Research Lab",
  owned: 0,
  cost: 3000,
  generates: 10
};
var resFac = {
  name: "Research Facility",
  owned: 0,
  cost: 10000,
  generates: 40
};
var roboticsFact = {
  name: "Robotics Factory",
  owned: 0,
  cost: 40000,
  generates: 100
};
var cyberLab = {
  name: "Cybernetics Lab",
  owned: 0,
  cost: 200000,
  generates: 400
};
//initialize energy building data
var battPack = {
  name: "Battery Pack",
  owned: 0,
  cost: 5,
  generates: 1
};
var pwrGen = {
  name: "Power Generator",
  owned: 0,
  cost: 5,
  generates: 1
};
var genRoom = {
  name: "Generator Room",
  owned: 0,
  cost: 5,
  generates: 1
};
var solPan = {
  name: "Solar Panels",
  owned: 0,
  cost: 5,
  generates: 1
};
var solPanFarm = {
  name: "Solar Panel Farm",
  owned: 0,
  cost: 5,
  generates: 1
};

//game save
function gameSave(){
 localStorage.setItem("player",JSON.stringify(player));
 localStorage.setItem("engineer",JSON.stringify(engineer));
 localStorage.setItem("android",JSON.stringify(android));
 localStorage.setItem("robot",JSON.stringify(robot));
 localStorage.setItem("resLab",JSON.stringify(resLab));
 localStorage.setItem("resFac",JSON.stringify(resFac));
 localStorage.setItem("roboticsFact",JSON.stringify(roboticsFact));
 localStorage.setItem("battPack",JSON.stringify(battPack));
 localStorage.setItem("pwrGen",JSON.stringify(pwrGen));
 localStorage.setItem("genRoom",JSON.stringify(genRoom));
 localStorage.setItem("solPan",JSON.stringify(solPan));
 localStorage.setItem("solPanFarm",JSON.stringify(solPanFarm));
}

//game load
function gameLoad(){

  var savegame = JSON.parse(localStorage.getItem("player"));
  var savegame2 = JSON.parse(localStorage.getItem("engineer"));
  var savegame3 = JSON.parse(localStorage.getItem("android"));
  var savegame4 = JSON.parse(localStorage.getItem("robot"));
  var savegame5 = JSON.parse(localStorage.getItem("resLab"));
  var savegame6 = JSON.parse(localStorage.getItem("resFac"));
  var savegame7 = JSON.parse(localStorage.getItem("roboticsFact"));
  var savegame8 = JSON.parse(localStorage.getItem("battPack"));
  var savegame9 = JSON.parse(localStorage.getItem("pwrGen"));
  var savegame10 = JSON.parse(localStorage.getItem("genRoom"));
  var savegame11 = JSON.parse(localStorage.getItem("solPan"));
  var savegame12 = JSON.parse(localStorage.getItem("solPanFarm"));

  if (typeof savegame.tech !== "undefined") player.tech = savegame.tech;
  if (typeof savegame.energy !== "undefined") player.energy = savegame.energy;
  if (typeof savegame2.owned !== "undefined") engineer.owned = savegame2.owned;
  if (typeof savegame3.owned !== "undefined") android.owned = savegame3.owned;
  if (typeof savegame4.owned !== "undefined") robot.owned = savegame4.owned;
  if (typeof savegame5.owned !== "undefined") resLab.owned = savegame5.owned;
  if (typeof savegame6.owned !== "undefined") resFac.owned = savegame6.owned;
  if (typeof savegame7.owned !== "undefined") roboticsFact.owned = savegame7.owned;
  if (typeof savegame8.owned !== "undefined") battPack.owned = savegame8.owned;
  if (typeof savegame9.owned !== "undefined") pwrGen.owned = savegame9.owned;
  if (typeof savegame10.owned !== "undefined") genRoom.owned = savegame10.owned;
  if (typeof savegame11.owned !== "undefined") solPan.owned = savegame11.owned;
  if (typeof savegame12.owned !== "undefined") solPanFarm.owned = savegame12.owned;
}

//delete save
function deleteSave(){
  localStorage.removeItem('player');
  localStorage.removeItem('engineer');
  localStorage.removeItem('android');
  localStorage.removeItem('robot');
  localStorage.removeItem('resLab');
  localStorage.removeItem('resFac');
  localStorage.removeItem('roboticsFact');
  localStorage.removeItem('battPack');
  localStorage.removeItem('pwrGen');
  localStorage.removeItem('genRoom');
  localStorage.removeItem('solPan');
  localStorage.removeItem('solPanFarm');

  location.reload();
}


//Tech Buy
function techBuy(amount, building, id, arrayPlace){
  var unitCost = (amount * Math.floor(building.cost * Math.pow(1.15,building.owned)));
  if (unitCost <= player.tech){
    building.owned += amount;
    player.tech -= unitCost;
    document.getElementById('Tech').innerHTML = player.tech;

    console.log(unitCost);
}
  else {
      console.log("Not enough resources");
  }
  document.getElementsByClassName('Cost')[arrayPlace].innerHTML = unitCost;
}
//Energy Buy
function energyBuy(amount, building, id, arrayPlace){
  var unitCost = (amount * Math.floor(building.cost * Math.pow(1.15,building.owned)));
  if (unitCost <= player.energy){
    building.owned += amount;
    player.energy -= unitCost;
    document.getElementById("Energy").innerHTML = player.energy;

    console.log(unitCost);
}
  else {
      console.log("Not enough resources");
  }
    document.getElementsByClassName('Cost')[arrayPlace].innerHTML = unitCost;
}


function updateTotals(){
  player.tech += (engineer.owned * engineer.generates);
  player.tech += (android.owned * android.generates);
  player.tech += (robot.owned * robot.generates);
  player.tech += (resLab.owned * resLab.generates);
  player.tech += (resFac.owned * resFac.generates);
  player.tech += (roboticsFact.owned * roboticsFact.generates);
  player.tech += (cyberLab.owned * cyberLab.generates);
  //Energy
  player.energy += (battPack.owned * battPack.generates);
  player.energy += (pwrGen.owned * pwrGen.generates);
  player.energy += (genRoom.owned * genRoom.generates);
  player.energy += (solPan.owned * solPan.generates);
  player.energy += (solPanFarm.owned * solPanFarm.generates);

  // Tech
  document.getElementById('Engineers').innerHTML = engineer.owned;
  document.getElementById('Androids').innerHTML = android.owned;
  document.getElementById('Robot').innerHTML = robot.owned;
  document.getElementById('resLab').innerHTML = resLab.owned;
  document.getElementById('resFac').innerHTML = resFac.owned;
  document.getElementById('roboticsFact').innerHTML = roboticsFact.owned;
  document.getElementById('cyberLab').innerHTML = cyberLab.owned;
  // Energy
  document.getElementById('battPack').innerHTML = battPack.owned;
  document.getElementById('pwrGen').innerHTML = pwrGen.owned;
  document.getElementById('genRoom').innerHTML = genRoom.owned;
  document.getElementById('solPan').innerHTML = solPan.owned;
  document.getElementById('solPanFarm').innerHTML = solPanFarm.owned;
  //Cash
  document.getElementById('Tech').innerHTML = player.tech;
  //document.getElementsByClassName('Cost')[0].innerHTML = globalCost;
  //document.getElementsByClassName('Cost')[1].innerHTML = globalCost;
  //document.getElementsByClassName('Cost')[2].innerHTML = globalCost;
  //document.getElementsByClassName('Cost')[3].innerHTML = globalCost;
}

function getResource(player, resource, amount, id) {
    player[resource] += amount;
    document.getElementById(id).innerHTML = player[resource];
}


window.setInterval(function() {
    console.log("I'm working");
    updateTotals();
    gameSave();
    getResource(player, 'tech' , 1, "Tech");
    getResource(player, 'energy' , 1, "Energy");
    console.log(player.tech);

}, 1000);
