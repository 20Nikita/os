import {algoProcess} from "./modules/algoProcess";
import {loadToInput} from "./modules/loadFileProcess";

window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    const generateBtn = document.querySelector(".btn-generate"),
        uploadBtn = document.querySelector(".btn-upload");

    loadToInput();

    algoProcess(generateBtn);                       //запускаем моделирование для данных, сгенерированных на клиенте
    algoProcess(uploadBtn, true);     //запускаем моделирование для данных, загруженных из файла
});