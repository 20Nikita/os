import {modalAction} from "./modals";
import {algoProcess} from "./btnsActions";
import {curtainAnim} from "./curtainsAnim";

import {algorithmsEnum} from "./algorithms";

window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    const fifoBtn = document.getElementById("fifo-generate"),
        strfBtn = document.getElementById("strf-generate"),
        fifoUploadBtn = document.getElementById("fifo-upload"),
        strfUploadBtn = document.getElementById("strf-upload");

    let mainArr = [],
        firstAnim = false;

    modalAction();
    // curtainAnim();

    algoProcess(algorithmsEnum.FIFO, fifoBtn);
    algoProcess(algorithmsEnum.STRF, strfBtn);
    algoProcess(algorithmsEnum.UPLOAD_FIFO, fifoUploadBtn);
    algoProcess(algorithmsEnum.UPLOAD_STRF, strfUploadBtn);
});