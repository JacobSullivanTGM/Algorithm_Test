"use strict";

// Practice 1

function maps(x) {
  x.map(function (el) {
    console.log(el * 2);
  });
}

const data1 = [1, 2, 3];
const data2 = [4, 1, 1, 1, 4];
const data3 = [2, 2, 2, 2, 2, 2];
maps(data1);
maps(data2);
maps(data3);

// Practice 2
/*
function maps(x) {
  x.map((el) => {
    console.log(Math.pow(el, 2));
  });
}

const data1 = [1, 2, 3];
const data2 = [4, 1, 1, 1, 4];
const data3 = [2, 2, 2, 2, 2, 2];
console.log(maps(data1));
*/
