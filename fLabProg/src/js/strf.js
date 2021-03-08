import { generate } from "./helpers";

export function strf () {
let globalTime = 0
let array = generate(20)
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
console.log(array)
}