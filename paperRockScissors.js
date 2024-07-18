"use strict";


function player1 () {
    let resultP1 = "";
    const randomNumberP1 = Math.floor((Math.random() * 3) + 1);
    if (randomNumberP1 === 1) {
        resultP1 = "paper";
    } else if (randomNumberP1 === 2) {
        resultP1 = "rock";
    } else {
        resultP1 = "scissors";
    }
    return resultP1;
}

function player2 () {
    let resultP2 = "";
    const randomNumberP2 = Math.floor((Math.random() * 3) + 1);
    if (randomNumberP2 === 1) {
        resultP2 = "paper";
    } else if (randomNumberP2 === 2) {
        resultP2 = "rock";
    } else {
        resultP2 = "scissors";
    }
    return resultP2;
}



const rps = (p1, p2) => {
    let resultGame = "";
    if (p1 === p2) {
        resultGame = "Draw!";
    } else if (p1 === "paper" ) {
        const
    }
};