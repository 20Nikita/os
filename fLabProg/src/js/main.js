import {fifoAlgo, generate, paintNums, paintString} from "./helpers";

window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    const cellWrapper = document.querySelector(".task-wrapper");
    const tactWrapper = document.querySelector(".tact-wrapper");

    let data = generate(20);
    let processedData = fifoAlgo(data);
    paintNums(processedData, tactWrapper);
    paintString(processedData, cellWrapper);
});