
/*----- constants -----*/
const country1 = ["nigeria"];

/*----- app's state (variables) -----*/


/*----- cached element references -----*/
const row2El = document.getElementById("row2");
const row1El = document.getElementById("row1");
row1El.innerText = " ";
const newArray = [];
const allbuttons = document.getElementById("allbuttons");
const gameName = document.getElementById("name");
const selectCat = document.getElementById("select");
const keyboardEl = document.getElementsByClassName("letter");
const image = document.createElement("div");
const parentImage = document.getElementById("left");
const parent = document.getElementById("row2");
const buttonsEl = document.getElementsByClassName("buttons");
const letterA = document.createElement("div");
const letterB = document.createElement("div");
const letterC = document.createElement("div");
const letterD = document.createElement("div");
const letterE = document.createElement("div");
const letterF = document.createElement("div");
const letterG = document.createElement("div");
const letterH = document.createElement("div");
const letterI = document.createElement("div");
const letterJ = document.createElement("div");
const letterK = document.createElement("div");
const letterL = document.createElement("div");
const letterM = document.createElement("div");
const letterN = document.createElement("div");
const letterO = document.createElement("div");
const letterP = document.createElement("div");
const letterQ = document.createElement("div");
const letterR = document.createElement("div");
const letterS = document.createElement("div");
const letterT = document.createElement("div");
const letterU = document.createElement("div");
const letterV = document.createElement("div");
const letterW = document.createElement("div");
const letterX = document.createElement("div");
const letterY = document.createElement("div");
const letterZ = document.createElement("div");


/*----- event listeners -----*/
for (let button of buttonsEl) {
    button.addEventListener("click", displayLetters, true);
}

parent.addEventListener("click", displayId);

parent.removeEventListener("click", alreadyCalled);

function alreadyCalled () {

}




/*----- functions -----*/


function unclickable (e) {
    for (let button of buttonsEl) {
        button.removeEventListener("click", displayLetters, true);
    }
}


function displayId (e) {
    document.getElementById(e.target.id).style.backgroundColor = "grey";
    document.getElementById(e.target.id).style.
    let location = String(e.target.id);
    console.log(location);
    for (let letter of country1) {
        for (let i=0; i<letter.length; i++) {
            if (location === letter[i]) {
                let locationUppercase = location.toUpperCase();
                newArray[i] = locationUppercase;
                console.log(newArray);
                const displayArray = row1El.innerText.split(' ');
                displayArray[i] = locationUppercase;
                row1El.innerText = displayArray.join(' ');
            }
        }
    } 
}

function clearText () {
    gameName.remove();
    selectCat.remove();
    allbuttons.remove();
}

function imageDisplay () {
    image.id = "gallows";
    parentImage.appendChild(image);
}

function displayLetters (e) {
    letterA.innerText = "A";
    letterA.classList.add("letter");
    letterA.id = "a"
    parent.appendChild(letterA);

    
    letterB.innerText = "B";
    letterB.classList.add("letter");
    letterB.id = "b"
    parent.appendChild(letterB);


    letterC.innerText = "C";
    letterC.classList.add("letter");
    letterC.id = "c"
    parent.appendChild(letterC);

    letterD.innerText = "D";
    letterD.classList.add("letter");
    letterD.id = "d"
    parent.appendChild(letterD);

    
    letterE.innerText = "E";
    letterE.classList.add("letter");
    letterE.id = "e"
    parent.appendChild(letterE);

    letterF.innerText = "F";
    letterF.classList.add("letter");
    letterF.id = "f"
    parent.appendChild(letterF);

    
    letterG.innerText = "G";
    letterG.classList.add("letter");
    letterG.id = "g"
    parent.appendChild(letterG);

    
    letterH.innerText = "H";
    letterH.classList.add("letter");
    letterH.id = "h"
    parent.appendChild(letterH);

    
    letterI.innerText = "I";
    letterI.classList.add("letter");
    letterI.id = "i"
    parent.appendChild(letterI);

    
    letterJ.innerText = "J";
    letterJ.classList.add("letter");
    letterJ.id = "j"
    parent.appendChild(letterJ);

    
    letterK.innerText = "K";
    letterK.classList.add("letter");
    letterK.id = "k"
    parent.appendChild(letterK);

    
    letterL.innerText = "L";
    letterL.classList.add("letter");
    letterL.id = "l"
    parent.appendChild(letterL);

    
    letterM.innerText = "M";
    letterM.classList.add("letter");
    letterM.id = "m"
    parent.appendChild(letterM);

    
    letterN.innerText = "N";
    letterN.classList.add("letter");
    letterN.id = "n"
    parent.appendChild(letterN);

    
    letterO.innerText = "O";
    letterO.classList.add("letter");
    letterO.id = "o"
    parent.appendChild(letterO);

    
    letterP.innerText = "P";
    letterP.classList.add("letter");
    letterP.id = "p"
    parent.appendChild(letterP);

    
    letterQ.innerText = "Q";
    letterQ.classList.add("letter");
    letterQ.id = "q"
    parent.appendChild(letterQ);

    
    letterR.innerText = "R";
    letterR.classList.add("letter");
    letterR.id = "r"
    parent.appendChild(letterR);

    
    letterS.innerText = "S";
    letterS.classList.add("letter");
    letterS.id = "s"
    parent.appendChild(letterS);

    
    letterT.innerText = "T";
    letterT.classList.add("letter");
    letterT.id = "t"
    parent.appendChild(letterT);

    
    letterU.innerText = "U";
    letterU.classList.add("letter");
    letterU.id = "u"
    parent.appendChild(letterU);

    
    letterV.innerText = "V";
    letterV.classList.add("letter");
    letterV.id = "v"
    parent.appendChild(letterV);

    
    letterW.innerText = "W";
    letterW.classList.add("letter");
    letterW.id = "w"
    parent.appendChild(letterW);

    
    letterX.innerText = "X";
    letterX.classList.add("letter");
    letterX.id = "x"
    parent.appendChild(letterX);

    
    letterY.innerText = "Y";
    letterY.classList.add("letter");
    letterY.id = "y"
    parent.appendChild(letterY);

    letterZ.innerText = "Z";
    letterZ.classList.add("letter");
    letterZ.id = "z"
    parent.appendChild(letterZ);

    const idEl = String(e.target.id);
    if (idEl === "button1") {
        row1El.innerText = " _ _ _ _ _ _ _";
    }

    unclickable ();
    clearText ();
    imageDisplay();

    console.log(e.target.id);

    // if (e.target.id === button1) {

    // }
} 










