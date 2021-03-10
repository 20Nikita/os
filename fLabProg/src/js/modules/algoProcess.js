import {fifo, strf} from "./algorithms";
import {generate, paintNums, paintString, processArray} from "../helper/helpers";
import {loadFileProcess} from "./loadFileProcess";
import {calcStats} from "./calcStats";


export const algoProcess = (btn, haveUploadData = false) => {
    const fifoWrapper = document.querySelector(".fifo-wrapper"),
        strfWrapper = document.querySelector(".strf-wrapper"),
        taskWrappers = document.querySelectorAll(".task-wrapper"),
        tactWrappers = document.querySelectorAll(".tact-wrapper");

    const clearTable = (wrappers) => {                              //очистка таблиц
        if(wrappers) {
            wrappers.forEach(wrapper => {
                while (wrapper.firstChild) {
                    wrapper.removeChild(wrapper.firstChild);
                }
            })
        }
    }

    btn.addEventListener("click", async () => {                             //функция асинхронная, т.к. внутри есть асинхронный код
        clearTable(taskWrappers);                                           //очищаем таблицы
        clearTable(tactWrappers);

        let data = [];

        haveUploadData ? data = await loadFileProcess() : data = generate(20);      //инициализируем исходные данные

        //расчет, отрисовка для FIFO
        let fifoData = processArray(fifo(data));
        paintNums(fifoData, fifoWrapper.querySelector(".tact-wrapper"));
        paintString(fifoData, fifoWrapper.querySelector(".task-wrapper"));
        calcStats(fifoData, fifoWrapper.querySelector(".stats"));

        //расчет, отрисовка для STRF
        let strfData = processArray(strf(data));
        paintNums(strfData, strfWrapper.querySelector(".tact-wrapper"));
        paintString(strfData, strfWrapper.querySelector(".task-wrapper"));
        calcStats(strfData, strfWrapper.querySelector(".stats"));
    })
}