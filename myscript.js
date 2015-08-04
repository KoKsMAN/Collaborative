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
//Engineer Achievements
//1.
    if (engineer.owned === 1 && player.achievements.first !== 1 ){
    player.achievements.first = 1;
  }
  if (player.achievements.first !== 0){
    document.getElementById("first").className = "unlocked";
  }
//2
    if (engineer.owned === 500 && player.achievements.second !== 1 ){
     player.achievements.second = 1;

    }
    if (player.achievements.second !== 0){
      document.getElementById("second").className = "unlocked";
    }
//3
      if (engineer.owned === 1000 && player.achievements.third !== 1 ){
      player.achievements.third = 1;

    }
    if (player.achievements.third !== 0){
      document.getElementById("third").className = "unlocked";
    }
//4
    if (engineer.owned === 5000 && player.achievements.fourth !== 1 ){
      player.achievements.fourth = 1;

    }
    if (player.achievements.fourth !== 0){
      document.getElementById("fourth").className = "unlocked";
    }
//5
    if (engineer.owned === 10000 && player.achievements.fifth !== 1 ){
      player.achievements.fifth = 1;

    }
    if (player.achievements.fifth !== 0){
      document.getElementById("fifth").className = "unlocked";
    }
//Androids Achievements
//6
    if (android.owned === 5 && player.achievements.sixth !== 1 ){
      player.achievements.sixth = 1;

    }
    if (player.achievements.sixth !== 0){
      document.getElementById("sixth").className = "unlocked";
    }
//7
  if (android.owned === 400 && player.achievements.seventh !== 1 ){
      player.achievements.seventh = 1;
    }
    if (player.achievements.seventh !== 0){
        document.getElementById("seventh").className = "unlocked";
      }
//8
  if (android.owned === 900 && player.achievements.eighth !== 1 ){
      player.achievements.eighth = 1;

    }
    if (player.achievements.eighth !== 0){
      document.getElementById("eighth").className = "unlocked";
    }
//9
    if (android.owned === 4000 && player.achievements.nineth !== 1 ){
      player.achievements.nineth = 1;

    }
    if (player.achievements.nineth !== 0){
      document.getElementById("nineth").className = "unlocked";
    }
//10
    if (android.owned === 9000 && player.achievements.tenth !== 1 ){
      player.achievements.tenth = 1;

    }
    if (player.achievements.tenth !== 0){
      document.getElementById("tenth").className = "unlocked";
    }
//Robots Achievements
//11
    if (android.owned === 10 && player.achievements.eleventh !== 1 ){
      player.achievements.eleventh = 1;

    }
    if (player.achievements.eleventh !== 0){
      document.getElementById("eleventh").className = "unlocked";
    }
//12
    if (robot.owned === 450 && player.achievements.twelfth !== 1 ){
      player.achievements.twelfth = 1;

    }
    if (player.achievements.twelfth !== 0){
      document.getElementById("twelfth").className = "unlocked";
    }
//13
    if (robot.owned === 950 && player.achievements.thirteenth !== 1 ){
      player.achievements.thirteenth = 1;

    }
    if (player.achievements.thirteenth !== 0){
      document.getElementById("thirteenth").className = "unlocked";
    }
//14
    if (robot.owned === 4500 && player.achievements.fourteenth !== 1 ){
      player.achievements.fourteenth = 1;

    }
    if (player.achievements.fourteenth !== 0){
      document.getElementById("fourteenth").className = "unlocked";
    }
//15
    if (robot.owned === 9500 && player.achievements.fifteenth !== 1 ){
      player.achievements.fifteenth = 1;

    }
    if (player.achievements.fifteenth !== 0){
      document.getElementById("fifteenth").className = "unlocked";
    }
//Research Lab Achievements
//16
    if (resLab.owned === 50 && player.achievements.sixteenth !== 1 ){
      player.achievements.sixteenth = 1;

    }
    if (player.achievements.sixteenth !== 0){
      document.getElementById("sixteenth").className = "unlocked";
    }
//17
    if (resLab.owned === 700 && player.achievements.seventeenth !== 1 ){
      player.achievements.seventeenth = 1;

    }
    if (player.achievements.seventeenth !== 0){
      document.getElementById("seventeenth").className = "unlocked";
    }
//18
    if (resLab.owned === 1300 && player.achievements.eighteenth !== 1 ){
      player.achievements.eighteenth = 1;

    }
    if (player.achievements.eighteenth !== 0){
      document.getElementById("eighteenth").className = "unlocked";
    }
//19
    if (resLab.owned === 6000 && player.achievements.nineteenth !== 1 ){
      player.achievements.nineteenth = 1;

    }
    if (player.achievements.nineteenth !== 0){
      document.getElementById("nineteenth").className = "unlocked";
    }
