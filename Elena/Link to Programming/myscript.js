//initialize player data
var player = {
  tech: 0,
  energy: 0
};
//initialize tech building data
var engineer = {
  name: "Engineer",
  owned: 0,
  cost: 50,
  generates: 5
};
var android = {
  name: "Android",
  owned: 0,
  cost: 50,
  generates: 0
};
var robot = {
  name: "Robot",
  owned: 0,
  cost: 50,
  generates: 0
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
}

//game load
function gameLoad(){
  var savegame = JSON.parse(localStorage.getItem("player"));
  if (typeof savegame.tech !== "undefined") player.tech = savegame.tech;
  if (typeof savegame.energy !== "undefined") player.energy = savegame.energy;
}
//make numbers prettier
function prettyNum(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}
//purchasing

//Tech
function addEngi(amount){
  if (amount * engineer.cost <= player.tech){
    engineer.owned += amount;
    player.tech -= amount * engineer.cost;
}
  else {
      console.log("Not enough resources");
  }
  document.getElementById("Engineers").innerHTML = engineer.owned;
}
function addAndro(amount){
  if (amount * android.cost <= player.tech){
    android.owned += amount;
    player.tech -= amount * android.cost;
  }
  else {
      console.log("Not enough resources");
  }
  document.getElementById("Androids").innerHTML = android.owned;
}
function addRobot(amount){
  if (amount * robot.cost <= player.tech){
   robot.owned += amount;
   player.tech -= amount * robot.cost;
  }
else {
    console.log("Not enough resources");
 }
  document.getElementById("Robot").innerHTML = robot.owned;
}
function addResLab(amount){
  if (amount * resLab.cost <= player.tech){
   resLab.owned += amount;
   player.tech -= amount * resLab.cost;
  }
else {
      console.log("Not enough resources");
 }
  document.getElementById("resLab").innerHTML = resLab.owned;
}
function addresFac(amount){
  if (amount * resFac.cost <= player.tech){
   resFac.owned += amount;
   player.tech -= amount * resFac.cost;
  }
else {
      console.log("Not enough resources");
 }
  document.getElementById("resFac").innerHTML = resFac.owned;
}
function addroboticsFact(amount){
  if (amount * roboticsFact.cost <= player.tech){
   roboticsFact.owned += amount;
   player.tech -= amount * roboticsFact.cost;
  }
else {
     console.log("Not enough resources");
 }
  document.getElementById("roboticsFact").innerHTML = roboticsFact.owned;
}
function addcyberLab(amount){
  if (amount * cyberLab.cost <= player.tech){
   cyberLab.owned += amount;
   player.tech -= amount * cyberLab.cost;
  }
else {
    console.log("Not enough resources");
 }
  document.getElementById("cyberLab").innerHTML = cyberLab.owned;
}

//Energy
function addbattPack(amount){
  if (amount * battPack.cost <= player.tech){
   battPack.owned += amount;
   player.tech -= amount * battPack.cost;
  }
else {
   console.log("Not enough resources");
 }
  document.getElementById("battPack").innerHTML = battPack.owned;
}
function addpwrGen(amount){
  if (amount * pwrGen.cost <= player.tech){
   pwrGen.owned += amount;
   player.tech -= amount * pwrGen.cost;
  }
else {
  console.log("Not enough resources");
 }
  document.getElementById("pwrGen").innerHTML = pwrGen.owned;
}
function addgenRoom(amount){
  if (amount * genRoom.cost <= player.tech){
   genRoom.owned += amount;
   player.tech -= amount * genRoom.cost;
  }
else {
  console.log("Not enough resources");
 }
  document.getElementById("genRoom").innerHTML = genRoom.owned;
}
function addsolPan(amount){
  if (amount * solPan.cost <= player.tech){
   solPan.owned += amount;
   player.tech -= amount * solPan.cost;
  }
else {
  console.log("Not enough resources");
 }
  document.getElementById("solPan").innerHTML = solPan.owned;
}
function addsolPanFarm(amount){
  if (amount * solPanFarm.cost <= player.tech){
   solPanFarm.owned += amount;
   player.tech -= amount * solPanFarm.cost;
  }
else {
  console.log("Not enough resources");
 }
  document.getElementById("solPanFarm").innerHTML = solPanFarm.owned;
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
    updateTotals();
    gameSave();
    getResource(player, 'tech' , 1, "Tech");
    console.log(player.tech);
}, 1000);
