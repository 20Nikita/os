import {jStat} from "jstat"

const MEAN_TIME = 5,
    LOGBASE = 0.8;

const getBaseLog = (x, y) => {
    return Math.log(y) / Math.log(x);
}

const pushData = (arr, state) => {
    arr.push(state)
}

export const generate = (tasksNum) => {
    let mainArr = [];

    for(let i = 0; i < tasksNum; i++){
        let data = [];
        data.id = i;
        data.readyTime = Math.floor(jStat.normal.sample(tasksNum, tasksNum));
        if(data.readyTime < 0) data.readyTime = 0;
        data.workTime = Math.floor(getBaseLog(LOGBASE, 1 - Math.random())) + 1;
        data.prior = 5;
        mainArr.push(data);
    }

    return mainArr;
}

export const processArray = (data) => {
    let resultArr = [],
        resultItem = [],
        lastWorkTime = 0;

    resultItem.push(data[0]["id"])

    for(let j = 0; j < data[0]["readyTime"]; j++){
        pushData(resultItem, 0)
    }
    for(let j = 0; j < data[0]["workTime"]; j++){
        pushData(resultItem, 2)
    }

    lastWorkTime = resultItem.length;
    resultArr.push(resultItem)

    for(let i = 1; i < data.length; i++){
        resultItem = [];
        resultItem.push(data[i]["id"]);

        for(let j = 0; j < data[i]["readyTime"]; j++){
            pushData(resultItem, 0)
        }

        if(lastWorkTime > (data[i]["readyTime"])){
            let diff = lastWorkTime - data[i].readyTime;

            for(let j = 0; j < diff - 1; j++){
                pushData(resultItem, 1)
            }
        }

        for(let j = 0; j < data[i]["workTime"]; j++){
            pushData(resultItem, 2)
        }

        lastWorkTime = resultItem.length;
        resultArr.push(resultItem);
    }

    return resultArr;
}

export const paintNums = (data, attachToEl) => {
    let maxLengthIndex = data.reduce((p, c, i, a) => a[p].length > c.length ? p : i, 0);
    for (let i = 0; i < data[maxLengthIndex].length - 1; i++){
        let cell = document.createElement("div");
        cell.classList.add("item");
        cell.innerText = `${i}`;
        attachToEl.appendChild(cell);
    }
}

export const paintString = (data, attachToEl) => {

    for(let i = 0; i < data.length; i++){
        let string = document.createElement("div");
        string.classList.add("task-string");
        let idCell = document.createElement("div");
        idCell.classList.add("item", "task-id");
        idCell.innerText = `P${data[i][0]}`
        string.appendChild(idCell);

        for(let j = 1; j < data[i].length; j ++) {
            let cell = document.createElement("div");
            cell.innerText = "Б"
            let styleClass = ["item"];

            if(data[i][j] === 1) {
                cell.innerText = "Г"
                styleClass.push("item--r");
            }
            else if(data[i][j] === 2) {
                cell.innerText = "Р"
                styleClass.push("item--w");
            }

            cell.classList.add(...styleClass)
            string.appendChild(cell);
        }
        attachToEl.appendChild(string);
    }
}