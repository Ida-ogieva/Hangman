
/*----- constants -----*/
const country1 = ["nigeria"];
const singer1 = ["dido"];
const city1 = ["kumasi"];

const alphabets = "abcdefghijklmnopqrstuvwxyz";

/*----- app's state (variables) -----*/
let category;
let words;
let winner;
let guesses;
let array;


/*----- cached element references -----*/
const countryEl = document.getElementById("button1");
const singerEl = document.getElementById("button2");
const cityEl = document.getElementById("button3");
const topCenterEl = document.getElementById("topcenter");
const row2El = document.getElementById("row2");
const row1El = document.getElementById("row1");
row1El.innerText = " ";
const newArray = [];
const wrongArray = [];
const mainEl = document.getElementById("main");
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
const divParent = document.getElementById("containerid");
const imgEl = document.createElement("img");
topCenterEl.appendChild(imgEl);
document.body.style.backgroundImage = "url('https://i.imgur.com/q6Cs1ly.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

function removebackgroundimage () {
    document.body.style.backgroundImage = "none";
}

const newGameButton = document.createElement("button");
newGameButton.id = "newgame";
newGameButton.classList.add("buttons");

const newButtonParent = document.createElement("div");
newButtonParent.id = "newdiv";

function buttonShow() {
    divParent.appendChild(newButtonParent);
    newButtonParent.appendChild(newGameButton);
    newGameButton.textContent = "New Game";
}

newGameButton.addEventListener("click", startNewGame);

function startNewGame () {
    location.reload();
}


/*----- event listeners -----*/
for (let button of buttonsEl) {
    button.addEventListener("click", displayLetters, true);
}

parent.addEventListener("click", displayId);



/*----- functions -----*/


// function unclickable (e) {
//     for (let button of buttonsEl) {
//         button.removeEventListener("click", displayLetters, true);
//     }
// }


guesses = 6;
sum = 0;


/*
for (let singer of singer1)




*/



function displayId (e) {


    // if (e.target.id === "button1") {
    //     array = country1;
    // } else if (e.target.id === "button2") {
    //     array = singer1;
    // } else if (e.target.id === "button3") {
    //     array = city1;
    // }

    // console.log(array);

    // let array = country1;
    let location = String(e.target.id);

    for (let word of array) {
        if (word.includes(location)) {
            for (let i = 0; i < word.length; i++) {
                if (location === word[i]) {
                    let locationUppercase = location.toUpperCase();
                    newArray[i] = locationUppercase;
                    const displayArray = row1El.innerText.split(' ');
                    displayArray[i] = locationUppercase;
                    row1El.innerText = displayArray.join(' ');
                    if (newArray.join('') === word.toUpperCase()) {
                        gameName.textContent = "Winner!";
                        gameName.style.color = "green";
                        mainEl.appendChild(gameName);
                        noClick();
                        parent.remove();
                        buttonShow ();
                        allbuttons.remove()
                        
                    }
                } 
            }
        } else {
            if (wrongArray.includes(location)) {
                console.log(guesses);
            } else {
                wrongArray.push(location);
            console.log(wrongArray);
            guesses = guesses - 1;
            console.log(guesses);
            }
            
        }
    } for (item in newArray) {
        if (alphabets.includes(item)){
            sum = sum + 1;
            console.log(sum);
        }
    }
    if (guesses === 0) {
        gameName.textContent = "You lost! Game over";
        gameName.style.color = "red";
        mainEl.appendChild(gameName);
        console.log(gameName);
        noClick();
        parent.remove();
        buttonShow();
        row1El.remove();
        allbuttons.remove()
    }

    if (guesses === 5) {
        imgEl.src = "https://i.imgur.com/5FdV1xk.jpg";
    } else if (guesses === 4 ) {
        imgEl.src = "https://i.imgur.com/FwM5s1f.jpg";
    } else if (guesses === 3 ) {
        imgEl.src = "https://i.imgur.com/MZaJ0B6.jpg";
    } else if (guesses === 2 ) {
        imgEl.src = "https://i.imgur.com/rb5i10Q.jpg";
    } else if (guesses === 1) {
        imgEl.src = "https://i.imgur.com/OgOM0yV.jpg";
        let hintEl = document.getElementById("hintsection");
        hintEl.innerText = "Hint";
        if (array === country1) {
            // hintEl.innerHTML = " <strong>Hint</strong> <br> I am testing <br> <br> <br> <br>";
        } else if (array === singer1) {
            // hintEl.innerHTML = "<strong>Hint</strong> <br> I am singing <br> <br> <br> <br>";
            // hintEl.style.backgroundImage = "url('https://i.imgur.com/e5wVRJO.jpg')";
            // hintEl.style.backgroundSize = "100%";

        }
    } else if (guesses <= 0) {
        imgEl.src = "https://i.imgur.com/5kwOsQK.jpg";
    }
}


