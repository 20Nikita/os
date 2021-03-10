import {fifoAlgo, generate, paintNums, paintString, Effectevli} from "./helpers";
import {strf} from "./strf";
import {readFile} from "./preprocess";

window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    const cellWrapper = document.querySelector(".task-wrapper");
    const tactWrapper = document.querySelector(".tact-wrapper");
    // let data = generate(20);
    // let processedData = fifoAlgo(data);
    // paintNums(processedData, tactWrapper);
    // paintString(processedData, cellWrapper);

    let data = strf(generate(3));
    let processedData = fifoAlgo(data)
    console.log(processedData)
    console.log(Effectevli(processedData))
    paintNums(processedData, tactWrapper);
    paintString(processedData, cellWrapper);
    
});