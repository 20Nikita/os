import { generate } from "./helpers";

export function strf (array) {

    let globalTime = 0                                    // глобальное время, текущий момент времини
    array.sort((a,b) => a["readyTime"] - b["readyTime"])  // сортировка масива по времини подачи заявки

    for (let i = 0; i < array.length; i++){               // проход по всему масиву
        for (let j = i; j < array.length; j++){           // проход по не отсартированной части
            // если заявка от элемента еще не поступила то не расматриваем его
            if (globalTime < array[j]["readyTime"]){
                break
            }
            // сортируем по времини работы
            if (array[i]["workTime"] > array[j]["workTime"]){
                let t = array[i]
                array[i] = array[j]
                array[j] = t
            }
        }
        // выполняем следующюю команду
        globalTime += array[i]["workTime"]
    }
    
    return array
}