//20
    if (resLab.owned === 10000 && player.achievements.twentieth !== 1 ){
      player.achievements.twentieth = 1;

    }
//Research Facility Achievements
//21
    if (resFac.owned === 40 && player.achievements.twenty_first !== 1 ){
      player.achievements.twenty_first = 1;

    }
    if (player.achievements.twenty_first !== 0){
      document.getElementById("twenty-first").className = "unlocked";
    }
//22
    if (resFac.owned === 600 && player.achievements.twenty_second !== 1 ){
      player.achievements.twenty_second = 1;

    }
    if (player.achievements.twenty_second !== 0){
      document.getElementById("twenty-second").className = "unlocked";
    }
//23
    if (resFac.owned === 1000 && player.achievements.twenty_third !== 1 ){
      player.achievements.twenty_third = 1;

    }
    if (player.achievements.twenty_third !== 0){
      document.getElementById("twenty-third").className = "unlocked";
    }
//24
    if (resFac.owned === 5000 && player.achievements.twenty_fourth !== 1 ){
      player.achievements.twenty_fourth = 1;

    }
    if (player.achievements.twenty_fourth !== 0){
      document.getElementById("twenty-fourth").className = "unlocked";
    }
//25
    if (resFac.owned === 10000 && player.achievements.twenty_fifth !== 1 ){
      player.achievements.twenty_fifth = 1;

    }

    if (player.achievements.twenty_fifth !== 0){
      document.getElementById("twenty-fifth").className = "unlocked";
    }
//Robotics Factory Achievements
//26
    if (roboticsFact.owned === 60 && player.achievements.twenty_sixth !== 1 ){
      player.achievements.twenty_sixth = 1;

    }
    if (player.achievements.twenty_sixth !== 0){
      document.getElementById("twenty-sixth").className = "unlocked";
    }
//27
    if (roboticsFact.owned === 600 && player.achievements.twenty_seventh!== 1 ){
      player.achievements.twenty_seventh = 1;

    }
    if (player.achievements.twenty_seventh!== 0){
      document.getElementById("twenty-seventh").className = "unlocked";
    }
//28
    if (roboticsFact.owned === 1200 && player.achievements.twenty_eighth!== 1 ){
      player.achievements.twenty_eighth= 1;

    }
    if (player.achievements.twenty_eighth !== 0){
      document.getElementById("twenty-eighth").className = "unlocked";
    }
//29
    if (roboticsFact.owned === 5500 && player.achievements.twenty_nineth!== 1 ){
      player.achievements.twenty_nineth = 1;

    }
    if (player.achievements.twenty_nineth!== 0){
      document.getElementById("twenty-nineth").className = "unlocked";
    }

    if (roboticsFact.owned === 10000 && player.achievements.thirtieth !== 1 ){
      player.achievements.thirtieth = 1;

    }

    if (player.achievements.thirtieth!== 0){
      document.getElementById("thirtieth").className = "unlocked";
    }
//Cybernetics Labs Achievements
//31
    if (cyberLab.owned === 80 && player.achievements.thirty_first!== 1 ){
      player.achievements.thirty_first= 1;

    }
    if (player.achievements.thirty_first!== 0){
      document.getElementById("thirty-first").className = "unlocked";
    }
//32
  if (cyberLab.owned === 800 && player.achievements.thirty_second!== 1 ){
      player.achievements.thirty_second= 1;

    }
    if (player.achievements.thirty_second!== 0){
      document.getElementById("thirty-second").className = "unlocked";
    }
//33
    if (cyberLab.owned === 1600 && player.achievements.thirty_third!== 1 ){
      player.achievements.thirty_third= 1;

    }
    if (player.achievements.thirty_third!== 0){
      document.getElementById("thirty-third").className = "unlocked";
    }
//34
    if (cyberLab.owned === 6000 && player.achievements.thirty_fourth!== 1 ){
      player.achievements.thirty_fourth = 1;

    }
    if (player.achievements.thirty_fourth!== 0){
      document.getElementById("thirty-fourth").className = "unlocked";
    }
//35
    if (cyberLab.owned === 10000 && player.achievements.thirty_fifth!== 1 ){
      player.achievements.thirty_fifth = 1;

    }

    if (player.achievements.thirty_fifth!== 0){
      document.getElementById("thirty-fifth").className = "unlocked";
    }

//Energy
//Battery Pack
//36
    if (battPack.owned === 1 && player.achievements.thirty_sixth !== 1 ){
      player.achievements.thirty_sixth = 1;


    }
    if (player.achievements.thirty_sixth !== 0){
      document.getElementById("thirty-sixth").className = "unlocked";
    }

