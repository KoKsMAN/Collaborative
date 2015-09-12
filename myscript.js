//initialize player data
var player = {
  clicks: 0,
  speed: 1,
  credits: 150,
  tech: 500,
  energy: 500,
  uranium: 0,
  commander: {
    commanderName: "temp",
    colonyName: "temp",
  },
  // Staff data
  colonist: {
    owned: 1,
    generates: 0.1,
    requires: {
      cost: 15,
      nextC: 15
    }
  },
  engineer: {
    owned: 0,
    generates: 0.5,
    requires: {
      cost: 100,
      nextC: 100
    }
  },
  inventor: {
    owned: 0,
    generates: 4,
    requires: {
      cost: 500,
      nextC: 500
    }
  },
  scientist: {
    owned: 0,
    generates: 10,
    requires: {
      cost: 3000,
      nextC: 3000
    }
  },
  robot: {
    owned: 0,
    generates: 40,
    requires: {
      cost: 10000,
      nextC: 10000
    }
  },
  android: {
    owned: 0,
    generates: 100,
    requires: {
      cost: 40000,
      nextC: 40000
    }
  },
// Tech data
  workbench: {
    owned: 0,
    generates: 1,
    requires: {
      cost: 150,
      nextC: 150,
      staffCost: 1,
      powerCost: 1
    }
  },
  workshop: {
    owned: 0,
    generates: 50,
    requires: {
      cost: 1000,
      nextC: 1000,
      staffCost: 1,
      powerCost: 0
    }
  },
  resLab: {
    owned: 0,
    generates: 40,
    requires: {
      cost: 5000,
      nextC: 5000,
      staffCost: 1,
      powerCost: 0
    }
  },
  resFac: {
    owned: 0,
    generates: 100,
    requires: {
      cost: 30000,
      nextC: 30000,
      staffCost: 1,
      powerCost: 0
    }
  },
  roboticsFact: {
    owned: 0,
    generates: 400,
    requires: {
      cost: 100000,
      nextC: 100000,
      staffCost: 1,
      powerCost: 0
    }
  },
  cyberLab: {
    owned: 0,
    generates: 400,
    requires: {
      cost: 4000000,
      nextC: 4000000,
      staffCost: 1,
      powerCost: 0
    }
  },
//Energy data
  battPack: {
    owned: 0,
    generates: 1.2,
    requires: {
      cost: 75,
      nextC: 75,
      staffCost: 1,
      powerCost: 0
    }
  },
  solPan: {
    owned: 0,
    generates: 1,
    requires: {
      cost: 500,
      nextC: 500,
      staffCost: 1,
      powerCost: 0
    }
  },
  solPanFarm: {
    owned: 0,
    generates: 5,
    requires: {
      cost: 2500,
      nextC: 2500,
      staffCost: 1,
      powerCost: 0
    }
  },
  termPowStation: {
    owned: 0,
    generates: 30,
    requires: {
      cost: 15000,
      nextC: 15000,
      staffCost: 1,
      powerCost: 0
    }
  },
  nucPowPlant: {
    owned: 0,
    generates: 90,
    requires: {
      cost: 50000,
      nextC: 50000,
      staffCost: 1,
      powerCost: 0
    }
  },
  fusReactor: {
    owned: 0,
    generates: 200,
    requires: {
      cost: 200000,
      nextC: 200000,
      staffCost: 1,
      powerCost: 0
    }
  },
  uraReactor: {
    owned: 0,
    generates: 500,
    requires: {
      cost: 1000000,
      nextC: 1000000,
      staffCost: 1,
      powerCost: 0
    }
  },
  //Uranium data
  miner: {
    owned: 0,
    generates: 400,
    requires: {
      cost: 200000,
      nextC: 200000
    }
  },
  uraSmelter: {
    owned: 0,
    generates: 0.1,
    requires: {
      cost: 15,
      nextC: 15,
      staffCost: 1,
      powerCost: 0
    }
  },
  uraRefinery: {
    owned: 0,
    generates: 10,
    requires: {
      cost: 3000,
      nextC: 3000,
      staffCost: 1,
      powerCost: 0
    }
  },
  upgrades: {
    user: {
      //Auto CLicker
      manager: 0,
      energyAssistant: 0,
      chiefResearcher: 0
    },
    //Staff
    colonist5Perc: 0,
    colonist25Perc: 0,
    engineer5Perc: 0,
    engineer25Perc: 0,
    inventor5Perc: 0,
    inventor25Perc: 0,
    scientist5Perc: 0,
    scientist25Perc: 0,
    android5Perc: 0,
    android25Perc: 0,
    robot5Perc: 0,
    robot25Perc: 0,
    //Tech
    workbench5Perc: 0,
    workbench25Perc: 0,
    workshop5Perc: 0,
    workshop25Perc: 0,
    researchLab5Perc: 0,
    researchLab25Perc: 0,
    researchFacility5Perc: 0,
    researchFacility25Perc: 0,
    roboticsFactory5Perc: 0,
    roboticsFactory25Perc: 0,
    cyberneticsLab5Perc: 0,
    cyberneticsLab25Perc: 0,
    //Energy
    batteryPack5Perc: 0,
    batteryPack25Perc: 0,
    solarPanel5Perc: 0,
    solarPanel25Perc: 0,
    solarPanelFarm5Perc: 0,
    solarPanelFarm25Perc: 0,
    thermalPowerStation5Perc: 0,
    thermalPowerStation25Perc: 0,
    nuclearPowerPlant5Perc: 0,
    nuclearPowerPlant25Perc: 0,
    fusionReactor5Perc: 0,
    fusionReactor25Perc: 0,
    uraniumReactor5Perc: 0,
    uraniumReactor25Perc: 0,
    //Uranium
    miner5Perc: 0,
    miner25Perc: 0,
    uraniumSmelter5Perc: 0,
    uraniumSmelter25Perc: 0,
    uraniumRefinery5Perc: 0,
    uraniumRefinery25Perc: 0
  },
  achievements: {
    points: 0,
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    sixth: 0,
    seventh: 0,
    eighth: 0,
    nineth: 0,
    tenth: 0,
    eleventh: 0,
    twelfth: 0,
    thirteenth: 0,
    fourteenth: 0,
    fifteenth: 0,
    sixteenth: 0,
    seventeenth: 0,
    eighteenth: 0,
    nineteenth: 0,
    twentieth: 0,
    twenty_first: 0,
    twenty_second: 0,
    twenty_third: 0,
    twenty_fourth: 0,
    twenty_fifth: 0,
    twenty_sixth: 0,
    twenty_seventh: 0,
    twenty_eighth: 0,
    twenty_nineth: 0,
    thirtieth: 0,
    thirty_first: 0,
    thirty_second: 0,
    thirty_third: 0,
    thirty_fourth: 0,
    thirty_fifth: 0,
    thirty_sixth: 0,
    thirty_seventh: 0,
    thirty_eighth: 0,
    thirty_nineth: 0,
    fortieth: 0,
    forty_first: 0,
    forty_second: 0,
    forty_third: 0,
    forty_fourth: 0,
    forty_fifth: 0,
    forty_sixth: 0,
    forty_seventh: 0,
    forty_eighth: 0,
    forty_nineth: 0,
    fiftieth: 0,
    fifty_first: 0,
    fifty_second: 0,
    fifty_third: 0,
    fifty_fourth: 0,
    fifty_fifth: 0,
    fifty_sixth: 0,
    fifty_seventh: 0,
    fifty_eighth: 0,
    fifty_nineth: 0,
    sixtieth: 0,
    sixty_first: 0,
    sixty_second: 0,
    sixty_third: 0,
    sixty_fourth: 0,
    sixty_fifth: 0,
    sixty_sixth: 0,
    sixty_seventh: 0,
    sixty_eighth: 0,
    sixty_nineth: 0,
    seventieth: 0,
    eightieth: 0,
    ninetieth: 0,
    one_hundredth: 0
  }
};
var commanderNamee;
var colonyNamee;
function createCharacter(){
//Ask player for commander and colony names
if (player.commander.commanderName === "temp") {
  var commanderNamee = prompt("What is your name, commander ?");
  player.commander.commanderName = commanderNamee;
  document.getElementById('commander-name').innerHTML = "Commander:" + " " + commanderNamee;
} else{
  document.getElementById('commander-name').innerHTML = "Commander:" + " " + player.commander.commanderName;
}
if (player.commander.colonyName === "temp") {
  var colonyNamee = prompt("What is the name of your colony ?");
  player.commander.colonyName = colonyNamee;
  document.getElementById('colony-name').innerHTML = "Colony:" + " " + colonyNamee;
} else{
  document.getElementById('colony-name').innerHTML = "Colony:" + " " + player.commander.colonyName;
}
}

