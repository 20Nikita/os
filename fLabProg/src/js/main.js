import {jStat} from "jstat"

const VALUES = 5;
const LOGBASE = 0.8;
const containerEl = document.querySelector(".container");

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

function paintArr (item) {
    let p = document.createElement("p");
    p.innerText = `${item.id}, ${item.readyTime}, ${item.workTime}, ${item.prior}`
    containerEl.appendChild(p);
}


let testArr = [];

for(let i = 0; i < 20; i++){
    let data = [];
    data.id = i;
    data.readyTime = Math.floor(jStat.normal.sample(VALUES, VALUES * 2));
    if(data.readyTime < 0) data.readyTime = 0;
    data.workTime = Math.floor(getBaseLog(LOGBASE, 1 - Math.random())) + 1;
    data.prior = 5;
    paintArr(data);
    testArr.push(data);
}

testArr.sort(( a, b ) =>  a[1] - b[1]);
console.log(testArr);