let bytes = 1000;
let upgradesLevel = [0, 0, 0]; // Loops, ifStatement, Monkey
let upgradesPrice = [50, 200, 300];
let upgradesData = [1, 1, 10];
let bytesText = document.getElementById("bytesNum");

export function saveData(){
    let saveString;
    for(i=0; i<upgradesLevel.length; i++){
        saveString += upgradesLevel[i] + "b";
    }
}

export function loadData(){

};

console.log(`${upgradesLevel}, ${upgradesPrice}, ${upgradesData}, ${bytes}`);


export function bytesManager(cond, amount){
    if(cond == "add"){
        if(!isNaN(amount) && amount >= 1){
            bytes += amount;;
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

export function bytesCheck(){
    return bytes;
};


document.getElementById("shop").addEventListener("load", loadData());
window.addEventListener('beforeunload', saveData);