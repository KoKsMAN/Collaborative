//initialize player data
var player = {
  tech: 0,
  energy: 0,
  achievements: {
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
     twenty-first: 0,
     twenty-second: 0,
     twenty-third: 0,
     twenty-fourth: 0,
     twenty-fifth: 0,
     twenty-sixth: 0,
     twenty-seventh: 0,
     twenty-eighth: 0,
     twenty-nineth: 0,
     thirtieth: 0,
     thirty-first: 0,
     thirty-second: 0,
     thirty-third: 0,
     thirty-fourth: 0,
     thirty-fifth: 0,
     thirty-sixth: 0,
     thirty-seventh: 0,
     thirty-eighth: 0,
     thirty-nineth: 0,
     fortieth
     forty-first: 0,
     forty-second: 0,
     forty-third: 0,
     forty-fourth: 0,
     forty-fifth: 0,
     forty-sixth: 0,
     forty-seventh: 0,
     forty-eighth: 0,
     forty-nineth: 0,
     fiftieth
     fifty-first: 0,
     fifty-second: 0,
     fifty-third: 0,
     fifty-fourth: 0,
     fifty-fifth: 0,
     fifty-sixth: 0,
     fifty-seventh: 0,
     fifty-eighth: 0,
     fifty-nineth: 0,
     sixtieth
     sixty-first: 0,
     sixty-second: 0,
     sixty-third: 0,
     sixty-fourth: 0,
     sixty-fifth: 0,
     sixty-sixth: 0,
     sixty-seventh: 0,
     sixty-eighth: 0,
     sixty-nineth: 0,
     seventieth
     eightieth
     ninetieth
     one hundredth

  }
};

