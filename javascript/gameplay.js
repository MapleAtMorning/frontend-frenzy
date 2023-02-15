import { addBytes, removeBytes, bytesCheck, upgradeManager} from "/javascript/data-config.js";

let hackButton = document.getElementById("clicker");



hackButton.addEventListener("click", function(){
    addBytes(1)
});

document.addEventListener('click', function (event) {
    let clickTarget = event.target;
    let bytes = bytesCheck();

	if (clickTarget.matches('.grid-item') && !clickTarget.matches('.disabled')) {
        let price = parseInt(clickTarget.getElementsByClassName('price')[0].innerHTML); // Get the number from the price class in the grid item you clicked

        if(bytes < price){ // Simple bytes check to see if you have enough to buy the upgrade.
            console.log("Not enough money");
            return;
        }
        removeBytes(price);

        if(clickTarget == document.getElementById('loops')){
            upgradeManager("add", 0);
                        
            if(upgradeManager("check", 0) == 1){
                document.getElementById("keyboard").classList.remove("disabled");
            }         
        }
	}

});