function noClick () {
    parent.removeEventListener("click", displayId);
}


function clearText () {
    gameName.remove();
    selectCat.remove();
    // allbuttons.remove();
}

function imageDisplay () {
    image.id = "gallows";
    parentImage.appendChild(image);
}

function displayLetters (e) {
    letterA.innerText = "A";
    letterA.classList.add("letter");
    letterA.style.backgroundColor = "black";
    letterA.style.color = "white";
    letterA.id = "a"
    letterA.style.border = "2px solid white";
    parent.appendChild(letterA);

    
    letterB.innerText = "B";
    letterB.classList.add("letter");
    letterB.id = "b"
    letterB.style.border = "2px solid white";
    letterB.style.backgroundColor = "black";
    letterB.style.color = "white";
    parent.appendChild(letterB);


    letterC.innerText = "C";
    letterC.classList.add("letter");
    letterC.id = "c"
    letterC.style.border = "2px solid white";
    letterC.style.backgroundColor = "black";
    letterC.style.color = "white";
    parent.appendChild(letterC);

    letterD.innerText = "D";
    letterD.classList.add("letter");
    letterD.id = "d"
    letterD.style.border = "2px solid white";
    letterD.style.backgroundColor = "black";
    letterD.style.color = "white";
    parent.appendChild(letterD);

    
    letterE.innerText = "E";
    letterE.classList.add("letter");
    letterE.id = "e"
    letterE.style.border = "2px solid white";
    letterE.style.backgroundColor = "black";
    letterE.style.color = "white";
    parent.appendChild(letterE);

    letterF.innerText = "F";
    letterF.classList.add("letter");
    letterF.id = "f"
    letterF.style.border = "2px solid white";
    letterF.style.backgroundColor = "black";
    letterF.style.color = "white";
    parent.appendChild(letterF);

    
    letterG.innerText = "G";
    letterG.classList.add("letter");
    letterG.id = "g"
    letterG.style.border = "2px solid white";
    letterG.style.backgroundColor = "black";
    letterG.style.color = "white";
    parent.appendChild(letterG);

    
    letterH.innerText = "H";
    letterH.classList.add("letter");
    letterH.id = "h"
    letterH.style.border = "2px solid white";
    letterH.style.backgroundColor = "black";
    letterH.style.color = "white";
    parent.appendChild(letterH);

    
    letterI.innerText = "I";
    letterI.classList.add("letter");
    letterI.id = "i"
    letterI.style.border = "2px solid white";
    letterI.style.backgroundColor = "black";
    letterI.style.color = "white";
    parent.appendChild(letterI);

    
    letterJ.innerText = "J";
    letterJ.classList.add("letter");
    letterJ.id = "j"
    letterJ.style.border = "2px solid white";
    letterJ.style.backgroundColor = "black";
    letterJ.style.color = "white";
    parent.appendChild(letterJ);

    
    letterK.innerText = "K";
    letterK.classList.add("letter");
    letterK.id = "k"
    letterK.style.border = "2px solid white";
    letterK.style.backgroundColor = "black";
    letterK.style.color = "white";
    parent.appendChild(letterK);

    
    letterL.innerText = "L";
    letterL.classList.add("letter");
    letterL.id = "l"
    letterL.style.border = "2px solid white";
    letterL.style.backgroundColor = "black";
    letterL.style.color = "white";
    parent.appendChild(letterL);

    
    letterM.innerText = "M";
    letterM.classList.add("letter");
    letterM.id = "m"
    letterM.style.border = "2px solid white";
    letterM.style.backgroundColor = "black";
    letterM.style.color = "white";
    parent.appendChild(letterM);

    
    letterN.innerText = "N";
    letterN.classList.add("letter");
    letterN.id = "n"
    letterN.style.border = "2px solid white";
    letterN.style.backgroundColor = "black";
    letterN.style.color = "white";
    parent.appendChild(letterN);

    
    letterO.innerText = "O";
    letterO.classList.add("letter");
    letterO.id = "o"
    letterO.style.border = "2px solid white";
    letterO.style.backgroundColor = "black";
    letterO.style.color = "white";
    parent.appendChild(letterO);

    
    letterP.innerText = "P";
    letterP.classList.add("letter");
    letterP.id = "p"
    letterP.style.border = "2px solid white";
    letterP.style.backgroundColor = "black";
    letterP.style.color = "white";
    parent.appendChild(letterP);

    
    letterQ.innerText = "Q";
    letterQ.classList.add("letter");
    letterQ.id = "q"
    letterQ.style.border = "2px solid white";
    letterQ.style.backgroundColor = "black";
    letterQ.style.color = "white";
    parent.appendChild(letterQ);

    
    letterR.innerText = "R";
    letterR.classList.add("letter");
    letterR.id = "r"
    letterR.style.border = "2px solid white";
    letterR.style.backgroundColor = "black";
    letterR.style.color = "white";
    parent.appendChild(letterR);

    
    letterS.innerText = "S";
    letterS.classList.add("letter");
    letterS.id = "s"
    letterS.style.border = "2px solid white";
    letterS.style.backgroundColor = "black";
    letterS.style.color = "white";
    parent.appendChild(letterS);

    
    letterT.innerText = "T";
    letterT.classList.add("letter");
    letterT.id = "t"
    letterT.style.border = "2px solid white";
    letterT.style.backgroundColor = "black";
    letterT.style.color = "white";
    parent.appendChild(letterT);

    
    letterU.innerText = "U";
    letterU.classList.add("letter");
    letterU.id = "u"
    letterU.style.border = "2px solid white";
    letterU.style.backgroundColor = "black";
    letterU.style.color = "white";
    parent.appendChild(letterU);

    
    letterV.innerText = "V";
    letterV.classList.add("letter");
    letterV.id = "v"
    letterV.style.border = "2px solid white";
    letterV.style.backgroundColor = "black";
    letterV.style.color = "white";
    parent.appendChild(letterV);

    
    letterW.innerText = "W";
    letterW.classList.add("letter");
    letterW.id = "w"
    letterW.style.border = "2px solid white";
    letterW.style.backgroundColor = "black";
    letterW.style.color = "white";
    parent.appendChild(letterW);

    
    letterX.innerText = "X";
    letterX.classList.add("letter");
    letterX.id = "x"
    letterX.style.border = "2px solid white";
    letterX.style.backgroundColor = "black";
    letterX.style.color = "white";
    parent.appendChild(letterX);

    
    letterY.innerText = "Y";
    letterY.classList.add("letter");
    letterY.id = "y"
    letterY.style.border = "2px solid white";
    letterY.style.backgroundColor = "black";
    letterY.style.color = "white";
    parent.appendChild(letterY);

    letterZ.innerText = "Z";
    letterZ.classList.add("letter");
    letterZ.id = "z"
    letterZ.style.border = "2px solid white";
    letterZ.style.backgroundColor = "black";
    letterZ.style.color = "white";
    parent.appendChild(letterZ);

    const idEl = String(e.target.id);
    if (idEl === "button1") {
        row1El.innerText = " _ _ _ _ _ _ _";
        array = country1;
        countryEl.style.backgroundColor = "grey";
        singerEl.remove();
        cityEl.remove();
        noclick();
    } else if (idEl === "button2") {
        row1El.innerText = "_ _ _ _";
        array = singer1;
        singerEl.style.backgroundColor = "grey";
        countryEl.remove();
        cityEl.remove();
        noclick();
    } else if (idEl === "button3") {
        row1El.innerText = "_ _ _ _ _ _";
        array = city1;
        cityEl.style.backgroundColor = "grey";
        singerEl.remove();
        countryEl.remove();
        noclick();
    }

    function noclick () {
        for (let button of buttonsEl) {
            button.removeEventListener("click", displayLetters, true);
        }
    }
    // unclickable ();
    clearText ();
    imageDisplay();
    removebackgroundimage();


    console.log(typeof(e.target.id));

    // if (e.target.id === button1) {

    // }


    imgEl.src = "https://i.imgur.com/xR7DNZr.jpg";
    
} 














