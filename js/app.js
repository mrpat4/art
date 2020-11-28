const firstBtn = document.querySelector("#first");
const secondBtn = document.querySelector("#second");

const firstDiv = document.querySelector("#first-div");
const secondDiv = document.querySelector("#second-div");


firstDiv.style.display = "flex";
secondDiv.style.display = "none";

function myFunc(){
    if (firstDiv.style.display == "none"){
        firstBtn.style.color = "red";
        firstDiv.style.display = "flex"
        secondBtn.style.color = "#000";
        secondDiv.style.display = "none";
    }
};

function myFunc2() {
    if (secondDiv.style.display == "none"){
        secondBtn.style.color = "red";
        secondDiv.style.display = "flex";
        firstBtn.style.color = "#000";
        firstDiv.style.display = "none" ;
    }
};


firstBtn.addEventListener("click", myFunc, false);
secondBtn.addEventListener("click", myFunc2, false);