//initialize tech building data
var engineer = {
  name: "Engineer",
  owned: 0,
  cost: 15,
  nextC: 15,
  generates: 1
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
  owned: 0,
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
var nextCost;
//Tech Buy
function techBuy(amount, building, id, arrayPlace){
  building.nextC = (amount * Math.floor(building.cost * Math.pow(1.15,building.owned)));
  if (building.nextC <= player.tech){
    building.owned += amount;
    player.tech -= building.nextC;
    document.getElementById('Tech').innerHTML = player.tech;

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

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

//achievements



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
function checkAchievements (){
  //Engineer Achievements
    //1.
    if (engineer.owned === 1 && player.achievements.first !== 1 ){
    player.achievements.first = 1;
    alert("Way to get started !");

  }
  if (player.achievements.first !== 0){
    document.getElementById("first").className = "unlocked";
  }
    //2
    function checkAchievements (){
    if (engineer.owned === 500 && player.achievements.second !== 1 ){
     player.achievements.second = 1;
     console.log("");
    }
    if (player.achievements.second !== 0){
      document.getElementById("second").className = "unlocked";
    }
    //3
    function checkAchievements (){
    if (engineer.owned === 1000 && player.achievements.third !== 1 ){
      player.achievements.third = 1;
      console.log("");
    }
    if (player.achievements.third !== 0){
      document.getElementById("third").className = "unlocked";
    }
    //4
    function checkAchievements (){
    if (engineer.owned === 5000 && player.achievements.fourth !== 1 ){
      player.achievements.fourth = 1;
      console.log("");
    }
    if (player.achievements.fourth !== 0){
      document.getElementById("fourth").className = "unlocked";
    }
    //5
    function checkAchievements (){
    if (engineer.owned === 10000 && player.achievements.fifth !== 1 ){
      player.achievements.fifth = 1;
    console.log("");
    }
    if (player.achievements.fifth !== 0){
      document.getElementById("fifth").className = "unlocked";
    }
    //Androids Achievements
    //6
    function checkAchievements (){
    if (android.owned === 5 && player.achievements.sixth !== 1 ){
      player.achievements.sixth = 1;
      console.log("");
    }
    if (player.achievements.sixth !== 0){
      document.getElementById("sixth").className = "unlocked";
    }
    //7
    function checkAchievements (){
    if (android.owned === 400 && player.achievements.seventh !== 1 ){
      player.achievements.seventh = 1;
      console.log("");
    }
    if (player.achievements.seventh !== 0){
      document.getElementById("seventh").className = "unlocked";
    }
    //8
    function checkAchievements (){
    if (android.owned === 900 && player.achievements.eighth !== 1 ){
      player.achievements.eighth = 1;
      console.log("");
    }
    if (player.achievements.eighth !== 0){
      document.getElementById("eighth").className = "unlocked";
    }
    //9
    function checkAchievements (){
    if (android.owned === 4000 && player.achievements.nineth !== 1 ){
      player.achievements.nineth = 1;
      console.log("");
    }
    if (player.achievements.nineth !== 0){
      document.getElementById("nineth").className = "unlocked";
    }
    //10
    function checkAchievements (){
    if (android.owned === 9000 && player.achievements.tenth !== 1 ){
      player.achievements.tenth = 1;
    console.log("");
    }
    if (player.achievements.tenth !== 0){
      document.getElementById("tenth").className = "unlocked";
    }
    //Robots Achievements
    //11
    function checkAchievements (){
    if (android.owned === 10 && player.achievements.eleventh !== 1 ){
      player.achievements.eleventh = 1;
      console.log("");
    }
    if (player.achievements.eleventh !== 0){
      document.getElementById("eleventh").className = "unlocked";
    }
    //12
    function checkAchievements (){
    if (robot.owned === 450 && player.achievements.twelfth !== 1 ){
      player.achievements.twelfth = 1;
      console.log("");
    }
    if (player.achievements.twelfth !== 0){
      document.getElementById("twelfth").className = "unlocked";
    }
    //13
    function checkAchievements (){
    if (robot.owned === 950 && player.achievements.thirteenth !== 1 ){
      player.achievements.thirteenth = 1;
      console.log("");
    }
    if (player.achievements.thirteenth !== 0){
      document.getElementById("thirteenth").className = "unlocked";
    }
    //14
    function checkAchievements (){
    if (robot.owned === 4500 && player.achievements.fourteenth !== 1 ){
      player.achievements.fourteenth = 1;
      console.log("");
    }
    if (player.achievements.fourteenth !== 0){
      document.getElementById("fourteenth").className = "unlocked";
    }
    //15
    function checkAchievements (){
    if (robot.owned === 9500 && player.achievements.fifteenth !== 1 ){
      player.achievements.fifteenth = 1;
    console.log("");
    }
    if (player.achievements.fifteenth !== 0){
      document.getElementById("fifteenth").className = "unlocked";
    }
    //Research Lab Achievements
    //16
    function checkAchievements (){
    if (resLab.owned === 50 && player.achievements.sixteenth !== 1 ){
      player.achievements.sixteenth = 1;
      console.log("");
    }
    if (player.achievements.sixteenth !== 0){
      document.getElementById("sixteenth").className = "unlocked";
    }
    //17
    function checkAchievements (){
    if (resLab.owned === 700 && player.achievements.seventeenth !== 1 ){
      player.achievements.seventeenth = 1;
      console.log("");
    }
    if (player.achievements.seventeenth !== 0){
      document.getElementById("seventeenth").className = "unlocked";
    }
    //18
    function checkAchievements (){
    if (resLab.owned === 1300 && player.achievements.eighteenth !== 1 ){
      player.achievements.eighteenth = 1;
      console.log("");
    }
    if (player.achievements.eighteenth !== 0){
      document.getElementById("eighteenth").className = "unlocked";
    }
    //19
    function checkAchievements (){
    if (resLab.owned === 6000 && player.achievements.nineteenth !== 1 ){
      player.achievements.nineteenth = 1;
      console.log("");
    }
    if (player.achievements.nineteenth !== 0){
      document.getElementById("nineteenth").className = "unlocked";
    }
    //20
    function checkAchievements (){
    if (resLab.owned === 10000 && player.achievements.twentieth !== 1 ){
      player.achievements.twentieth = 1;
    console.log("");
    }
    //Research Facility Achievements
    //21
    function checkAchievements (){
    if (resFac.owned === 40 && player.achievements.twenty-first !== 1 ){
      player.achievements.twenty-first = 1;
      console.log("");
    }
    if (player.achievements.twenty-first !== 0){
      document.getElementById("twenty-first").className = "unlocked";
    }
    //22
    function checkAchievements (){
    if (resFac.owned === 600 && player.achievements.twenty-second !== 1 ){
      player.achievements.twenty-second = 1;
      console.log("");
    }
    if (player.achievements.twenty-second !== 0){
      document.getElementById("twenty-second").className = "unlocked";
    }
    //23
    function checkAchievements (){
    if (resFac.owned === 1000 && player.achievements.twenty-third !== 1 ){
      player.achievements.twenty-third = 1;
      console.log("");
    }
    if (player.achievements.twenty-third !== 0){
      document.getElementById("twenty-third").className = "unlocked";
    }
    //24
    function checkAchievements (){
    if (resFac.owned === 5000 && player.achievements.twenty-fourth !== 1 ){
      player.achievements.twenty-fourth = 1;
      console.log("");
    }
    if (player.achievements.twenty-fourth !== 0){
      document.getElementById("twenty-fourth").className = "unlocked";
    }
    //25
    function checkAchievements (){
    if (resFac.owned === 10000 && player.achievements.twenty-fifth !== 1 ){
      player.achievements.twenty-fifth = 1;
    console.log("");
    }

    if (player.achievements.twenty-fifth !== 0){
      document.getElementById("twenty-fifth").className = "unlocked";
    }
    //Robotics Factory Achievements
    //26
    function checkAchievements (){
    if (roboticsFact.owned === 60 && player.achievements.twenty-sixth !== 1 ){
      player.achievements.twenty-sixth = 1;
      console.log("");
    }
    if (player.achievements.twenty-sixth !== 0){
      document.getElementById("twenty-sixth").className = "unlocked";
    }
    //27
    function checkAchievements (){
    if (roboticsFact.owned === 600 && player.achievements.twenty-seventh!== 1 ){
      player.achievements.twenty-seventh = 1;
      console.log("");
    }
    if (player.achievements.twenty-seventh!== 0){
      document.getElementById("twenty-seventh").className = "unlocked";
    }
    //28
    function checkAchievements (){
    if (roboticsFact.owned === 1200 && player.achievements.twenty-eighth!== 1 ){
      player.achievements.twenty-eighth= 1;
      console.log("");
    }
    if (player.achievements.twenty-eighth !== 0){
      document.getElementById("twenty-eighth").className = "unlocked";
    }
    //29
    function checkAchievements (){
    if (roboticsFact.owned === 5500 && 5500player.achievements.twenty-nineth!== 1 ){
      player.achievements.twenty-nineth = 1;
      console.log("");
    }
    if (player.achievements.twenty-nineth!== 0){
      document.getElementById("twenty-nineth").className = "unlocked";
    }
    //30
    function checkAchievements (){
    if (roboticsFact.owned === 10000 && player.achievements.thirtieth !== 1 ){
      player.achievements.thirtieth = 1;
    console.log("");
    }

    if (player.achievements.thirtieth!== 0){
      document.getElementById("thirtieth").className = "unlocked";
    }
    //Cybernetics Labs Achievements
    //31
    function checkAchievements (){
    if (cyberLab.owned === 80 && player.achievements.thirty-first!== 1 ){
      player.achievements.thirty-first= 1;
      console.log("");
    }
    if (player.achievements.thirty-first!== 0){
      document.getElementById("thirty-first").className = "unlocked";
    }
    //32
    function checkAchievements (){
    if (cyberLab.owned === 800 && player.achievements.thirty-second!== 1 ){
      player.achievements.thirty-second= 1;
      console.log("");
    }
    if (player.achievements.thirty-second!== 0){
      document.getElementById("thirty-second").className = "unlocked";
    }
    //33
    function checkAchievements (){
    if (cyberLab.owned === 1600 && player.achievements.thirty-third!== 1 ){
      player.achievements.thirty-third= 1;
      console.log("");
    }
    if (player.achievements.thirty-third!== 0){
      document.getElementById("thirty-third").className = "unlocked";
    }
    //34
    function checkAchievements (){
    if (cyberLab.owned === 6000 && 5500player.achievements.thirty-fourth!== 1 ){
      player.achievements.thirty-fourth = 1;
      console.log("");
    }
    if (player.achievements.thirty-fourth!== 0){
      document.getElementById("thirty-fourth").className = "unlocked";
    }
    //35
    function checkAchievements (){
    if (cyberLab.owned === 10000 && player.achievements.thirty-fifth!== 1 ){
      player.achievements.thirty-fifth = 1;
    console.log("");
    }

    if (player.achievements.thirty-fifth!== 0){
      document.getElementById("thirty-fifth").className = "unlocked";
    }



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
    checkAchievements ();

}, 1000);

window.setInterval(function() {
    console.log("I'm working Too");
        console.log(player.achievements.first);
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
    document.getElementById('Energy').innerHTML = player.energy;
    //Cost Tech
    document.getElementsByClassName('Cost')[0].innerHTML = engineer.nextC;
    document.getElementsByClassName('Cost')[1].innerHTML = android.nextC;
    document.getElementsByClassName('Cost')[2].innerHTML = robot.nextC;
    document.getElementsByClassName('Cost')[3].innerHTML = resLab.nextC;
    document.getElementsByClassName('Cost')[4].innerHTML = resFac.nextC;
    document.getElementsByClassName('Cost')[5].innerHTML = roboticsFact.nextC;
    document.getElementsByClassName('Cost')[6].innerHTML = cyberLab.nextC;
    //Cost Energy
    document.getElementsByClassName('Cost')[7].innerHTML = battPack.nextC;
    document.getElementsByClassName('Cost')[8].innerHTML = pwrGen.nextC;
    document.getElementsByClassName('Cost')[9].innerHTML = genRoom.nextC;
    document.getElementsByClassName('Cost')[10].innerHTML = solPan.nextC;
    document.getElementsByClassName('Cost')[11].innerHTML = solPanFarm.nextC;

}, 100);
