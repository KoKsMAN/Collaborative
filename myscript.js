//initialize player data
var player = {
  tech: 0,
  energy: 0,
  upgrades:{
    //Auto CLicker
    autoClickerTech: 0,
    autoClickerEnergy: 0,
    doubleClickerTech: 0,
    doubleClickerEnergy: 0,
    //Tech
    engi5Perc: 0,
    engi25Perc: 0,
    andro5Perc: 0,
    andro25Perc: 0,
    robot5Perc: 0,
    robot25Perc: 0,
    resLab5Perc: 0,
    resLab25Perc: 0,
    resFact5Perc: 0,
    resFact25Perc: 0,
    roboFact5Perc: 0,
    roboFact25Perc: 0,
    cybLab5Perc: 0,
    cybLab25Perc: 0,
    //Energy
    battPck5Perc: 0,
    battPck25Perc: 0,
    pwrGen5Perc: 0,
    pwrGen25Perc: 0,
    genRoom5Perc: 0,
    genRoom25Perc: 0,
    solPan5Perc: 0,
    solPan25Perc: 0,
    solPanFarm5Perc: 0,
    solPanFarm25Perc: 0,
  },
  achievements: {
     first: 0,
     second: 0,
     third: 0,
     fourth: 0,
     fifth: 0,
  }
};
nums = ['k','M','B','T','Qa','Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'UnD', 'DuD', 'TrD', 'QaD', 'QiD', 'SeD', 'SpD', 'OcD', 'NoD', 'Vi', 'UnV'];
//initialize tech building data
var engineer = {
  name: "Engineer",
  owned: 1,
  cost: 15,
  nextC: 15,
  generates: 0.1
};
var android = {
  name: "Android",
  owned: 0,
  cost: 100,
  nextC: 100,
  generates: 2
};
var robot = {
  name: "Robot",
  owned: 0,
  cost: 500,
  nextC: 500,
  generates: 4
};
var resLab = {
  name: "Research Lab",
  owned: 0,
  cost: 3000,
  nextC: 3000,
  generates: 10
};
var resFac = {
  name: "Research Facility",
  owned: 0,
  cost: 10000,
  nextC: 10000,
  generates: 40
};
var roboticsFact = {
  name: "Robotics Factory",
  owned: 0,
  cost: 40000,
  nextC: 40000,
  generates: 100
};
var cyberLab = {
  name: "Cybernetics Lab",
  owned: 1,
  cost: 200000,
  nextC: 200000,
  generates: 400
};

//initialize energy building data
var battPack = {
  name: "Battery Pack",
  owned: 0,
  cost: 15,
  nextC: 15,
  generates: 1
};
var pwrGen = {
  name: "Power Generator",
  owned: 0,
  cost: 15,
  nextC: 15,
  generates: 1
};
var genRoom = {
  name: "Generator Room",
  owned: 0,
  cost: 15,
  nextC: 15,
  generates: 1
};
var solPan = {
  name: "Solar Panels",
  owned: 0,
  cost: 15,
  nextC: 15,
  generates: 1
};
var solPanFarm = {
  name: "Solar Panel Farm",
  owned: 0,
  cost: 15,
  nextC: 15,
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

  //Resources
  if (typeof savegame.tech !== "undefined") player.tech = savegame.tech;
  if (typeof savegame.energy !== "undefined") player.energy = savegame.energy;
  //Units Tech
  if (typeof savegame2.owned !== "undefined") engineer.owned = savegame2.owned;
  if (typeof savegame3.owned !== "undefined") android.owned = savegame3.owned;
  if (typeof savegame4.owned !== "undefined") robot.owned = savegame4.owned;
  if (typeof savegame5.owned !== "undefined") resLab.owned = savegame5.owned;
  if (typeof savegame6.owned !== "undefined") resFac.owned = savegame6.owned;
  if (typeof savegame7.owned !== "undefined") roboticsFact.owned = savegame7.owned;
  //Units Energy
  if (typeof savegame8.owned !== "undefined") battPack.owned = savegame8.owned;
  if (typeof savegame9.owned !== "undefined") pwrGen.owned = savegame9.owned;
  if (typeof savegame10.owned !== "undefined") genRoom.owned = savegame10.owned;
  if (typeof savegame11.owned !== "undefined") solPan.owned = savegame11.owned;
  if (typeof savegame12.owned !== "undefined") solPanFarm.owned = savegame12.owned;
  //Achievements
  if (typeof savegame.achievements !== "undefined") player.achievements = savegame.achievements;
  //Upgrades
  if (typeof savegame.upgrades !== "undefined") player.upgrades = savegame.upgrades;
}
//check save
//function checkSave(){
//  alert(JSON.stringify(savegame));
//}


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
  building.nextC = ((amount * Math.floor(building.cost * Math.pow(1.15,building.owned))));
  if (building.nextC <= player.tech){
    building.owned += amount;
    player.tech -= building.nextC;
    document.getElementById('Tech').innerHTML = suffixy(player.tech, 2);
    document.getElementsByClassName('Generating')[arrayPlace].innerHTML = suffixy((building.owned * building.generates), 2);

}
  else {
      console.log("Not enough resources");
  }
}
//Energy Buy
function energyBuy(amount, building, id, arrayPlace){
  building.nextC = (amount * Math.floor(building.cost * Math.pow(1.15,building.owned)));
  if (building.nextC <= player.energy){
    building.owned += amount;
    player.energy -= building.nextC;
    document.getElementById("Energy").innerHTML = player.energy;
}
  else {
      console.log("Not enough resources");
  }

}


