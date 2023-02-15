import { bytesManager, bytesCheck, upgradeManager} from "/javascript/data-config.js";

let hackButton = document.getElementById("clicker");

function cacheLoop(){
    setTimeout(() => {
        console.log("Looped")
        cacheLoop()
    }, (upgradeManager("value", 0) * 1000));
}
cacheLoop()

hackButton.addEventListener("click", function(){
    bytesManager("add", upgradeManager("check", 2)+1);
});

document.addEventListener('click', function(event) {
    let clickTarget = event.target;
    let bytes = bytesCheck('bytes');

	if (clickTarget.matches('.grid-item') && !clickTarget.matches('.disabled')) {
        let arrayIndex;
        let price = parseInt(clickTarget.getElementsByClassName('price')[0].innerHTML); // Get the number from the price class in the grid item you clicked

        if(clickTarget == document.getElementById('loops')){                     
            arrayIndex = 0;
        }else if(clickTarget == document.getElementById('keyboard')){
            arrayIndex = 1;
        }else if(clickTarget == document.getElementById('monkey')){
            arrayIndex = 2;
        }else{
            alert("You somehow clicked an upgrade that doesn't exist");
            return;
        }

        if(bytes < price){ // Simple bytes check to see if you have enough to buy the upgrade.
            console.log("Not enough money");
            return;
        }

        upgradeManager("add", arrayIndex)

        if(upgradeManager("check", 0) == 1){
            document.getElementById("keyboard").classList.remove("disabled");
            document.getElementById("stats-rate").classList.remove("disabled");
            document.getElementById("stats-amount").classList.remove("disabled");
        }

        bytesManager("sub", price); // Money removal is down here so if a nonfunctional upgrade is clicked somehow money isn't taken.
	}

});