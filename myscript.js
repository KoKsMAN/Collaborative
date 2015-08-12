//initialize player data
var player = {
  tech: 0,
  energy: 0,
  engineer: {
    name: "Engineer",
    owned: 0,
    cost: 15,
    nextC: 15,
    generates: 0.1,
  },
  android: {
    name: "Android",
    owned: 0,
    cost: 100,
    nextC: 100,
    generates: 0.5,
  },
  robot: {
    name: "Robot",
    owned: 0,
    cost: 500,
    nextC: 500,
    generates: 4,
  },
  resLab: {
    name: "Research Lab",
    owned: 0,
    cost: 3000,
    nextC: 3000,
    generates: 10,
  },
  resFac: {
    name: "Research Facility",
    owned: 0,
    cost: 10000,
    nextC: 10000,
    generates: 40,
  },
  roboticsFact: {
    name: "Robotics Factory",
    owned: 0,
    cost: 40000,
    nextC: 40000,
    generates: 100,
  },
  cyberLab: {
    name: "Cybernetics Lab",
    owned: 0,
    cost: 200000,
    nextC: 200000,
    generates: 400,
  },
  //initialize energy building data
  battPack: {
    name: "Battery Pack",
    owned: 0,
    cost: 15,
    nextC: 15,
    generates: 1,
  },
  pwrGen: {
    name: "Power Generator",
    owned: 0,
    cost: 15,
    nextC: 15,
    generates: 1,
  },
  genRoom: {
    name: "Generator Room",
    owned: 0,
    cost: 15,
    nextC: 15,
    generates: 1,
  },
  solPan: {
    name: "Solar Panels",
    owned: 0,
    cost: 15,
    nextC: 15,
    generates: 1,
  },
  solPanFarm: {
    name: "Solar Panel Farm",
    owned: 0,
    cost: 15,
    nextC: 15,
    generates: 1,
  },
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
var progBar = document.getElementsByClassName("progress-bar");
nums = ['k','M','B','T','Qa','Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'UnD', 'DuD', 'TrD', 'QaD', 'QiD', 'SeD', 'SpD', 'OcD', 'NoD'];
// ================ HTML LOCAL STORAGE SAVE =====================//
//game save
function gameSave(){
 localStorage.setItem("player",JSON.stringify(player));
}
//game load
function gameLoad(){
  var savegame = JSON.parse(localStorage.getItem("player"));
  //Resources
  if (typeof savegame.tech !== "undefined") player.tech = savegame.tech;
  if (typeof savegame.energy !== "undefined") player.energy = savegame.energy;
  //Units Tech
  if (typeof savegame.engineer !== "undefined") player.engineer = savegame.engineer;
  if (typeof savegame.android !== "undefined") player.android = savegame.android;
  if (typeof savegame.robot !== "undefined") player.robot = savegame.robot;
  if (typeof savegame.resLab !== "undefined") player.resLab = savegame.resLab;
  if (typeof savegame.resFac !== "undefined") player.resFac = savegame.resFac;
  if (typeof savegame.roboticsFact !== "undefined") player.roboticsFact = savegame.roboticsFact;
  if (typeof savegame.cyberLab !== "undefined") player.cyberLab = savegame.cyberLab;
  //Units Energy
  if (typeof savegame.battPack !== "undefined") player.battPack = savegame.battPack;
  if (typeof savegame.pwrGen !== "undefined") player.pwrGen = savegame.pwrGen;
  if (typeof savegame.genRoom !== "undefined") player.genRoom = savegame.genRoom;
  if (typeof savegame.solPan !== "undefined") player.solPan = savegame.solPan;
  if (typeof savegame.solPanFarm !== "undefined") player.solPanFarm = savegame.solPanFarm;
  //Achievements
  if (typeof savegame.achievements !== "undefined") player.achievements = savegame.achievements;
  //Upgrades
  if (typeof savegame.upgrades !== "undefined") player.upgrades = savegame.upgrades;
}

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

//delete save
function deleteSave(){
  localStorage.removeItem('player');
  location.reload();
}

//Tech Buy
function techBuy(amount, building, id, arrayPlace){
  building.nextC = ((amount * Math.floor(building.cost * Math.pow(1.15,building.owned))));
  if (building.nextC <= player.tech){
    building.owned += amount;
    player.tech -= building.nextC;
    document.getElementById('Tech').innerHTML = suffixy(player.tech, 2);
    document.getElementsByClassName('Cost')[arrayPlace].innerHTML = suffixy(building.nextC, 2);
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
    document.getElementById("Energy").innerHTML = suffixy(player.energy, 2);
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


function getResource(player, resource, amount) {
    player[resource] += amount;
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
  player.tech += ((player.engineer.owned * (player.engineer.generates + player.upgrades.engi5Perc + player.upgrades.engi25Perc )));
  player.tech += ((player.android.owned * (player.android.generates + player.upgrades.andro5Perc + player.upgrades.andro25Perc )));
  player.tech += ((player.robot.owned * (player.robot.generates + player.upgrades.robot5Perc + player.upgrades.robot25Perc )));
  player.tech += ((player.resLab.owned * (player.resLab.generates + player.upgrades.resLab5Perc + player.upgrades.resLab25Perc )));
  player.tech += ((player.resFac.owned * (player.resFac.generates + player.upgrades.resFact5Perc + player.upgrades.resFact25Perc )));
  player.tech += ((player.roboticsFact.owned * (player.roboticsFact.generates + player.upgrades.roboFact5Perc + player.upgrades.roboFact25Perc )));
  player.tech += ((player.cyberLab.owned * (player.cyberLab.generates + player.upgrades.cybLab5Perc + player.upgrades.cybLab25Perc )));
  //Energy
  player.energy += ((player.battPack.owned * (player.battPack.generates + player.upgrades.battPck5Perc + player.upgrades.battPck25Perc )));
  player.energy += ((player.pwrGen.owned * (player.pwrGen.generates + player.upgrades.pwrGen5Perc + player.upgrades.pwrGen25Perc )));
  player.energy += ((player.genRoom.owned * (player.genRoom.generates + player.upgrades.genRoom5Perc + player.upgrades.genRoom25Perc )));
  player.energy += ((player.solPan.owned * (player.solPan.generates + player.upgrades.solPan5Perc + player.upgrades.solPan25Perc )));
  player.energy += ((player.solPanFarm.owned * (player.solPanFarm.generates + player.upgrades.solPanFarm5Perc + player.upgrades.solPanFarm25Perc )));

}

//achievements

function checkAchievements (){
//Engineer Achievements
//1.
    if (player.engineer.owned === 1 && player.achievements.first !== 1 ){
    player.achievements.first = 1;
    player.achievements.points++;

  }
  if (player.achievements.first !== 0){
    document.getElementById("first").className = "unlocked";

  }
//2
    if (player.engineer.owned === 2 && player.achievements.second !== 1 ){
     player.achievements.second = 1;
     player.achievements.points++;

    }
    if (player.achievements.second !== 0){
      document.getElementById("second").className = "unlocked";

    }
//3
      if (player.engineer.owned === 3 && player.achievements.third !== 1 ){
      player.achievements.third = 1;
      player.achievements.points++;
    }
    if (player.achievements.third !== 0){
      document.getElementById("third").className = "unlocked";

    }
//4
    if (player.engineer.owned === 4 && player.achievements.fourth !== 1 ){
      player.achievements.fourth = 1;
player.achievements.points++;

    }
    if (player.achievements.fourth !== 0){
      document.getElementById("fourth").className = "unlocked";
    }
//5
    if (player.engineer.owned === 5 && player.achievements.fifth !== 1 ){
      player.achievements.fifth = 1;
player.achievements.points++;

    }
    if (player.achievements.fifth !== 0){
      document.getElementById("fifth").className = "unlocked";
    }
//Androids Achievements
//6
    if (player.android.owned === 5 && player.achievements.sixth !== 1 ){
      player.achievements.sixth = 1;

    }
    if (player.achievements.sixth !== 0){
      document.getElementById("sixth").className = "unlocked";
    }
//7
  if (player.android.owned === 400 && player.achievements.seventh !== 1 ){
      player.achievements.seventh = 1;
    }
    if (player.achievements.seventh !== 0){
        document.getElementById("seventh").className = "unlocked";
      }
//8
  if (player.android.owned === 900 && player.achievements.eighth !== 1 ){
      player.achievements.eighth = 1;

    }
    if (player.achievements.eighth !== 0){
      document.getElementById("eighth").className = "unlocked";
    }
//9
    if (player.android.owned === 4000 && player.achievements.nineth !== 1 ){
      player.achievements.nineth = 1;

    }
    if (player.achievements.nineth !== 0){
      document.getElementById("nineth").className = "unlocked";
    }
//10
    if (player.android.owned === 9000 && player.achievements.tenth !== 1 ){
      player.achievements.tenth = 1;

    }
    if (player.achievements.tenth !== 0){
      document.getElementById("tenth").className = "unlocked";
    }
//Robots Achievements
//11
    if (player.android.owned === 10 && player.achievements.eleventh !== 1 ){
      player.achievements.eleventh = 1;

    }
    if (player.achievements.eleventh !== 0){
      document.getElementById("eleventh").className = "unlocked";
    }
//12
    if (player.robot.owned === 450 && player.achievements.twelfth !== 1 ){
      player.achievements.twelfth = 1;

    }
    if (player.achievements.twelfth !== 0){
      document.getElementById("twelfth").className = "unlocked";
    }
//13
    if (player.robot.owned === 950 && player.achievements.thirteenth !== 1 ){
      player.achievements.thirteenth = 1;

    }
    if (player.achievements.thirteenth !== 0){
      document.getElementById("thirteenth").className = "unlocked";
    }
//14
    if (player.robot.owned === 4500 && player.achievements.fourteenth !== 1 ){
      player.achievements.fourteenth = 1;

    }
    if (player.achievements.fourteenth !== 0){
      document.getElementById("fourteenth").className = "unlocked";
    }
//15
    if (player.robot.owned === 9500 && player.achievements.fifteenth !== 1 ){
      player.achievements.fifteenth = 1;

    }
    if (player.achievements.fifteenth !== 0){
      document.getElementById("fifteenth").className = "unlocked";
    }
//Research Lab Achievements
//16
    if (player.resLab.owned === 50 && player.achievements.sixteenth !== 1 ){
      player.achievements.sixteenth = 1;

    }
    if (player.achievements.sixteenth !== 0){
      document.getElementById("sixteenth").className = "unlocked";
    }
//17
    if (player.resLab.owned === 700 && player.achievements.seventeenth !== 1 ){
      player.achievements.seventeenth = 1;

    }
    if (player.achievements.seventeenth !== 0){
      document.getElementById("seventeenth").className = "unlocked";
    }
//18
    if (player.resLab.owned === 1300 && player.achievements.eighteenth !== 1 ){
      player.achievements.eighteenth = 1;

    }
    if (player.achievements.eighteenth !== 0){
      document.getElementById("eighteenth").className = "unlocked";
    }
//19
    if (player.resLab.owned === 6000 && player.achievements.nineteenth !== 1 ){
      player.achievements.nineteenth = 1;

    }
    if (player.achievements.nineteenth !== 0){
      document.getElementById("nineteenth").className = "unlocked";
    }
//20
    if (player.resLab.owned === 10000 && player.achievements.twentieth !== 1 ){
      player.achievements.twentieth = 1;

    }
//Research Facility Achievements
//21
    if (player.resFac.owned === 40 && player.achievements.twenty_first !== 1 ){
      player.achievements.twenty_first = 1;

    }
    if (player.achievements.twenty_first !== 0){
      document.getElementById("twenty-first").className = "unlocked";
    }
//22
    if (player.resFac.owned === 600 && player.achievements.twenty_second !== 1 ){
      player.achievements.twenty_second = 1;

    }
    if (player.achievements.twenty_second !== 0){
      document.getElementById("twenty-second").className = "unlocked";
    }
//23
    if (player.resFac.owned === 1000 && player.achievements.twenty_third !== 1 ){
      player.achievements.twenty_third = 1;

    }
    if (player.achievements.twenty_third !== 0){
      document.getElementById("twenty-third").className = "unlocked";
    }
//24
    if (player.resFac.owned === 5000 && player.achievements.twenty_fourth !== 1 ){
      player.achievements.twenty_fourth = 1;

    }
    if (player.achievements.twenty_fourth !== 0){
      document.getElementById("twenty-fourth").className = "unlocked";
    }
//25
    if (player.resFac.owned === 10000 && player.achievements.twenty_fifth !== 1 ){
      player.achievements.twenty_fifth = 1;

    }

    if (player.achievements.twenty_fifth !== 0){
      document.getElementById("twenty-fifth").className = "unlocked";
    }
//Robotics Factory Achievements
//26
    if (player.roboticsFact.owned === 60 && player.achievements.twenty_sixth !== 1 ){
      player.achievements.twenty_sixth = 1;

    }
    if (player.achievements.twenty_sixth !== 0){
      document.getElementById("twenty-sixth").className = "unlocked";
    }
//27
    if (player.roboticsFact.owned === 600 && player.achievements.twenty_seventh!== 1 ){
      player.achievements.twenty_seventh = 1;

    }
    if (player.achievements.twenty_seventh!== 0){
      document.getElementById("twenty-seventh").className = "unlocked";
    }
//28
    if (player.roboticsFact.owned === 1200 && player.achievements.twenty_eighth!== 1 ){
      player.achievements.twenty_eighth= 1;

    }
    if (player.achievements.twenty_eighth !== 0){
      document.getElementById("twenty-eighth").className = "unlocked";
    }
//29
    if (player.roboticsFact.owned === 5500 && player.achievements.twenty_nineth!== 1 ){
      player.achievements.twenty_nineth = 1;

    }
    if (player.achievements.twenty_nineth!== 0){
      document.getElementById("twenty-nineth").className = "unlocked";
    }

    if (player.roboticsFact.owned === 10000 && player.achievements.thirtieth !== 1 ){
      player.achievements.thirtieth = 1;

    }

    if (player.achievements.thirtieth!== 0){
      document.getElementById("thirtieth").className = "unlocked";
    }
//Cybernetics Labs Achievements
//31
    if (player.cyberLab.owned === 80 && player.achievements.thirty_first!== 1 ){
      player.achievements.thirty_first= 1;

    }
    if (player.achievements.thirty_first!== 0){
      document.getElementById("thirty-first").className = "unlocked";
    }
//32
  if (player.cyberLab.owned === 800 && player.achievements.thirty_second!== 1 ){
      player.achievements.thirty_second= 1;

    }
    if (player.achievements.thirty_second!== 0){
      document.getElementById("thirty-second").className = "unlocked";
    }
//33
    if (player.cyberLab.owned === 1600 && player.achievements.thirty_third!== 1 ){
      player.achievements.thirty_third= 1;

    }
    if (player.achievements.thirty_third!== 0){
      document.getElementById("thirty-third").className = "unlocked";
    }
//34
    if (player.cyberLab.owned === 6000 && player.achievements.thirty_fourth!== 1 ){
      player.achievements.thirty_fourth = 1;

    }
    if (player.achievements.thirty_fourth!== 0){
      document.getElementById("thirty-fourth").className = "unlocked";
    }
//35
    if (player.cyberLab.owned === 10000 && player.achievements.thirty_fifth!== 1 ){
      player.achievements.thirty_fifth = 1;

    }

    if (player.achievements.thirty_fifth!== 0){
      document.getElementById("thirty-fifth").className = "unlocked";
    }

//Energy
//Battery Pack
//36
    if (player.battPack.owned === 1 && player.achievements.thirty_sixth !== 1 ){
      player.achievements.thirty_sixth = 1;


    }
    if (player.achievements.thirty_sixth !== 0){
      document.getElementById("thirty-sixth").className = "unlocked";
    }

//37
    if (player.battPack.owned === 500 && player.achievements.thirty_seventh !== 1 ){
      player.achievements.thirty_seventh = 1;


    }
    if (player.achievements.thirty_seventh !== 0){
      document.getElementById("thirty-seventh").className = "unlocked";
    }
//38
    if (player.battPack.owned === 1000 && player.achievements.thirty_eighth !== 1 ){
      player.achievements.thirty_eighth = 1;


    }
    if (player.achievements.thirty_eighth !== 0){
      document.getElementById("thirty-eighth").className = "unlocked";
    }
//39
   if (player.battPack.owned === 5000 && player.achievements.thirty_nineth !== 1 ){
     player.achievements.thirty_nineth = 1;


   }
   if (player.achievements.thirty_nineth !== 0){
     document.getElementById("thirty-nineth").className = "unlocked";
   }
//40
   if (player.battPack.owned === 10000 && player.achievements.fortieth !== 1 ){
     player.achievements.fortieth = 1;


   }
   if (player.achievements.fortieth !== 0){
     document.getElementById("fortieth").className = "unlocked";
   }
//Power Generator
//41
   if (player.pwrGen.owned === 5 && player.achievements.forty-first!== 1 ){
     player.achievements.forty_first = 1;


   }
   if (player.achievements.forty_first!== 0){
     document.getElementById("forty-first").className = "unlocked";
   }

//42
   if (player.pwrGen.owned === 400 && player.achievements.forty_second!== 1 ){
     player.achievements.forty_second= 1;


   }
   if (player.achievements.forty_second!== 0){
     document.getElementById("forty-second").className = "unlocked";
   }

//43
  if (player.pwrGen.owned === 900 && player.achievements.forty_third!== 1 ){
    player.achievements.forty_third= 1;


  }
  if (player.achievements.forty_third!== 0){
    document.getElementById("forty-third").className = "unlocked";
  }

//44
  if (player.pwrGen.owned === 4000 && player.achievements.forty_fourth!== 1 ){
    player.achievements.forty_fourth= 1;


  }
  if (player.achievements.forty_fourth!== 0){
    document.getElementById("forty-fourth").className = "unlocked";
  }

//45
  if (player.pwrGen.owned === 9000 && player.achievements.forty_fifth !== 1 ){
    player.achievements.forty_fifth = 1;


  }
  if (player.achievements.forty_fifth !== 0){
    document.getElementById("forty-fifth").className = "unlocked";
  }

//Generator Room
//46
  if (player.genRoom.owned === 15 && player.achievements.forty_sixth!== 1 ){
    player.achievements.forty_sixth= 1;


  }
  if (player.achievements.forty_sixth!== 0){
    document.getElementById("forty-sixth").className = "unlocked";
  }

//47
   if (player.genRoom.owned === 450 && player.achievements.forty_seventh!== 1 ){
     player.achievements.forty_seventh= 1;


   }
   if (player.achievements.forty_seventh!== 0){
     document.getElementById("forty-seventh").className = "unlocked";
   }

//48
   if (player.genRoom.owned === 970 && player.achievements.forty_eighth!== 1 ){
     player.achievements.forty_eighth= 1;


   }
  if (player.achievements.forty_eighth!== 0){
    document.getElementById("forty-eighth").className = "unlocked";
  }

//49
  if (player.genRoom.owned === 4600 && player.achievements.forty_nineth !== 1 ){
    player.achievements.forty_nineth = 1;
  }
  if (player.achievements.forty_nineth !== 0){
   document.getElementById("forty-nineth").className = "unlocked";
 }
//50
  if (player.genRoom.owned === 9900 && player.achievements.fiftieth!== 1 ){
    player.achievements.fiftieth= 1;
  }
  if (player.achievements.fiftieth!== 0){
    document.getElementById("fiftieth").className = "unlocked";
  }

//Solar Panel
//51
  if (player.solPan.owned === 20 && player.achievements.fiftieth_first !== 1 ){
     player.achievements.fiftieth_first = 1;

  }
  if (player.achievements.fiftieth_first !== 0){
    document.getElementById("fiftieth-first").className = "unlocked";
  }

//52
  if (player.solPan.owned === 200 && player.achievements.fiftieth_second !== 1 ){
    player.achievements.fiftieth_second = 1;

  }
  if (player.achievements.fiftieth_second !== 0){
    document.getElementById("fiftieth-second").className = "unlocked";
  }

//53
  if (player.solPan.owned === 1200 && player.achievements.fiftieth_third !== 1 ){
    player.achievements.fiftieth_third = 1;

  }
 if (player.achievements.fiftieth_third !== 0){
   document.getElementById("fiftieth-third").className = "unlocked";
  }

//54
  if (player.solPan.owned === 6000 && player.achievements.fiftieth_fourth !== 1 ){
    player.achievements.fiftieth_fourth = 1;

  }
  if (player.achievements.fiftieth_fourth !== 0){
    document.getElementById("fiftieth-fourth").className = "unlocked";
  }

//55
  if (player.solPan.owned === 10000 && player.achievements.fiftieth_fifth !== 1 ){
    player.achievements.fiftieth_fifth = 1;

  }
  if (player.achievements.fiftieth_fifth !== 0){
    document.getElementById("fiftieth-fifth").className = "unlocked";
  }

//Solar Panel Farm
//56
  if (player.solPanFarm.owned === 80 && player.achievements.fiftieth_sixth !== 1 ){
    player.achievements.fiftieth_sixth = 1;

  }
  if (player.achievements.fiftieth_sixth !== 0){
    document.getElementById("fiftieth-sixth").className = "unlocked";
  }

//57
  if (player.solPanFarm.owned === 800 && player.achievements.fiftieth_seventh !== 1 ){
    player.achievements.fiftieth_seventh = 1;

  }
  if (player.achievements.fiftieth_seventh !== 0){
    document.getElementById("fiftieth-seventh").className = "unlocked";
  }

//58
  if (player.solPanFarm.owned === 1600 && player.achievements.fiftieth_eighth !== 1 ){
    player.achievements.fiftieth_eighth = 1;

  }
  if (player.achievements.fiftieth_eighth !== 0){
    document.getElementById("fiftieth-eighth").className = "unlocked";
  }

//59
  if (player.solPanFarm.owned === 6000 && player.achievements.fiftieth_nineth !== 1 ){
    player.achievements.fiftieth_nineth = 1;

  }
  if (player.achievements.fiftieth_nineth !== 0){
    document.getElementById("fiftieth-nineth").className = "unlocked";
  }

//60
  if (player.solPanFarm.owned === 10000 && player.achievements.sixtieth !== 1 ){
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
    progBar[0].style.width = parseInt(player.achievements.points) + "%";
    document.getElementById('points').innerHTML = parseInt(player.achievements.points) + "/ 100";
    document.getElementById('ach-counter').innerHTML = parseInt(player.achievements.points) + "%";
}

/* Elements hide function
function hideElements(){
  if (player.tech >= 5){
    document.getElementById('andro').style.display = 'block';
  }
  if (player.tech >= 10){
    document.getElementById('robo').style.display = 'block';
  }
  if (player.tech >= 15){
    document.getElementById('resLabo').style.display = 'block';
  }
  if (player.tech >= 20){
    document.getElementById('resFact').style.display = 'block';
  }
  if (player.tech >= 25){
    document.getElementById('robFact').style.display = 'block';
  }
  if (player.tech >= 30){
    document.getElementById('cyberLabo').style.display = 'block';
  }
}*/

window.setInterval(function() {
  console.log(player.upgrades.engi5Perc);
  updateTotals();
  gameSave();
  getResource(player, 'tech' , 1);
  getResource(player, 'energy' , 1);
  // hideElements();
  //save_game();

}, 1000);

window.setInterval(function() {
  //console.log("I'm working Too");
  // Tech
  document.getElementById('Engineers').innerHTML = player.engineer.owned;
  document.getElementById('Androids').innerHTML = player.android.owned;
  document.getElementById('Robot').innerHTML = player.robot.owned;
  document.getElementById('resLab').innerHTML = player.resLab.owned;
  document.getElementById('resFac').innerHTML = player.resFac.owned;
  document.getElementById('roboticsFact').innerHTML = player.roboticsFact.owned;
  document.getElementById('cyberLab').innerHTML = player.cyberLab.owned;
  // Energy
  document.getElementById('battPack').innerHTML = player.battPack.owned;
  document.getElementById('pwrGen').innerHTML = player.pwrGen.owned;
  document.getElementById('genRoom').innerHTML = player.genRoom.owned;
  document.getElementById('solPan').innerHTML = player.solPan.owned;
  document.getElementById('solPanFarm').innerHTML = player.solPanFarm.owned;
  //Cash
  if (player.tech <= 1000){
  document.getElementById('Tech').innerHTML = prettify(player.tech);
  }
  else {
    document.getElementById('Tech').innerHTML = suffixy(player.tech, 2);
  }
  document.getElementById('Energy').innerHTML = player.energy;
  //checkAchievements ();

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

//Cost Tech
/*  document.getElementsByClassName('Cost')[0].innerHTML = suffixy(player.engineer.nextC, 2);
document.getElementsByClassName('Cost')[1].innerHTML = suffixy(player.android.nextC, 2);
document.getElementsByClassName('Cost')[2].innerHTML = suffixy(player.robot.nextC, 2);
document.getElementsByClassName('Cost')[3].innerHTML = suffixy(player.resLab.nextC, 2);
document.getElementsByClassName('Cost')[4].innerHTML = suffixy(player.resFac.nextC, 2);
document.getElementsByClassName('Cost')[5].innerHTML = suffixy(player.roboticsFact.nextC, 2);
document.getElementsByClassName('Cost')[6].innerHTML = suffixy(player.cyberLab.nextC, 2);
//Cost Energy
document.getElementsByClassName('Cost')[7].innerHTML = suffixy(player.battPack.nextC);
document.getElementsByClassName('Cost')[8].innerHTML = suffixy(player.pwrGen.nextC);
document.getElementsByClassName('Cost')[9].innerHTML = suffixy(player.genRoom.nextC);
document.getElementsByClassName('Cost')[10].innerHTML = suffixy(player.solPan.nextC);
document.getElementsByClassName('Cost')[11].innerHTML = suffixy(player.solPanFarm.nextC);*/