//37
    if (battPack.owned === 500 && player.achievements.thirty_seventh !== 1 ){
      player.achievements.thirty_seventh = 1;


    }
    if (player.achievements.thirty_seventh !== 0){
      document.getElementById("thirty-seventh").className = "unlocked";
    }
//38
    if (battPack.owned === 1000 && player.achievements.thirty_eighth !== 1 ){
      player.achievements.thirty_eighth = 1;


    }
    if (player.achievements.thirty_eighth !== 0){
      document.getElementById("thirty-eighth").className = "unlocked";
    }
//39
   if (battPack.owned === 5000 && player.achievements.thirty_nineth !== 1 ){
     player.achievements.thirty_nineth = 1;


   }
   if (player.achievements.thirty_nineth !== 0){
     document.getElementById("thirty-nineth").className = "unlocked";
   }
//40
   if (battPack.owned === 10000 && player.achievements.fortieth !== 1 ){
     player.achievements.fortieth = 1;


   }
   if (player.achievements.fortieth !== 0){
     document.getElementById("fortieth").className = "unlocked";
   }
//Power Generator
//41
   if (pwrGen.owned === 5 && player.achievements.forty-first!== 1 ){
     player.achievements.forty_first = 1;


   }
   if (player.achievements.forty_first!== 0){
     document.getElementById("forty-first").className = "unlocked";
   }

//42
   if (pwrGen.owned === 400 && player.achievements.forty_second!== 1 ){
     player.achievements.forty_second= 1;


   }
   if (player.achievements.forty_second!== 0){
     document.getElementById("forty-second").className = "unlocked";
   }

//43
  if (pwrGen.owned === 900 && player.achievements.forty_third!== 1 ){
    player.achievements.forty_third= 1;


  }
  if (player.achievements.forty_third!== 0){
    document.getElementById("forty-third").className = "unlocked";
  }

//44
  if (pwrGen.owned === 4000 && player.achievements.forty_fourth!== 1 ){
    player.achievements.forty_fourth= 1;


  }
  if (player.achievements.forty_fourth!== 0){
    document.getElementById("forty-fourth").className = "unlocked";
  }

//45
  if (pwrGen.owned === 9000 && player.achievements.forty_fifth !== 1 ){
    player.achievements.forty_fifth = 1;


  }
  if (player.achievements.forty_fifth !== 0){
    document.getElementById("forty-fifth").className = "unlocked";
  }

//Generator Room
//46
  if (genRoom.owned === 15 && player.achievements.forty_sixth!== 1 ){
    player.achievements.forty_sixth= 1;


  }
  if (player.achievements.forty_sixth!== 0){
    document.getElementById("forty-sixth").className = "unlocked";
  }

//47
   if (genRoom.owned === 450 && player.achievements.forty_seventh!== 1 ){
     player.achievements.forty_seventh= 1;


   }
   if (player.achievements.forty_seventh!== 0){
     document.getElementById("forty-seventh").className = "unlocked";
   }

//48
   if (genRoom.owned === 970 && player.achievements.forty_eighth!== 1 ){
     player.achievements.forty_eighth= 1;


   }
  if (player.achievements.forty_eighth!== 0){
    document.getElementById("forty-eighth").className = "unlocked";
  }

