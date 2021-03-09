import {algorithmsEnum, fifo, strf} from "./algorithms";

import {generate, paintNums, paintString, processArray} from "./helpers";
import {loadFileProcess} from "./preprocess";


export const algoProcess = (algorithm, btn) => {
    const cellWrapper = document.querySelector(".task-wrapper"),
        tactWrapper = document.querySelector(".tact-wrapper");

    const clearTable = (wrapper) => {
        if(wrapper) {
            while (wrapper.firstChild) {
                wrapper.removeChild(wrapper.firstChild);
            }
        }
    }

    btn.addEventListener("click", () => {
        clearTable(tactWrapper);
        clearTable(cellWrapper);

        let data = [];
        switch (algorithm){
            case algorithmsEnum.FIFO:
                data = fifo(generate(20));
                break;
            case algorithmsEnum.STRF:
                data = strf(generate(20));
                break;
            case algorithmsEnum.UPLOAD_FIFO:
                data = fifo(loadFileProcess());
                break;
            case algorithmsEnum.UPLOAD_STRF:
                data = loadFileProcess();
                // data = strf(loadFileProcess());
                break;
            default:
                console.log("We can't process such type of algorithm")
        }

        let processedData = processArray(data);
        paintNums(processedData, tactWrapper);
        paintString(processedData, cellWrapper);
    })
}