function buyUpgrade(techcost, energycost, up, amount){
    if(techcost <= player.tech && energycost <= player.energy){
      player.tech -= techcost;
      player.energy -= energycost;
      player.upgrades[up] = amount;
      console.log("Done, upgrade purchased");
    }
    console.log("UP" + " " + up);

}

function getResource(player, resource, amount, id) {
    player[resource] += amount;
    document.getElementById(id).innerHTML = player[resource];
}


function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

function suffixy(num, dec){
    dec = dec || 0; //how many decimal places do we want?
    var suffixes = ['','k','M','B','T','Qa','Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'UnD', 'DuD', 'TrD', 'QaD', 'QiD', 'SeD', 'SpD', 'OcD'];
    var ord = floor(Math.log(Math.abs(num))/Math.log(10)/3); //the abs to make sure our number is always positive when being put through a log operation. divide by 3 at the end because our suffixes goes up by orders of 3
    var suffix = suffixes[ord];
    var rounded = Math.round(num/(Math.pow(10, ord*3-dec)))/Math.pow(10, dec);
    return rounded+ " " + suffix;

}

function floor(num){
    //special floor needed to deal with floating point calculations
    if(num - Math.floor(num) >= 0.9999999999999991){
        return Math.ceil(num);
    } else{
        return Math.floor(num);
    }
}

function updateTotals(){
  player.tech += ((engineer.owned * (engineer.generates + player.upgrades.engi5Perc + player.upgrades.engi25Perc )));
  player.tech += ((android.owned * (android.generates + player.upgrades.andro5Perc + player.upgrades.andro25Perc )));
  player.tech += ((robot.owned * (robot.generates + player.upgrades.robot5Perc + player.upgrades.robot25Perc )));
  player.tech += ((resLab.owned * (resLab.generates + player.upgrades.resLab5Perc + player.upgrades.resLab25Perc )));
  player.tech += ((resFac.owned * (resFac.generates + player.upgrades.resFact5Perc + player.upgrades.resFact25Perc )));
  player.tech += ((roboticsFact.owned * (roboticsFact.generates + player.upgrades.roboFact5Perc + player.upgrades.roboFact25Perc )));
  player.tech += ((cyberLab.owned * (cyberLab.generates + player.upgrades.cybLab5Perc + player.upgrades.cybLab25Perc )));
  //Energy
  player.energy += ((battPack.owned * (battPack.generates + player.upgrades.battPck5Perc + player.upgrades.battPck25Perc )));
  player.energy += ((pwrGen.owned * (pwrGen.generates + player.upgrades.pwrGen5Perc + player.upgrades.pwrGen25Perc )));
  player.energy += ((genRoom.owned * (genRoom.generates + player.upgrades.genRoom5Perc + player.upgrades.genRoom25Perc )));
  player.energy += ((solPan.owned * (solPan.generates + player.upgrades.solPan5Perc + player.upgrades.solPan25Perc )));
  player.energy += ((solPanFarm.owned * (solPanFarm.generates + player.upgrades.solPanFarm5Perc + player.upgrades.solPanFarm25Perc )));

}
//achievements
function checkAchievements (){
  if (engineer.owned === 1 && player.achievements.first !== 1 ){
    player.achievements.first = 1;
  }
  if (player.achievements.first !== 0){
    document.getElementById("first").className = "unlocked";
  }

  if (player.tech === 30 && player.achievements.second !== 1){
    player.achievements.second = 1;

  }
    if (player.achievements.second !== 0){
    document.getElementById("second").className = "unlocked";
  }
}



window.setInterval(function() {
  //  console.log("I'm working");
    updateTotals();
    gameSave();
  //  getResource(player, 'tech' , 1, "Tech");
    getResource(player, 'energy' , 1, "Energy");
    checkAchievements ();

}, 1000);

window.setInterval(function() {
    //console.log("I'm working Too");
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
    if (player.tech <= 1000){
    document.getElementById('Tech').innerHTML = prettify(player.tech);
  }
  else {document.getElementById('Tech').innerHTML = suffixy(player.tech, 2);}
    document.getElementById('Energy').innerHTML = player.energy;
    //Cost Tech
    document.getElementsByClassName('Cost')[0].innerHTML = suffixy(engineer.nextC, 2);
    document.getElementsByClassName('Cost')[1].innerHTML = suffixy(android.nextC, 2);
    document.getElementsByClassName('Cost')[2].innerHTML = suffixy(robot.nextC, 2);
    document.getElementsByClassName('Cost')[3].innerHTML = suffixy(resLab.nextC, 2);
    document.getElementsByClassName('Cost')[4].innerHTML = suffixy(resFac.nextC, 2);
    document.getElementsByClassName('Cost')[5].innerHTML = suffixy(roboticsFact.nextC, 2);
    document.getElementsByClassName('Cost')[6].innerHTML = suffixy(cyberLab.nextC, 2);
    //Cost Energy
    document.getElementsByClassName('Cost')[7].innerHTML = battPack.nextC;
    document.getElementsByClassName('Cost')[8].innerHTML = pwrGen.nextC;
    document.getElementsByClassName('Cost')[9].innerHTML = genRoom.nextC;
    document.getElementsByClassName('Cost')[10].innerHTML = solPan.nextC;
    document.getElementsByClassName('Cost')[11].innerHTML = solPanFarm.nextC;


}, 100);


//function buyAllTech(building, arrayPlace){
//  var total = Math.floor(player.tech / building.nextC);
//  console.log(building.nextC);
//  building.nextC = ( Math.floor(building.cost * Math.pow(1.15,building.owned)));
//    if (total >= 1){
//    building.owned += total;
//    player.tech -= total * building.nextC;
//    document.getElementsByClassName('Cost')[arrayPlace].innerHTML = building.nextC;
//  }
//}

//function buyAllEnergy(building, arrayPlace){
//  var total = Math.floor(player.energy / building.nextC);
//  console.log(building.nextC);
//  building.nextC = ( Math.floor(building.cost * Math.pow(1.15,building.owned)));
//    if (total >= 1){
//    building.owned += total;
//    player.energy -= total * building.nextC;
//    document.getElementById('Energy').innerHTML = player.energy;
//    document.getElementsByClassName('Cost')[arrayPlace].innerHTML = building.nextC;
//  }
//}
