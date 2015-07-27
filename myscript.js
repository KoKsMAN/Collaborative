//initialize player data
var player = {
  tech: prettyNum(0),
  energy: 0,
};
//initialize tech building data
var engineer = {
  name: "Engineer",
  owned: 0,
  cost: 5,
  generates: 5
};
var android = {
  name: "Android",
  owned: 0,
  cost: 5,
  generates: 1
};
var robot = {
  name: "Robot",
  owned: 0,
  cost: 5,
  generates: 2
};
var resLab = {
  name: "Research Lab",
  owned: 0,
  cost: 50,
  generates: 0
};
var resFac = {
  name: "Research Facility",
  owned: 0,
  cost: 50,
  generates: 0
};
var roboticsFact = {
  name: "Robotics Factory",
  owned: 0,
  cost: 50,
  generates: 0
};
var cyberLab = {
  name: "Cybernetics Lab",
  owned: 0,
  cost: 50,
  generates: 0
};
//initialize energy building data
var battPack = {
  name: "Battery Pack",
  owned: 0,
  cost: 50,
  generates: 0
};
var pwrGen = {
  name: "Power Generator",
  owned: 0,
  cost: 50,
  generates: 0
};
var genRoom = {
  name: "Generator Room",
  owned: 0,
  cost: 50,
  generates: 0
};
var solPan = {
  name: "Solar Panels",
  owned: 0,
  cost: 50,
  generates: 0
};
var solPanFarm = {
  name: "Solar Panel Farm",
  owned: 0,
  cost: 50,
  generates: 0
};

//game save
function gameSave(){
  localStorage.setItem("player",JSON.stringify(player));
  localStorage.setItem("engineer",JSON.stringify(engineer));
}

//game load
function gameLoad(){
  var savegame = JSON.parse(localStorage.getItem("player"));
    var savegame2 = JSON.parse(localStorage.getItem("engineer"));
  if (typeof savegame.tech !== "undefined") player.tech = savegame.tech;
  if (typeof savegame.energy !== "undefined") player.energy = savegame.energy;
  if (typeof savegame2.owned !== "undefined") engineer.owned = savegame2.owned;
}

//delete save
function deleteSave(){
  localStorage.removeItem('player');
  localStorage.removeItem('engineer');
  location.reload();
}

//make numbers prettier
function prettyNum(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}
//purchasing

//Tech
function testAdd(amount, building, id){
  var cost = amount * building.cost;
  if (cost <= player.tech){
    building.owned += amount;
    player.tech -= cost;
    document.getElementById(id).innerHTML = building.owned;
    console.log(cost);
}
  else {
      console.log("Not enough resources");
  }

}

function addMinion(obj, id){
  obj.owned++;
  document.getElementById("id").innerHTML = obj.owned;
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
}

function getResource(player, resource, amount, id) {
    player[resource] += amount;
    document.getElementById(id).innerHTML = player[resource];
}


window.setInterval(function() {
    console.log("I'm working");
    console.log('"' + '"');
    updateTotals();
    gameSave();
    getResource(player, 'tech' , 1, "Tech");
    console.log(player.tech);
}, 1000);
