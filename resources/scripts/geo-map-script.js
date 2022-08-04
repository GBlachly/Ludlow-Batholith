//Unit Buttons Variables
const kbwButton = document.getElementById("kbw-button");
const kerButton = document.getElementById("ker-button");
const kbtButton = document.getElementById("kbt-button");
const krdButton = document.getElementById("krd-button");
const kpbButton = document.getElementById("kpb-button");

//Unit Descriptions div's
const kbwDescription = document.getElementById("kbw-des");
const kerDescription = document.getElementById("ker-des");
const kbtDescription = document.getElementById("kbt-des");
const krdDescription = document.getElementById("krd-des");
const kpbDescription = document.getElementById("kpb-des");

let unitDescList = [kbwDescription, kerDescription, kbtDescription, krdDescription, kpbDescription]

//kbwPress Function and Event Handler
const kbwPress = () => {
    for (const unit of unitDescList) {
        if (unit === kbwDescription) {
            unit.style.display = 'block'
        } else {
            unit.style.display = 'none'
        }
    }
};
kbwButton.onclick = kbwPress; 

//kerPress Function and Event Handler
const kerPress = () => {
    for (const unit of unitDescList) {
        if (unit === kerDescription) {
            unit.style.display = 'block'
        } else {
            unit.style.display = 'none'
        }
    }
};
kerButton.onclick = kerPress; 

//kbtPress Function and Event Handler
const kbtPress = () => {
    for (const unit of unitDescList) {
        if (unit === kbtDescription) {
            unit.style.display = 'block'
        } else {
            unit.style.display = 'none'
        }
    }
};
kbtButton.onclick = kbtPress; 

//krdPress Function and Event Handler
const krdPress = () => {
    for (const unit of unitDescList) {
        if (unit === krdDescription) {
            unit.style.display = 'block'
        } else {
            unit.style.display = 'none'
        }
    }
};
krdButton.onclick = krdPress; 

//kpbPress Function and Event Handler
const kpbPress = () => {
    for (const unit of unitDescList) {
        if (unit === kpbDescription) {
            unit.style.display = 'block'
        } else {
            unit.style.display = 'none'
        }
    }
};
kpbButton.onclick = kpbPress; 
