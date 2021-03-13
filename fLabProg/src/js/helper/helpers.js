import {jStat} from "jstat"

const MEAN_TIME = 20,
    LOGBASE = 0.8;

const getBaseLog = (x, y) => {
    return Math.log(y) / Math.log(x);
}

const pushData = (arr, state) => {
    arr.push(state)
}

function createMask(e){
    let matrix ='+7 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if(def.length >= val.length){
        val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
}

export const validateInput = () => {

}
export const checkNums = (selector, isValidField) => {
    let inputToValidate = document.querySelector(selector);
    if (inputToValidate){
        inputToValidate.addEventListener("input", function () {
            let val = this.value.replace(/\D/g, '');
            this.value = val;

            if(this.value >= 1){
                isValidField = true;
                return isValidField;
            }
            else{
                isValidField = false;
                return isValidField;
            }
        })
    }
}
// export const checkNums = (selector, isValidField) => {
//     let inputToValidate = document.querySelector(selector);
//     if (inputToValidate){
//         inputToValidate.addEventListener("input", function () {
//             let val = this.value.replace(/\D/g, '');
//             this.value = val;
//
//             if(this.value >= 1){
//                 isValidField = true;
//                 return isValidField;
//             }
//             else{
//                 isValidField = false;
//                 return isValidField;
//             }
//         })
//     }
// }

export const generate = async () => {
    return new Promise((resolve, reject) => {
        const tasksNum = document.querySelector(".generate-area").value;
        let mainArr = [];

        if(!tasksNum){
            reject("Поле должно быть заполнено")
        }

        for (let i = 0; i < tasksNum; i++) {
            let data = [];
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

    let maxLength = resultArr.length - 1;
    
    for(let i = 0; i < resultArr.length; i++){
        for(let j = resultArr[i].length; j < resultArr[maxLength].length; j++)
            pushData(resultArr[i], 0);
    }

    resultArr.sort((a, b) => a[0] - b[0]);

    for(let i = 0; i < resultArr.length-1; i++){
        if(resultArr[i][0] === resultArr[i+1][0]){
            for(let j = 1; j < resultArr[i].length; j++){
                if(resultArr[i][j] > resultArr[i+1][j])
                    resultArr[i+1][j] = resultArr[i][j]
            }
            resultArr.splice(i, 1)
            i-=1
        }
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

        for(let j = 1; j < data[0].length; j ++) {
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
    const tableHeader = document.querySelector(".input-table-header");
    const clearTable = (firstEl) => {                              //очистка таблиц
        if(firstEl) {
            while (firstEl.nextElementSibling) {
                firstEl.nextElementSibling.remove();
            }
        }
    }

    clearTable(tableHeader);

    inpData.sort((a, b) => a["id"] - b["id"]);

    for (let i = 0; i < inpData.length; i++) {
        let dataString = document.createElement("div");
        dataString.classList.add("input-data-string");
        for(let data in inpData[i]){
            let dataBlock = document.createElement("div");
            dataBlock.classList.add("input-data-block");
            dataBlock.innerText = `${inpData[i][data]}`;
            dataString.appendChild(dataBlock);
        }

        attachToEl.appendChild(dataString);
    }
}