function renameCharacter(){
//Ask player for commander and colony names
  var commanderNamee = prompt("What is your name, commander ?");
  player.commander.commanderName = commanderNamee;
  document.getElementById('commander-name').innerHTML = "Commander:" + " " + commanderNamee;
  var colonyNamee = prompt("What is the name of your colony ?");
  player.commander.colonyName = colonyNamee;
  document.getElementById('colony-name').innerHTML = "Colony:" + " " + colonyNamee;
  document.getElementById('colony-name').innerHTML = "Colony:" + " " + player.commander.colonyName;
}

function hideNotify(){
  document.getElementById('top-notify').style.display ="none";
  localStorage.setItem('asavepopup', 'false'); //store state in localStorage
}
function checkHidden() {
    var show = localStorage.getItem('asavepopup');
    if(show === 'false'){
         document.getElementById('top-notify').style.display = "none";
    }
}
var progBar = document.getElementsByClassName("progress-bar");
nums = ['k', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'UnD', 'DuD', 'TrD', 'QaD', 'QiD', 'SeD', 'SpD', 'OcD', 'NoD'];
// ================ HTML LOCAL STORAGE SAVE =====================//
//game save
function gameSave() {
  localStorage.setItem("player", JSON.stringify(player));
  $(document).ready(function(){
    $('#Game-Save').delay().fadeIn('slow').delay(2000).fadeOut('slow');
});
}
function gameSaveString(){
  var string = localStorage.setItem("player", JSON.stringify(player)); //assign sava data to variable
  var compressed = window.btoa(JSON.stringify(player)); //encode save data
  document.getElementById('impo-expo').innerHTML = compressed; //send endcoded save data into text area
  console.log("Saving finished");
}
function gameLoadString(){
		var compressed = document.getElementById('impo-expo').value; // retrieve compressed string
		var decompressed = window.atob(compressed); //  decode compressed string
    player = JSON.parse(decompressed); // parse decoded values into player object
		console.log("Loading finished");
}
function gameLoad() {
  var savegame = JSON.parse(localStorage.getItem("player"));
  //clicks
  if (typeof savegame.clicks !== "undefined") player.clicks = savegame.clicks;
  //FPS
  if (typeof savegame.speed !== "undefined") player.speed = savegame.speed;
  //Resources
  if (typeof savegame.credits !== "undefined") player.credits = savegame.credits;
  if (typeof savegame.tech !== "undefined") player.tech = savegame.tech;
  if (typeof savegame.energy !== "undefined") player.energy = savegame.energy;
  if (typeof savegame.uranium !== "undefined") player.uranium = savegame.uranium;
  //Commander
  if (typeof savegame.commander !== "undefined") player.commander = savegame.commander;
  //Units Staff
  if (typeof savegame.colonist !== "undefined") player.colonist = savegame.colonist;
  if (typeof savegame.engineer !== "undefined") player.engineer = savegame.engineer;
  if (typeof savegame.inventor !== "undefined") player.inventor = savegame.inventor;
  if (typeof savegame.scientist !== "undefined") player.scientist = savegame.scientist;
  if (typeof savegame.robot !== "undefined") player.robot = savegame.robot;
  if (typeof savegame.android !== "undefined") player.android = savegame.android;

  //Units Tech
  if (typeof savegame.workbench !== "undefined") player.workbench = savegame.workbench;
  if (typeof savegame.workshop !== "undefined") player.workshop = savegame.workshop;
  if (typeof savegame.resLab !== "undefined") player.resLab = savegame.resLab;
  if (typeof savegame.resFac !== "undefined") player.resFac = savegame.resFac;
  if (typeof savegame.roboticsFact !== "undefined") player.roboticsFact = savegame.roboticsFact;
  if (typeof savegame.cyberLab !== "undefined") player.cyberLab = savegame.cyberLab;
  //Units Energy
  if (typeof savegame.battPack !== "undefined") player.battPack = savegame.battPack;
  if (typeof savegame.solPan !== "undefined") player.solPan = savegame.solPan;
  if (typeof savegame.solPanFarm !== "undefined") player.solPanFarm = savegame.solPanFarm;
  if (typeof savegame.termPowStation !== "undefined") player.termPowStation = savegame.termPowStation;
  if (typeof savegame.nucPowPlant !== "undefined") player.nucPowPlant = savegame.nucPowPlant;
  if (typeof savegame.fusReactor !== "undefined") player.fusReactor = savegame.fusReactor;
  if (typeof savegame.uraReactor !== "undefined") player.uraReactor = savegame.uraReactor;
  //Units Uranium
  if (typeof savegame.miner !== "undefined") player.miner = savegame.miner;
  if (typeof savegame.uraSmelter !== "undefined") player.uraSmelter = savegame.uraSmelter;
  if (typeof savegame.uraRefinery !== "undefined") player.uraRefinery = savegame.uraRefinery;
  //Achievements
  if (typeof savegame.achievements !== "undefined") player.achievements = savegame.achievements;
  //Upgrades
  if (typeof savegame.upgrades !== "undefined") player.upgrades = savegame.upgrades;
}

