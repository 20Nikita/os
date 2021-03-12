import {algoProcess} from "./modules/algoProcess";
import {loadToInput} from "./modules/loadFileProcess";
import {checkNums, validateInput} from "./helper/helpers";

window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    const generateBtn = document.querySelector(".btn-generate"),
        uploadBtn = document.querySelector(".btn-upload");

    let inputToValidate = document.querySelector(".generate-area");

    let isValidField = false;

    inputToValidate.addEventListener("input", function () {
        let val = this.value.replace(/^0|\D/g, '');
        this.value = val;

        console.log(this.value.length)
        if(this.value.length >= 1){
            isValidField = true;
        }
        else{
            isValidField = false;
        }

        if(isValidField) algoProcess(generateBtn);                       //запускаем моделирование для данных, сгенерированных на клиенте
    })

    loadToInput();

    algoProcess(uploadBtn, true);     //запускаем моделирование для данных, загруженных из файла
});