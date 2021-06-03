
/*----- constants -----*/
const country = ["algeria", "seychelles", "ghana"];
const singer = ["dido", "pharell", "eagles"];
const city = ["london", "miami", "zihuatenejo"];

/*----- app's state (variables) -----*/
let spot;
let guesses = 6;
let array;
let sum = " ";
let renderedText;
const newArray = [];
const wrongArray = [];

/*----- cached element references -----*/
const letterSelectedEl = document.getElementById("right");
const hintEl = document.getElementById("hintsection");
const countryEl = document.getElementById("button1");
const singerEl = document.getElementById("button2");
const cityEl = document.getElementById("button3");
const topCenterEl = document.getElementById("topcenter");
const displayTextEl = document.getElementById("row1");
const allButtons = document.getElementById("allbuttons");
const gameName = document.getElementById("name");
const selectCategory = document.getElementById("select");
const image = document.createElement("div");
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
const buttonClick = new Audio('file:///Users/ida/Downloads/click.mp3');
const wrongLetter = new Audio('file:///Users/ida/Downloads/buzzer.mp3');
const rightLetter = new Audio('file:///Users/ida/Downloads/bell.mp3');
const cheers = new Audio('file:///Users/ida/Downloads/cheers.mp3');
const lose = new Audio('file:///Users/ida/Downloads/loser.mp3');
const newGameButton = document.createElement("button");
const newButtonParent = document.createElement("div");

topCenterEl.appendChild(imgEl);
document.body.style.backgroundImage = "url('https://i.imgur.com/q6Cs1ly.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

/*----- event listeners -----*/
for (let button of buttonsEl) {
    button.addEventListener("click", init, true);
}

newGameButton.addEventListener("click", startNewGame);
parent.addEventListener("click", displayId);

/*----- functions -----*/
function removebackgroundimage () {
    document.body.style.backgroundImage = "none";
}

function startNewGame () {
    location.reload();
}

function buttonShow() {
    divParent.appendChild(newButtonParent);
    newButtonParent.appendChild(newGameButton);
    newGameButton.textContent = "New Game";
    newGameButton.id = "newgame";
    newGameButton.classList.add("buttons");
    newButtonParent.id = "newdiv";
}

function init (e) {
    buttonClick.play();
    displayTextEl.style.borderTop = "2px solid black";
    clearText ();
    removebackgroundimage();
    imgEl.src = "https://i.imgur.com/xR7DNZr.jpg";

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
        array = country;
        missingLetters (e);
        singerEl.remove();
        cityEl.remove();
    } else if (idEl === "button2") {
        array = singer;
        missingLetters (e);
        countryEl.remove();
        cityEl.remove();
    } else if (idEl === "button3") {
        array = city;
        missingLetters (e);
        singerEl.remove();
        countryEl.remove();
    }
} 