//delete save
function deleteSave() {
  localStorage.removeItem('player');
  localStorage.removeItem('asavepopup');
}
//Buy Five
function buyBuilding(building, resource, amountToPurchase, id) { //Send two values, building and amountToPurchase.
  var exponentialIncrease = 1.15; //Used to change the value for rebalancing later.
  var nextCost = 0;
  nextCost = Math.floor((building.requires.cost * Math.pow(exponentialIncrease, building.owned)) * ((Math.pow(exponentialIncrease, amountToPurchase) - 1) / (exponentialIncrease - 1)));
  //now determines cost of any number of buildings
  if (nextCost <= player[resource]) { //checks if player can afford the purchase
    building.owned += amountToPurchase; //increments the amount of buildings by amount to purchase
    player[resource] -= nextCost; // removes the resource used to purchase the building
    document.getElementById(id).innerHTML = suffixy(player[resource], 2); // updates the amount of resource on the screen.
    building.requires.nextC = ((Math.floor(building.requires.cost * Math.pow(1.15, building.owned)))); //displays cost of next purchase
    //console.log(nextCost);
  } else {
    console.log("Not enough resources");
  }
}
//Buy All
function buyAll(building, resource, id) {
  var exponentialIncrease = 1.15;
  var nextCost = 0;
  var toBuy = (log10(((player[resource] / (building.requires.cost * Math.pow(exponentialIncrease, building.owned))) * (exponentialIncrease - 1)) + 1) / log10(exponentialIncrease));
  buyBuilding(building, resource, Math.floor(toBuy), id, worker);
}
function log10(val) {
  return Math.log(val) / Math.LN10;
}

