import { bytesManager, bytesCheck, upgradeManager} from "/javascript/data-config.js";

let hackButton = document.getElementById("clicker");
let looped = false;

function cacheLoop(){
    setTimeout(() => {
        bytesManager("add", upgradeManager("data", "check", 1));
        console.log(upgradeManager("data", "check", 0), upgradeManager("data", "check", 1), upgradeManager("data", "check", 2))
        cacheLoop();
    }, (upgradeManager("data", "check", 0) * 1000));
};

hackButton.addEventListener("click", function(){
    bytesManager("add", upgradeManager("level", "check", 2)+1);
});

document.addEventListener('click', function(event) {
    let clickTarget = event.target;
    let bytes = bytesCheck('bytes');

	if (clickTarget.matches('.grid-item') && !clickTarget.matches('.disabled')) {
        let arrayIndex;
        // let price = parseInt(clickTarget.getElementsByClassName('price')[0].innerHTML); // Get the number from the price class in the grid item you clicked

        if(clickTarget == document.getElementById('loops')){                     
            arrayIndex = 0;
        }else if(clickTarget == document.getElementById('ifStatement')){
            arrayIndex = 1;
        }else if(clickTarget == document.getElementById('monkey')){
            arrayIndex = 2;
        }else{
            alert("You somehow clicked an upgrade that doesn't exist");
            return;
        };
        upgradeManager("level", "add", arrayIndex);

        
        let price = upgradeManager("price", "check", arrayIndex)
        if(bytes < price){ // Simple bytes check to see if you have enough to buy the upgrade.
            alert("Not enough money");
            return;
        };

        
        if(upgradeManager("level", "check", 0) >= 1 && clickTarget == document.getElementById('loops') ){ // Check if loops has been bought, if so then remove disabled and start the loop.
            if(!looped){
                document.getElementById("ifStatement").classList.remove("disabled");
                document.getElementById("stats-rate").classList.remove("disabled");
                document.getElementById("stats-amount").classList.remove("disabled");
                console.log("Loop Started");
                looped = true;
                cacheLoop();
            }else if(looped){
                let changeTo = parseFloat((upgradeManager("data", "check", 0) - 0.1).toFixed(1));
                if(changeTo < 1){
                    changeTo = 1;
                    clickTarget.classList.add("disabled")
                };
                upgradeManager("data", "change", 0, changeTo);
                document.getElementById("rate-num").innerHTML = changeTo;
            };
        };

        if(upgradeManager("level", "check", 1) >= 1 && clickTarget == document.getElementById('ifStatement') ){
            upgradeManager("data", "add", 1);
            document.getElementById("amount-num").innerHTML = upgradeManager("data", "check", 1);
        };

        
        
        bytesManager("sub", price); // Money removal is down here so if a nonfunctional upgrade is clicked somehow money isn't taken.
	};

});