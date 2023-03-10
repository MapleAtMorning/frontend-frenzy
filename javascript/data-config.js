import { cacheLoop } from "../javascript/gameplay.js";

let bytes = 0;
let upgradesLevel = [0, 0, 0]; // Loops, ifStatement, Monkey
let upgradesPrice = [50, 200, 300];
let upgradesData = [10, 1, 1];
let noSave = false;
let bytesText = document.getElementById("bytesNum");
let saveString = "";

// console.log(`${upgradesLevel}, ${upgradesPrice}, ${upgradesData}, ${bytes}`);

export function priceManager(amount, index, clicked){
    upgradesPrice[index] += Math.ceil(upgradesPrice[index]*(amount)); 
    console.log[upgradesPrice[index]];
    clicked.innerHTML = upgradesPrice[index];
}

export function bytesManager(cond, amount){
    if(cond == "add"){
        if(!isNaN(amount) && amount >= 1){
            bytes += amount;
        };
    }else if(cond == "sub"){
        if(!isNaN(amount) && bytes >= amount){
            bytes -= amount;
        };
    }
    bytesText.innerHTML = bytes;
    return bytes;
};

export function upgradeManager(array, cond, index, changeTo){ // Level, Price, Data | Add, Sub, Check | What number in the array
    if(array == "level"){
        if(cond == "add"){
            upgradesLevel[index]++;
        }else if(cond == "check"){
            return upgradesLevel[index];
        };

    }else if(array == "price"){
        if(cond == "change"){
            upgradesPrice[index] = changeTo;
            
        }else if(cond == "check"){
            return upgradesPrice[index];
        };

    }else if(array == "data"){
        if(cond == "add"){
            upgradesData[index]++;
        }else if(cond == "change"){
            upgradesData[index] = changeTo;
            
        }else if(cond == "check"){
            return upgradesData[index];
        };

    }else{
        return;
    };
};

// Create a string that can be saved on the users machine. This string is broken up into different arrays using pipes and commas.
// These later get split and decompiled into proper arrays on load.
// This is because JavaScript hates everyone and doesn't like saving arrays. Thanks JS!
function saveData(clear){ 
    if(clear == "clear" || noSave == true){
        localStorage.setItem("saveData", "clear");
        noSave = true;
        return;
    };
    saveString = "";
    for(let i=0; i<upgradesLevel.length; i++){
        saveString += upgradesLevel[i] + ",";
    };
    saveString += "|";
    for(let i=0; i<upgradesPrice.length; i++){
        saveString += upgradesPrice[i] + ",";
    };
    saveString += "|";
    for(let i=0; i<upgradesData.length; i++){
        saveString += upgradesData[i] + ",";
    };
    saveString += "|" + bytesCheck();
    localStorage.setItem("saveData", JSON.stringify(saveString));
    
};

export function clearData(){;
    saveData("clear");
    location.reload();
};

function loadData(){
    if(localStorage.getItem("saveData") != null && localStorage.getItem("saveData") != undefined && localStorage.getItem("saveData") != "clear" ){ // Figure out how to make this not run if data corrupts
        console.log("Passed")
        saveString = localStorage.getItem("saveData").replaceAll('"',"");

        let splitString = saveString.split(",");
        splitString = saveString.split("|");
        console.log(saveString);
        
    
        upgradesLevel = splitString[0].substring(0, splitString[0].length-1).split(",");
        upgradesPrice = splitString[1].substring(0, splitString[1].length-1).split(",");
        upgradesData = splitString[2].substring(0, splitString[2].length-1).split(",");
    
        bytes = parseInt(splitString[3]);
        bytesText.innerHTML = bytes;

        document.getElementById("click-num").innerHTML = upgradesData[2];
    
        function strToLoop(b){
            for(let i = 0;i < b.length;i++){
                b[i] = parseFloat(b[i]);
            };
        };
        strToLoop(upgradesLevel);
        strToLoop(upgradesPrice);
        strToLoop(upgradesData);

        if(upgradeManager("level", "check", 0) >= 1){
            document.getElementById("ifStatement").classList.remove("disabled");
            document.getElementById("stats-rate").classList.remove("disabled");
            document.getElementById("stats-amount").classList.remove("disabled");
            document.getElementById("rate-num").innerHTML = upgradesData[0];
            document.getElementById("amount-num").innerHTML = upgradesData[1];
            cacheLoop();
        };

        for(let i=0; i < upgradesPrice.length; i++){
            let priceHTML = document.getElementsByClassName("price");
            priceHTML[i].innerHTML = upgradesPrice[i]; 
        }

    };
};

export function bytesCheck(){
    return bytes;
};

document.getElementById("shop").addEventListener("load", loadData());
window.addEventListener('beforeunload', saveData);