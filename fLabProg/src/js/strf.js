import { generate } from "./helpers";

export function strf (array) {
let array1 = array.slice()
console.log(array1)
let globalTime = 0
array.sort((a,b) => a["readyTime"] - b["readyTime"])
for (let i = 0; i < array.length; i++){
    
    for (let j = i; j < array.length; j++){

        if (globalTime < array[j]["readyTime"]){
            break
        }
        if (array[i]["workTime"] > array[j]["workTime"]){
            let t = array[i]
            array[i] = array[j]
            array[j] = t
        }
    }
    globalTime += array[i]["workTime"]
}
return array
}