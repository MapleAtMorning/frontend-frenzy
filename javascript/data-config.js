let bytes = 0;
let upgrades = [0, 0, 0]; // Loops, Keyboard, Monkey
let bytesText = document.getElementById("bytesNum");


export function addBytes(amount){
    if(!isNaN(amount) && amount >= 1){
        bytes += amount;
        updateBytes();
        // return(bytes);
    };
};

export function removeBytes(amount){
    if(!isNaN(amount) && bytes >= amount){
        bytes -= amount;
        updateBytes();
        return(bytes);
    };
};

export function upgradeManager(cond, upgrade){ // Pass in the condition such as add or subtract (for some reason), or even check. Then comma and put in what element in the array you're checking.
    if(cond == "add"){
        upgrades[upgrade]++;

    }if(cond == "sub"){
        upgrades[upgrade]--;
        
    }else if(cond == "check"){
        if(!isNaN(upgrade)){
            return(upgrades[upgrade]);
        }

    }else{
        return;
    }
}

export function bytesCheck(){
    return(bytes);
}

function loadData(){

}

function saveData(){

}

function updateBytes(){
    bytesText.innerHTML = bytes;
}