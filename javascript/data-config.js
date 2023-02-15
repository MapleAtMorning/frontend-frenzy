let bytes = 0;
let upgrades = [0, 0, 0]; // Loops, Keyboard, Monkey
let upgradesPrice = [100, 200, 300]
let upgradesData = [10, 1, 1]
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

export function upgradeManager(cond, upgrade){ // Pass in the condition such as add or subtract (for some reason), or even check. Then comma and put in what element in the array you're checking.
    if(cond == "add"){
        upgrades[upgrade]++;

    }if(cond == "sub"){
        upgrades[upgrade]--;
        
    }else if(cond == "check"){
        if(!isNaN(upgrade)){
            return upgrades[upgrade];
        };
    }else if(cond == "price"){
        return upgradesPrice[upgrade];
    }else if(cond == "value"){
        return upgradesData[upgrade];
    }else{
        return;
    };
}

export function bytesCheck(){
    return bytes;
}