function displayId (e) {
    document.getElementById(e.target.id).style.backgroundColor = "grey";
    let location = String(e.target.id);
    let d = array[spot];
    for (let word of d) {
        if (d.includes(location)) {
            for (let i = 0; i < d.length; i++) {
                if (location === d[i]) {
                    let locationUppercase = location.toUpperCase();
                    if (newArray.includes(locationUppercase) === false) {
                        rightLetter.play();
                    };
                    newArray[i] = locationUppercase;
                    const displayArray = displayTextEl.innerText.split(' ');
                    displayArray[i] = locationUppercase;
                    displayTextEl.innerText = displayArray.join(' ');
                    if (newArray.join('') === d.toUpperCase()) {
                        renderedText = "Winner!";
                        renderedTextColor = "green";
                        render();
                        cheers.play();
                        imgEl.src = "https://i.imgur.com/xR7DNZr.jpg";
                    }
                } 
            }
        } else {
            if (wrongArray.includes(location)) {
                return wrongArray;
            } else {
                wrongLetter.play();
                wrongArray.push(location);
                sum = sum + (wrongArray[wrongArray.length - 1]).toUpperCase() + ", ";
                letterSelectedEl.innerHTML = "Incorrect Guesses:" + sum;
                letterSelectedEl.style.color = "red";
                guesses = guesses - 1;
                }  
            } 
        if (guesses <= 0) {
            renderedText = "You lost! Game over";
            renderedTextColor = "red";
            render();
            lose.play();
            displayTextEl.textContent = array[spot].toUpperCase();
            imgEl.src = "https://i.imgur.com/5kwOsQK.jpg";
        } if (guesses === 5) {
            imgEl.src = "https://i.imgur.com/5FdV1xk.jpg";
        } if (guesses === 4 ) {
            imgEl.src = "https://i.imgur.com/FwM5s1f.jpg";
        } if (guesses === 3 ) {
            imgEl.src = "https://i.imgur.com/MZaJ0B6.jpg";
        } if (guesses === 2 ) {
            imgEl.src = "https://i.imgur.com/rb5i10Q.jpg";
        } if (guesses === 1) {
            imgEl.src = "https://i.imgur.com/OgOM0yV.jpg";
            if (array === country) {
                if (spot === 0) {
                    hintEl.style.border = "1px solid black";
                    hintEl.innerHTML = "<h1>HINT</h1><p style='color: black;'> - located in North Africa<br> - shares borders with Morocco, Tunisia and Libya </p>";
                } else if (spot === 1) {
                    hintEl.style.border = "1px solid black";
                    hintEl.innerHTML = "<h1>HINT</h1><p style='color: black;'> - An island nation located northeast of Madagascar<br> - sea shells</p>";
                } else if (spot ===2 ) {
                    hintEl.style.border = "1px solid black";
                    hintEl.innerHTML = "<h1>HINT</h1><p style='color: black;'> - The second-most populous country in West Africa, after Nigeria<br> - birth country of Alex Ghose</p>";
                }                 
            } else if (array === singer) {
                if (spot === 0) {
                    hintEl.style.border = "1px solid black";
                    hintEl.innerHTML = "<h1>HINT</h1><p style='color: black;'> - british singer <br> - best known for her 2000's hit 'Thank You' and her feature with Eminem on 'Stan'</p>";
                } else if (spot === 1) {
                    hintEl.style.border = "1px solid black";
                    hintEl.innerHTML = "<h1>HINT</h1><p style='color: black;'> - singer-songwriter and producer <br> - 'Blurred Lines', 'Get Lucky', 'Happy'</p>";
                } else if (spot === 2) {
                    hintEl.style.border = "1px solid black";
                    hintEl.innerHTML = "<h1>HINT</h1><p style='color: black;'> - American rock band responsible for one of the greatest songs of all time 'Hotel California'</p>";
                } 
            } else if (array === city) {
                if (spot === 0) {
                    hintEl.style.border = "1px solid black";
                    hintEl.innerHTML = "<h1>HINT</h1><p style='color: black;'> - Home to 'Big Ben' <br> - Arsenal, Chelsea, Tottenham, West Ham ...</p>";
                } else if (spot === 1) {
                    hintEl.style.border = "1px solid black";
                    hintEl.innerHTML = "<h1>HINT</h1><p style='color: black;'> - located in Florida<br> - Dolphins, Marlins, Heat</p>";
                } else if (spot ===2) {
                    hintEl.style.border = "1px solid black";
                    hintEl.innerHTML = "<h1>HINT</h1><p style='color: black;'> - located in Mexico<br> - final scene of The Shawshank Redemption</p>";
                }
            }
        } if (newArray.join('') === d.toUpperCase()) {
            imgEl.src = "https://i.imgur.com/xR7DNZr.jpg";
        }
    } 
}

function noClick () {
    parent.removeEventListener("click", displayId);
}

function clearText () {
    selectCategory.remove();
    allButtons.remove();
}

function missingLetters (e) {
    spot = Math.floor(Math.random() * 3);
    let a = array[spot];
    let z = a.split('');
    for (var i = 0; i <z.length; i++){
        z[i] = "_";
    };
    displayTextEl.innerText = z.join(" ");
    gameName.textContent = e.target.textContent;
    gameName.style.color = "grey";
}

function render () {
    gameName.textContent = renderedText;
    gameName.style.color = renderedTextColor;
    divParent.appendChild(gameName);
    noClick();
    parent.remove();
    buttonShow();
    allButtons.remove()
    hintEl.remove();
}














