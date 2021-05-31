// const letterEl = document.getElementById("row2");
// letterEl.addEventListener("click", click);

let word1 = ["l", "a", "g", "o", "s"];

const row2El = document.getElementById("row2");
const row1El = document.getElementById("row1");

const buttonsEl = document.getElementsByClassName("buttons");
for (let button of buttonsEl) {
    button.addEventListener("click", displayLetters, true);
}

function unclickable () {
    for (let button of buttonsEl) {
        button.removeEventListener("click", displayLetters, true);
    }
}

const allbuttons = document.getElementById("allbuttons");
const gameName = document.getElementById("name");
const selectCat = document.getElementById("select");

function clearText () {
    gameName.remove();
    selectCat.remove();
    allbuttons.remove();
}

function imageDisplay () {
    const image = document.createElement("div");
    image.id = "gallows";
    const parentImage = document.getElementById("left");
    parentImage.appendChild(image);
}


// const button1El = document.getElementById("button1");
// button1El.addEventListener("click", displayLetters);

// const button2El = document.getElementById("button2");
// button2El.addEventListener("click", displayLetters);

// const button3El = document.getElementById("button3");
// button3El.addEventListener("click", displayLetters);

// buttonsEl.addEventListener("click", displayLetters);



function displayLetters (e) {
    const parent = document.getElementById("row2");
    const letterA = document.createElement("div");
    letterA.innerText = "A";
    letterA.classList.add("letter");
    parent.appendChild(letterA);

    const letterB = document.createElement("div");
    letterB.innerText = "B";
    letterB.classList.add("letter");
    parent.appendChild(letterB);

    const letterC = document.createElement("div");
    letterC.innerText = "C";
    letterC.classList.add("letter");
    parent.appendChild(letterC);

    const letterD = document.createElement("div");
    letterD.innerText = "D";
    letterD.classList.add("letter");
    parent.appendChild(letterD);

    const letterE = document.createElement("div");
    letterE.innerText = "E";
    letterE.classList.add("letter");
    parent.appendChild(letterE);

    const letterF = document.createElement("div");
    letterF.innerText = "F";
    letterF.classList.add("letter");
    parent.appendChild(letterF);

    const letterG = document.createElement("div");
    letterG.innerText = "G";
    letterG.classList.add("letter");
    parent.appendChild(letterG);

    const letterH = document.createElement("div");
    letterH.innerText = "H";
    letterH.classList.add("letter");
    parent.appendChild(letterH);

    const letterI = document.createElement("div");
    letterI.innerText = "I";
    letterI.classList.add("letter");
    parent.appendChild(letterI);

    const letterJ = document.createElement("div");
    letterJ.innerText = "J";
    letterJ.classList.add("letter");
    parent.appendChild(letterJ);

    const letterK = document.createElement("div");
    letterK.innerText = "K";
    letterK.classList.add("letter");
    parent.appendChild(letterK);

    const letterL = document.createElement("div");
    letterL.innerText = "L";
    letterL.classList.add("letter");
    parent.appendChild(letterL);

    const letterM = document.createElement("div");
    letterM.innerText = "M";
    letterM.classList.add("letter");
    parent.appendChild(letterM);

    const letterN = document.createElement("div");
    letterN.innerText = "N";
    letterN.classList.add("letter");
    parent.appendChild(letterN);

    const letterO = document.createElement("div");
    letterO.innerText = "O";
    letterO.classList.add("letter");
    parent.appendChild(letterO);

    const letterP = document.createElement("div");
    letterP.innerText = "P";
    letterP.classList.add("letter");
    parent.appendChild(letterP);

    const letterQ = document.createElement("div");
    letterQ.innerText = "Q";
    letterQ.classList.add("letter");
    parent.appendChild(letterQ);

    const letterR= document.createElement("div");
    letterR.innerText = "R";
    letterR.classList.add("letter");
    parent.appendChild(letterR);

    const letterS = document.createElement("div");
    letterS.innerText = "S";
    letterS.classList.add("letter");
    parent.appendChild(letterS);

    const letterT = document.createElement("div");
    letterT.innerText = "T";
    letterT.classList.add("letter");
    parent.appendChild(letterT);

    const letterU = document.createElement("div");
    letterU.innerText = "U";
    letterU.classList.add("letter");
    parent.appendChild(letterU);

    const letterV = document.createElement("div");
    letterV.innerText = "V";
    letterV.classList.add("letter");
    parent.appendChild(letterV);

    const letterW = document.createElement("div");
    letterW.innerText = "W";
    letterW.classList.add("letter");
    parent.appendChild(letterW);

    const letterX = document.createElement("div");
    letterX.innerText = "X";
    letterX.classList.add("letter");
    parent.appendChild(letterX);

    const letterY = document.createElement("div");
    letterY.innerText = "Y";
    letterY.classList.add("letter");
    parent.appendChild(letterY);

    const letterZ = document.createElement("div");
    letterZ.innerText = "Z";
    letterZ.classList.add("letter");
    parent.appendChild(letterZ);

    const idEl = String(e.target.id);
    if (idEl === "button1") {
        row1El.innerText = " _ _ _ _ _";
    }

    unclickable ();
    clearText ();
    imageDisplay();
}