function buyUpgrade(techcost, energycost, up, amount) {
  if (techcost <= player.tech && energycost <= player.energy && player.upgrades[up] === 0) {
    player.tech -= techcost;
    player.energy -= energycost;
    player.upgrades[up] = amount;
    console.log("Done, upgrade purchased");
    document.getElementById(up).className = "btn btn-success";
  }
}

function backgroundChange() {
  if (document.getElementById('buttontestt').className == "buttontest") {
    document.getElementById('buttontestt').className = "upgrade-unlocked";
  } else {
    document.getElementById('buttontestt').className = "buttontest";
  }
  console.log("it worked");
}

function getResource(player, resource, amount) {
  player[resource] += amount / player.speed;
}

function prettify(input) {
  var output = Math.round(input * 1000000) / 1000000;
  return output;
}

function suffixy(num, dec) {
  dec = dec || 0; //how many decimal places do we want?
  var suffixes = ['', 'k', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'UnD', 'DuD', 'TrD', 'QaD', 'QiD', 'SeD', 'SpD', 'OcD'];
  var ord = floor(Math.log(Math.abs(num)) / Math.log(10) / 3); //the abs to make sure our number is always positive when being put through a log operation. divide by 3 at the end because our suffixes goes up by orders of 3
  var suffix = suffixes[ord];
  var rounded = Math.round(num / (Math.pow(10, ord * 3 - dec))) / Math.pow(10, dec);
  return rounded + " " + suffix;
}

