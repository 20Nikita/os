import { processArray, generate, paintNums, paintString} from "./helpers";
import {fifo, strf} from "./algorithms";
import {modalAction} from "./modals";

window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    const cellWrapper = document.querySelector(".task-wrapper");
    const tactWrapper = document.querySelector(".tact-wrapper");

    modalAction();

    let data = fifo(generate(20));
    let processedData = processArray(data);
    paintNums(processedData, tactWrapper);
    paintString(processedData, cellWrapper);

    // let data = strf(generate(20));
    // let processedData = processArray(data)
    // paintNums(processedData, tactWrapper);
    // paintString(processedData, cellWrapper);
    
});