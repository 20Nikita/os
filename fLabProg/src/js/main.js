import {modalAction} from "./modals";
import {algoProcess} from "./btnsActions";
import {curtainAnim} from "./curtainsAnim";

import {algorithmsEnum} from "./algorithms";

window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    const fifoBtn = document.getElementById("fifo-generate"),
        strfBtn = document.getElementById("strf-generate");

    modalAction();
    // curtainAnim();

    algoProcess(algorithmsEnum.FIFO, fifoBtn);
    algoProcess(algorithmsEnum.STRF, strfBtn);
});