function floor(num) {
  //special floor needed to deal with floating point calculations
  if (num - Math.floor(num) >= 0.9999999999999991) {
    return Math.ceil(num);
  } else {
    return Math.floor(num);
  }
}
function hideElements(){
  if (player.tech >= 50){
    document.getElementById('andro').style.display = 'block';
    document.getElementById('andro2').style.display = 'block';
  }
  if (player.tech >= 250){
    document.getElementById('robo').style.display = 'block';
    document.getElementById('robo2').style.display = 'block';
  }
  if (player.tech >= 500){
    document.getElementById('resLabo').style.display = 'block';
    document.getElementById('resLabo2').style.display = 'block';
  }
  if (player.tech >= 1000){
    document.getElementById('resFact').style.display = 'block';
    document.getElementById('resFact2').style.display = 'block';
  }
  if (player.tech >= 2000){
    document.getElementById('robFact').style.display = 'block';
    document.getElementById('robFact2').style.display = 'block';
  }
  if (player.tech >= 3000){
    document.getElementById('cyberLabo').style.display = 'block';
    document.getElementById('cyberLabo2').style.display = 'block';
  }
//energy
if (player.energy >= 250){
  document.getElementById('pwrgen').style.display = 'block';
  document.getElementById('pwrgen2').style.display = 'block';
}
if (player.energy >= 500){
  document.getElementById('generoom').style.display = 'block';
  document.getElementById('generoom2').style.display = 'block';
}
if (player.energy >= 1000){
  document.getElementById('solarpan').style.display = 'block';
  document.getElementById('solarpan2').style.display = 'block';
}
if (player.energy >= 2000){
  document.getElementById('solarfarm').style.display = 'block';
  document.getElementById('solarfarm2').style.display = 'block';
}
}
function updateTotals() {
  var energyOutcome = prettify(((player.workbench.owned * player.workbench.requires.powerCost) + (player.workshop.owned * player.workshop.requires.powerCost) +
                      (player.resLab.owned * player.resLab.requires.powerCost) + (player.resFac.owned * player.resFac.requires.powerCost) +
                      (player.roboticsFact.owned * player.roboticsFact.requires.powerCost) + (player.cyberLab.owned * player.cyberLab.requires.powerCost)));
  var energyIncome =  prettify(((player.battPack.owned * player.battPack.generates) + (player.solPan.owned * player.solPan.generates) +
                      (player.solPanFarm.owned * player.solPanFarm.generates) + (player.termPowStation.owned * player.termPowStation.generates) +
                      (player.nucPowPlant.owned * player.nucPowPlant.generates) + (player.fusReactor.owned * player.fusReactor.generates) +
                      (player.uraReactor.owned * player.uraReactor.generates)));
  //Credits
  player.credits += ((player.colonist.owned * player.colonist.generates) / player.speed);
  player.credits += ((player.engineer.owned * player.engineer.generates) / player.speed);
  player.credits += ((player.inventor.owned * player.inventor.generates) / player.speed);
  player.credits += ((player.scientist.owned * player.scientist.generates) / player.speed);
  player.credits += ((player.robot.owned * player.robot.generates) / player.speed);
  player.credits += ((player.android.owned * player.android.generates) / player.speed);
  getResource(player, 'credits' , 1);

  if (energyOutcome < energyIncome || energyOutcome == energyIncome ){
  //Tech
    player.tech += ((player.workbench.owned * player.workbench.generates) / player.speed);
    player.tech += ((player.workshop.owned * player.workshop.generates) / player.speed);
    player.tech += ((player.resLab.owned * player.resLab.generates) / player.speed);
    player.tech += ((player.resFac.owned * player.resFac.generates) / player.speed);
    player.tech += ((player.roboticsFact.owned * player.roboticsFact.generates) / player.speed);
    player.tech += ((player.cyberLab.owned * player.cyberLab.generates) / player.speed);
    //Uranium
    player.uranium += ((player.miner.owned * player.miner.generates) / player.speed);
    player.uranium += ((player.uraSmelter.owned * player.uraSmelter.generates) / player.speed);
    player.uranium += ((player.uraRefinery.owned * player.uraRefinery.generates) / player.speed);
    //Energy remove
    player.energy -= ((player.workbench.owned * player.workbench.requires.powerCost) / player.speed);
    player.energy -= ((player.workshop.owned * player.workshop.requires.powerCost) / player.speed);
    player.energy -= ((player.resLab.owned * player.resLab.requires.powerCost) / player.speed);
    player.energy -= ((player.resFac.owned * player.resFac.requires.powerCost) / player.speed);
    player.energy -= ((player.roboticsFact.owned * player.roboticsFact.requires.powerCost) / player.speed);
    player.energy -= ((player.cyberLab.owned * player.cyberLab.requires.powerCost) / player.speed);
    getResource(player, 'tech' , 1);
    getResource(player, 'uranium', 1);
  }
  //Energy add
  player.energy += ((player.battPack.owned * player.battPack.generates) / player.speed);
  player.energy += ((player.solPan.owned * player.solPan.generates) / player.speed);
  player.energy += ((player.solPanFarm.owned * player.solPanFarm.generates) / player.speed);
  player.energy += ((player.termPowStation.owned * player.termPowStation.generates) / player.speed);
  player.energy += ((player.nucPowPlant.owned * player.nucPowPlant.generates) / player.speed);
  player.energy += ((player.fusReactor.owned * player.fusReactor.generates) / player.speed);
  player.energy += ((player.uraReactor.owned * player.uraReactor.generates) / player.speed);
  getResource(player, 'energy', 1);

  if (player.credits <= 1000){
    document.getElementById('Credits').innerHTML = prettify(player.credits, 1);
  } else {
    document.getElementById('Credits').innerHTML = suffixy(player.credits, 2);
  }
  if (player.tech <= 1000){
    document.getElementById('Tech').innerHTML = prettify(player.tech, 1);
  } else {
    document.getElementById('Tech').innerHTML = suffixy(player.tech, 2);
  }
  if (player.energy <= 1000){
    document.getElementById('Energy').innerHTML = prettify(player.energy, 1);
  } else {
    document.getElementById('Energy').innerHTML = suffixy(player.energy, 2);
  }
  if (player.uranium <= 1000){
    document.getElementById('Uranium').innerHTML = prettify(player.uranium, 1);
  } else {
    document.getElementById('Uranium').innerHTML = suffixy(player.uranium, 2);
  }

  if(energyOutcome > energyIncome) {
    document.getElementById('power-balance').innerHTML = "-" + prettify(energyOutcome - energyIncome) + "/sec";
} else if (energyOutcome == energyIncome){
    document.getElementById('power-balance').innerHTML = "balanced";
} else {
    document.getElementById('power-balance').innerHTML = "+" + prettify(energyIncome - energyOutcome) + "/sec";
}
    // Staff
  document.getElementById('colonist').innerHTML = player.colonist.owned;
  document.getElementById('engineer').innerHTML = player.engineer.owned;
  document.getElementById('inventor').innerHTML = player.inventor.owned;
  document.getElementById('scientist').innerHTML = player.scientist.owned;
  document.getElementById('robot').innerHTML = player.robot.owned;
  document.getElementById('android').innerHTML = player.android.owned;
    // Tech
  document.getElementById('workbench').innerHTML = player.workbench.owned;
  document.getElementById('workshop').innerHTML = player.workshop.owned;
  document.getElementById('research-lab').innerHTML = player.resLab.owned;
  document.getElementById('research-facility').innerHTML = player.resFac.owned;
  document.getElementById('robotics-factory').innerHTML = player.roboticsFact.owned;
  document.getElementById('cybernetics-lab').innerHTML = player.cyberLab.owned;
    // Energy
  document.getElementById('battery-pack').innerHTML = player.battPack.owned;
  document.getElementById('solar-panel').innerHTML = player.solPan.owned;
  document.getElementById('solar-panel-farm').innerHTML = player.solPanFarm.owned;
  document.getElementById('thermal-power-station').innerHTML = player.termPowStation.owned;
  document.getElementById('nuclear-power-plant').innerHTML = player.nucPowPlant.owned;
  document.getElementById('fusion-reactor').innerHTML = player.fusReactor.owned;
  document.getElementById('uranium-reactor').innerHTML = player.uraReactor.owned;
    // Uranium
  document.getElementById('miner').innerHTML = player.miner.owned;
  document.getElementById('uranium-smelter').innerHTML = player.uraSmelter.owned;
  document.getElementById('uranium-refinery').innerHTML = player.uraRefinery.owned;
  //Generating
  //Credits
  document.getElementsByClassName('Generating')[0].innerHTML = prettify((player.colonist.owned * player.colonist.generates));
  document.getElementsByClassName('Generating')[1].innerHTML = prettify((player.engineer.owned * player.engineer.generates));
  document.getElementsByClassName('Generating')[2].innerHTML = prettify((player.inventor.owned * player.inventor.generates));
  document.getElementsByClassName('Generating')[3].innerHTML = prettify((player.scientist.owned * player.scientist.generates));
  document.getElementsByClassName('Generating')[4].innerHTML = prettify((player.robot.owned * player.robot.generates));
  document.getElementsByClassName('Generating')[5].innerHTML = prettify((player.android.owned * player.android.generates));
  //Tech
  document.getElementsByClassName('Generating')[6].innerHTML = prettify((player.workbench.owned * player.workbench.generates));
  document.getElementsByClassName('Generating')[7].innerHTML = prettify((player.workshop.owned * player.workshop.generates));
  document.getElementsByClassName('Generating')[8].innerHTML = prettify((player.resLab.owned * player.resLab.generates));
  document.getElementsByClassName('Generating')[9].innerHTML = prettify((player.resFac.owned * player.resFac.generates));
  document.getElementsByClassName('Generating')[10].innerHTML = prettify((player.roboticsFact.owned * player.roboticsFact.generates));
  document.getElementsByClassName('Generating')[11].innerHTML = prettify((player.cyberLab.owned * player.cyberLab.generates));
  //Energy
  document.getElementsByClassName('Generating')[12].innerHTML = prettify((player.battPack.owned * player.battPack.generates));
  document.getElementsByClassName('Generating')[13].innerHTML = prettify((player.solPan.owned * player.solPan.generates));
  document.getElementsByClassName('Generating')[14].innerHTML = prettify((player.solPanFarm.owned * player.solPanFarm.generates));
  document.getElementsByClassName('Generating')[15].innerHTML = prettify((player.termPowStation.owned * player.termPowStation.generates));
  document.getElementsByClassName('Generating')[16].innerHTML = prettify((player.nucPowPlant.owned * player.nucPowPlant.generates));
  document.getElementsByClassName('Generating')[17].innerHTML = prettify((player.fusReactor.owned * player.fusReactor.generates));
  document.getElementsByClassName('Generating')[18].innerHTML = prettify((player.uraReactor.owned * player.uraReactor.generates));
  //Uranium
  document.getElementsByClassName('Generating')[19].innerHTML = prettify((player.uraSmelter.owned * player.uraSmelter.generates));
  document.getElementsByClassName('Generating')[20].innerHTML = prettify((player.uraRefinery.owned * player.uraRefinery.generates));
  document.getElementsByClassName('Generating')[21].innerHTML = prettify((player.miner.owned * player.miner.generates));
  //Cost --------------------------------------------------------------------------------------------
  //Credits
  document.getElementsByClassName('Cost')[0].innerHTML = suffixy(player.colonist.requires.nextC, 2);
  document.getElementsByClassName('Cost')[1].innerHTML = suffixy(player.engineer.requires.nextC, 2);
  document.getElementsByClassName('Cost')[2].innerHTML = suffixy(player.inventor.requires.nextC, 2);
  document.getElementsByClassName('Cost')[3].innerHTML = suffixy(player.scientist.requires.nextC, 2);
  document.getElementsByClassName('Cost')[4].innerHTML = suffixy(player.robot.requires.nextC, 2);
  document.getElementsByClassName('Cost')[5].innerHTML = suffixy(player.android.requires.nextC, 2);
  //Tech
  document.getElementsByClassName('Cost')[6].innerHTML = suffixy(player.workbench.requires.nextC, 2);
  document.getElementsByClassName('Cost')[7].innerHTML = suffixy(player.workshop.requires.nextC, 2);
  document.getElementsByClassName('Cost')[8].innerHTML = suffixy(player.resLab.requires.nextC, 2);
  document.getElementsByClassName('Cost')[9].innerHTML = suffixy(player.resFac.requires.nextC, 2);
  document.getElementsByClassName('Cost')[10].innerHTML = suffixy(player.roboticsFact.requires.nextC, 2);
  document.getElementsByClassName('Cost')[11].innerHTML = suffixy(player.cyberLab.requires.nextC, 2);
  document.getElementsByClassName('Cost')[12].innerHTML = suffixy(player.battPack.requires.nextC, 2);
  //Energy
  document.getElementsByClassName('Cost')[13].innerHTML = suffixy(player.solPan.requires.nextC, 2);
  document.getElementsByClassName('Cost')[14].innerHTML = suffixy(player.solPanFarm.requires.nextC, 2);
  document.getElementsByClassName('Cost')[15].innerHTML = suffixy(player.termPowStation.requires.nextC, 2);
  document.getElementsByClassName('Cost')[16].innerHTML = suffixy(player.nucPowPlant.requires.nextC, 2);
  document.getElementsByClassName('Cost')[17].innerHTML = suffixy(player.fusReactor.requires.nextC, 2);
  document.getElementsByClassName('Cost')[18].innerHTML = suffixy(player.uraReactor.requires.nextC, 2);
  //Uranium
  document.getElementsByClassName('Cost')[19].innerHTML = suffixy(player.miner.requires.nextC, 2);
  document.getElementsByClassName('Cost')[20].innerHTML = suffixy(player.uraSmelter.requires.nextC, 2);
  document.getElementsByClassName('Cost')[21].innerHTML = suffixy(player.uraRefinery.requires.nextC, 2);
}

