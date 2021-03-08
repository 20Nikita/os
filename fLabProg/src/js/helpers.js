import {jStat} from "jstat"

const MEAN_TIME = 5,
    LOGBASE = 0.8;

const containerEl = document.querySelector(".container");

let mainArr = [];

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}


function paintCell (items) {
    let string = document.createElement("div");
    string.classList.add("task-string")

    let cell = document.createElement("div");
    cell.classList.add("item")
    string.appendChild(cell);
}

export const generate = (tasksNum) => {
    for(let i = 0; i < tasksNum; i++){
        let data = [];
        data.id = i;
        data.readyTime = Math.floor(jStat.normal.sample(MEAN_TIME, MEAN_TIME * 2));
        if(data.readyTime < 0) data.readyTime = 0;
        data.workTime = Math.floor(getBaseLog(LOGBASE, 1 - Math.random())) + 1;
        data.prior = 5;
        mainArr.push(data);
    }

    return mainArr;
}

export const fifoAlgo = (data) => {
    let resultArr = [],
        resultItem = [],
        lastWorkTime = 0;

    data.sort(( a, b ) =>  a[1] - b[1]);

    for(let i = 1; i < data.length; i++){

    }
}