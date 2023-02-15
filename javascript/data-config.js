let bytes = 0;
let upgradesLevel = [0, 0, 0]; // Loops, ifStatement, Monkey
let upgradesPrice = [50, 200, 300];
let upgradesData = [10, 1, 1];
let bytesText = document.getElementById("bytesNum");


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