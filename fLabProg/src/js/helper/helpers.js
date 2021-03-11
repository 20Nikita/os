import {jStat} from "jstat"

const MEAN_TIME = 20,
    LOGBASE = 0.8;

const getBaseLog = (x, y) => {
    return Math.log(y) / Math.log(x);
}

const pushData = (arr, state) => {
    arr.push(state)
}

// <<<<<<< HEAD
// export const generate = (tasksNum) => {
//     let mainArr = [];

//     for(let i = 0; i < tasksNum; i++){
//         let data = [];
//         data.id = Math.floor(Math.random()*tasksNum);
//         data.readyTime = Math.floor(jStat.normal.sample(tasksNum, tasksNum));
//         if(data.readyTime < 0) data.readyTime = 0;
//         data.workTime = Math.floor(getBaseLog(LOGBASE, 1 - Math.random())) + 1;
//         data.prior = 5;
//         mainArr.push(data);
//     }
// =======
export const generate = async (tasksNum) => {
    return new Promise((resolve) => {
        let mainArr = [];

        for (let i = 0; i < tasksNum; i++) {
            let data = [];
            data.uid = i;
            data.id = Math.floor(Math.random() * tasksNum);
            data.readyTime = Math.floor(jStat.normal.sample(MEAN_TIME, MEAN_TIME));
            if (data.readyTime < 0) data.readyTime = 0;
            data.workTime = Math.floor(getBaseLog(LOGBASE, 1 - Math.random())) + 1;
            data.prior = 5;
            mainArr.push(data);
        }


        resolve(mainArr);
    })
}

export const processArray = (data) => {
    let resultArr = [],
        resultItem = [],
        lastWorkTime = 0;

    resultItem.push(data[0]["uid"]);
    resultItem.push(data[0]["id"]);

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
        resultItem.push(data[i]["uid"]);
        resultItem.push(data[i]["id"]);

        for(let j = 0; j < data[i]["readyTime"]; j++){
            pushData(resultItem, 0)
        }

        if(lastWorkTime > (data[i]["readyTime"])){
            let diff = lastWorkTime - data[i].readyTime;

            for(let j = 0; j < diff - 2; j++){
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
    for (let i = 0; i < data[maxLengthIndex].length - 2; i++){
        let cell = document.createElement("div");
        cell.classList.add("item");
        cell.innerText = `${i}`;
        attachToEl.appendChild(cell);
    }
}

export const paintString = (data, attachToEl) => {

    data.sort((a, b) => a[0] - b[0]);

    for(let i = 0; i < data.length; i++){
        let string = document.createElement("div");
        string.classList.add("task-string");
        let idCell = document.createElement("div");
        idCell.classList.add("item", "task-id");
        idCell.innerText = `P${data[i][1]}`
        string.appendChild(idCell);

        for(let j = 2; j < data[i].length; j ++) {
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

export const paintInputData = (inpData, attachToEl) => {
    for (let i = 0; i < inpData.length; i++) {
        let dataString = document.createElement("div");
        dataString.classList.add("input-data-string");
        for(let data in inpData[i]){
            if(data !== "uid") {
                let dataBlock = document.createElement("div");
                dataBlock.classList.add("input-data-block");
                dataBlock.innerText = `${inpData[i][data]}`;
                dataString.appendChild(dataBlock);
            }
        }

        attachToEl.appendChild(dataString);
    }
}