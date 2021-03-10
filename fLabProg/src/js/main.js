
import {algoProcess} from "./modules/algoProcess";
import {algorithmsEnum} from "./modules/algorithms";


window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    const generateBtn = document.querySelector(".btn-generate"),
        uploadBtn = document.querySelector(".btn-upload");
    //     strfBtn = document.getElementById("strf-generate"),
    //     fifoUploadBtn = document.getElementById("fifo-upload"),
    //     strfUploadBtn = document.getElementById("strf-upload");

    // let mainArr = [],
    //     firstAnim = false;

    // curtainAnim();

    algoProcess(generateBtn);
    algoProcess(uploadBtn, true);
    // algoProcess(algorithmsEnum.UPLOAD_FIFO, fifoUploadBtn);
    // algoProcess(algorithmsEnum.UPLOAD_STRF, strfUploadBtn);

});