function checkUpgrades() {
  //Engineer Upgrades
  if (player.upgrades.engi5Perc !== 0) {
    document.getElementById('engi5Perc').className = "btn btn-success";
  }
  if (player.upgrades.engi25Perc !== 0) {
    document.getElementById('engi25Perc').className = "btn btn-success";
  }
  //Android Upgrades
  if (player.upgrades.andro5Perc !== 0) {
    document.getElementById('andro5Perc').className = "btn btn-success";
  }
  if (player.upgrades.andro25Perc !== 0) {
    document.getElementById('andro25Perc').className = "btn btn-success";
  }
  //Robot Upgrades
  if (player.upgrades.robot5Perc !== 0) {
    document.getElementById('robot5Perc').className = "btn btn-success";
  }
  if (player.upgrades.robot25Perc !== 0) {
    document.getElementById('robot25Perc').className = "btn btn-success";
  }
  //Research Lab Upgrades
  if (player.upgrades.resLab5Perc !== 0) {
    document.getElementById('resLab5Perc').className = "btn btn-success";
  }
  if (player.upgrades.resLab25Perc !== 0) {
    document.getElementById('resLab25Perc').className = "btn btn-success";
  }
  //Research Facility Upgrades
  if (player.upgrades.resFact5Perc !== 0) {
    document.getElementById('resFact5Perc').className = "btn btn-success";
  }
  if (player.upgrades.resFact25Perc !== 0) {
    document.getElementById('resFact25Perc').className = "btn btn-success";
  }
  //Robotics Factory Upgrades
  if (player.upgrades.roboFact5Perc !== 0) {
    document.getElementById('roboFact5Perc').className = "btn btn-success";
  }
  if (player.upgrades.roboFact25Perc !== 0) {
    document.getElementById('roboFact25Perc').className = "btn btn-success";
  }
  //Cybernetics Lab Upgrades
  if (player.upgrades.cybLab5Perc !== 0) {
    document.getElementById('cybLab5Perc').className = "btn btn-success";
  }
  if (player.upgrades.cybLab25Perc !== 0) {
    document.getElementById('cybLab25Perc').className = "btn btn-success";
  }
  //Battery Pack Upgrades
  if (player.upgrades.battPck5Perc !== 0) {
    document.getElementById('battPck5Perc').className = "btn btn-success";
  }
  if (player.upgrades.battPck25Perc !== 0) {
    document.getElementById('battPck25Perc').className = "btn btn-success";
  }
  /*Power Generators Upgrades
  if (player.upgrades.pwrGen5Perc !== 0) {
    document.getElementById('pwrGen5Perc').className = "btn btn-success";
  }
  if (player.upgrades.pwrGen25Perc !== 0) {
    document.getElementById('pwrGen25Perc').className = "btn btn-success";
  }
  //Generator Room Upgrades
  if (player.upgrades.genRoom5Perc !== 0) {
    document.getElementById('genRoom5Perc').className = "btn btn-success";
  }
  if (player.upgrades.genRoom25Perc !== 0) {
    document.getElementById('genRoom25Perc').className = "btn btn-success";
  }*/
  //Solar Panel Upgrades
  if (player.upgrades.solPan5Perc !== 0) {
    document.getElementById('solPan5Perc').className = "btn btn-success";
  }
  if (player.upgrades.solPan25Perc !== 0) {
    document.getElementById('solPan25Perc').className = "btn btn-success";
  }
  //Solar Panel Farm Upgrades
  if (player.upgrades.solPanFarm5Perc !== 0) {
    document.getElementById('solPanFarm5Perc').className = "btn btn-success";
  }
  if (player.upgrades.solPanFarm25Perc !== 0) {
    document.getElementById('solPanFarm25Perc').className = "btn btn-success";
  }
}
window.setInterval(function() {
  gameSave();
  //save_game(); //cookies
}, 60000);

window.setInterval(function() {
  updateTotals();
}, 1000 / player.speed);

window.setInterval(function() {
checkAchievements ();
//hideElements();
//checkUpgrades();
//createCharacter();
}, 3000);



// ================ COOKIE SAVE =====================//
/*function set_cookie(cookie_name,value) {
    expiry = new Date();
    expiry.setTime(new Date().getTime() + (10*60*1000));
    var c_value=escape(btoa(JSON.stringify(value))) +
    "; expires="+expiry.toUTCString();
    document.cookie=cookie_name + "=" + c_value;
}

function get_cookie(cookie_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + cookie_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(cookie_name + "=");
    }
    if (c_start == -1) return false;
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end == -1) {
        c_end = c_value.length;
    }
    c_value = atob(unescape(c_value.substring(c_start,c_end)));
    return JSON.parse(c_value);
}

function save_game() {
    set_cookie('clickclick_save', player);
}
function load_game() {
    var save_data = getCookie('clickclick_save');
       if (!save_data) return;
    player = save_data;
}*/
