import {fifo, strf} from "./algorithms";
import {generate, paintNums, paintString, processArray} from "../helper/helpers";
import {loadFileProcess} from "./loadFileProcess";
import {calcStats} from "./calcStats";


export const algoProcess = (btn, haveUploadData = false) => {
    const fifoWrapper = document.querySelector(".fifo-wrapper"),
        strfWrapper = document.querySelector(".strf-wrapper"),
        taskWrappers = document.querySelectorAll(".task-wrapper"),
        tactWrappers = document.querySelectorAll(".tact-wrapper");

    const clearTable = (wrappers) => {
        if(wrappers) {
            wrappers.forEach(wrapper => {
                while (wrapper.firstChild) {
                    wrapper.removeChild(wrapper.firstChild);
                }
            })
        }
    }

    btn.addEventListener("click", () => {
        clearTable(taskWrappers);
        clearTable(tactWrappers);

        let data = [];

        haveUploadData ? data = loadFileProcess() : data =  generate(20);

        setTimeout(() => {
            let fifoData = processArray(fifo(data));
            paintNums(fifoData, fifoWrapper.querySelector(".tact-wrapper"));
            paintString(fifoData, fifoWrapper.querySelector(".task-wrapper"));
            calcStats(fifoData, fifoWrapper.querySelector(".stats"));

            let strfData = processArray(strf(data));
            paintNums(strfData, strfWrapper.querySelector(".tact-wrapper"));
            paintString(strfData, strfWrapper.querySelector(".task-wrapper"));
            calcStats(strfData, strfWrapper.querySelector(".stats"));
        }, 1500)

    })
}