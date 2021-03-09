import {generate, paintNums, paintString, processArray} from "./helpers";
import {algorithmsEnum, fifo, strf} from "./algorithms";


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
            default:
                console.log("We can't process such type of algorithm")
        }

        let processedData = processArray(data);
        paintNums(processedData, tactWrapper);
        paintString(processedData, cellWrapper);
    })
}