//49
  if (genRoom.owned === 4600 && player.achievements.forty_nineth !== 1 ){
    player.achievements.forty_nineth = 1;


  }
  if (player.achievements.forty_nineth !== 0){
   document.getElementById("forty-nineth").className = "unlocked";
 }

  if (player.tech === 30 && player.achievements.second !== 1){
    player.achievements.second = 1;

//50
  if (genRoom.owned === 9900 && player.achievements.fiftieth!== 1 ){
    player.achievements.fiftieth= 1;


  }
  if (player.achievements.fiftieth!== 0){
    document.getElementById("fiftieth").className = "unlocked";
  }

//Solar Panel
//51
  if (solPan.owned === 20 && player.achievements.fiftieth_first !== 1 ){
     player.achievements.fiftieth_first = 1;

  }
  if (player.achievements.fiftieth_first !== 0){
    document.getElementById("fiftieth-first").className = "unlocked";
  }

//52
  if (solPan.owned === 200 && player.achievements.fiftieth_second !== 1 ){
    player.achievements.fiftieth_second = 1;

  }
  if (player.achievements.fiftieth_second !== 0){
    document.getElementById("fiftieth-second").className = "unlocked";
  }

//53
  if (solPan.owned === 1200 && player.achievements.fiftieth_third !== 1 ){
    player.achievements.fiftieth_third = 1;

  }
 if (player.achievements.fiftieth_third !== 0){
   document.getElementById("fiftieth-third").className = "unlocked";
  }

//54
  if (solPan.owned === 6000 && player.achievements.fiftieth_fourth !== 1 ){
    player.achievements.fiftieth_fourth = 1;

  }
  if (player.achievements.fiftieth_fourth !== 0){
    document.getElementById("fiftieth-fourth").className = "unlocked";
  }

//55
  if (solPan.owned === 10000 && player.achievements.fiftieth_fifth !== 1 ){
    player.achievements.fiftieth_fifth = 1;

  }
  if (player.achievements.fiftieth_fifth !== 0){
    document.getElementById("fiftieth-fifth").className = "unlocked";
  }

//Solar Panel Farm
//56
  if (solPanFarm.owned === 80 && player.achievements.fiftieth_sixth !== 1 ){
    player.achievements.fiftieth_sixth = 1;

  }
  if (player.achievements.fiftieth_sixth !== 0){
    document.getElementById("fiftieth-sixth").className = "unlocked";
  }

//57
  if (solPanFarm.owned === 800 && player.achievements.fiftieth_seventh !== 1 ){
    player.achievements.fiftieth_seventh = 1;

  }
  if (player.achievements.fiftieth_seventh !== 0){
    document.getElementById("fiftieth-seventh").className = "unlocked";
  }

//58
  if (solPanFarm.owned === 1600 && player.achievements.fiftieth_eighth !== 1 ){
    player.achievements.fiftieth_eighth = 1;

  }
  if (player.achievements.fiftieth_eighth !== 0){
    document.getElementById("fiftieth-eighth").className = "unlocked";
  }

//59
  if (solPanFarm.owned === 6000 && player.achievements.fiftieth_nineth !== 1 ){
    player.achievements.fiftieth_nineth = 1;

  }
  if (player.achievements.fiftieth_nineth !== 0){
    document.getElementById("fiftieth-nineth").className = "unlocked";
  }

//60
  if (solPanFarm.owned === 10000 && player.achievements.sixtieth !== 1 ){
    player.achievements.sixtieth = 1;

  }
  if (player.achievements.sixtieth !== 0){
    document.getElementById("sixtieth").className = "unlocked";
  }

//Tech Achievements
//61
  if (player.tech === 1000 && player.achievements.sixty_first !== 1){
    player.achievements.sixty_first = 1;
    alert("Keep it up !");
  }
  if (player.achievements.sixty_first !== 0){
    document.getElementById("sixty-first").className = "unlocked";
  }

//62
  if (player.tech === 10000 && player.achievements.sixty_second !== 1){
    player.achievements.sixty_second = 1;

  }
  if (player.achievements.sixty_second !== 0){
    document.getElementById("sixty-second").className = "unlocked";
  }

  //63
  if (player.tech === 100000 && player.achievements.sixty_third !== 1){
    player.achievements.sixty_third = 1;

  }
  if (player.achievements.sixty_third !== 0){
    document.getElementById("sixty-third").className = "unlocked";
  }

//64
  if (player.tech === 1000000 && player.achievements.sixty_fourth !== 1){
    player.achievements.sixty_fourth = 1;

  }
  if (player.achievements.sixty_fourth !== 0){
    document.getElementById("sixty-fourth").className = "unlocked";
  }

//65
  if (player.tech === 50000000 && player.achievements.sixty_fifth !== 1){
    player.achievements.sixty_fifth = 1;

  }
  if (player.achievements.sixty_fifth !== 0){
    document.getElementById("sixty-fifth").className = "unlocked";
  }
//Energy Achievements
//66
    if (player.energy === 1000 && player.achievements.sixty_sixth !== 1){
      player.achievements.sixty_sixth = 1;

    }
    if (player.achievements.sixty_sixth !== 0){
      document.getElementById("sixty-sixth").className = "unlocked";
    }

//67
    if (player.energy === 10000 && player.achievements.sixty_seventh !== 1){
      player.achievements.sixty_seventh = 1;

    }
    if (player.achievements.sixty_seventh !== 0){
      document.getElementById("sixty-seventh").className = "unlocked";
    }

//68
    if (player.energy === 100000 && player.achievements.sixty_eighth !== 1){
      player.achievements.sixty_eighth = 1;

    }
    if (player.achievements.sixty_eighth !== 0){
      document.getElementById("sixty-eighth").className = "unlocked";
    }

//69
    if (player.energy === 1000000 && player.achievements.sixty_nineth !== 1){
      player.achievements.sixty_nineth = 1;

    }
    if (player.achievements.sixty_nineth !== 0){
      document.getElementById("sixty-nineth").className = "unlocked";
    }

//70
    if (player.energy === 50000000 && player.achievements.seventieth!== 1){
      player.achievements.seventieth= 1;

    }
    if (player.achievements.seventieth!== 0){
      document.getElementById("seventieth").className = "unlocked";
    }
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
