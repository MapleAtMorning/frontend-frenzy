let bytes = 0;
let bytesText = document.getElementById("bytesNum");

export function addBytes(amount){
    if(!isNaN(amount) && amount >= 1){
        bytes += amount;
        updateBytes();
        // return(bytes);
    };
};

export function removeBytes(amount){
    if(!isNaN(amount) && bytes > amount){
        bytes -= amount;
        updateBytes();
        return(bytes);
    };
};

function updateBytes(){
    bytesText.innerHTML = bytes;
}