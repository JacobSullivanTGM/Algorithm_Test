"use strict";

function scoreRating (rate) {
    // let hasil = null;
    if (rate >= 90) {
        return  "Excellent";
    } else if (rate >= 80 && rate <= 90) {
        return  "Great";
    } else if (rate >= 70 && rate <= 80) {
        return  "Nice";
    } else if (rate >= 60 && rate <= 70) {
        return  "Average";
    } else {
        return  "bad";
    }
    // return hasil;
}

console.log(scoreRating(67));