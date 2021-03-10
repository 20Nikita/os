export const calcStats = (processedData, appendToEl) => {
    let resultArr = [];
    let t_o = 0;
    let t_i = 0;
    for (let i = 0; i < processedData.length;i++){
        for (let j = 1; j < processedData[i].length;j++){
            if( processedData[i][j] === 1){
                t_i+=1;
                t_o+=1;
            }
            else if(processedData[i][j] === 2){
                t_i+=1;
            }
        }
    }
    resultArr.push(t_o/processedData.length)
    resultArr.push(t_i/processedData.length)

    appendToEl.innerHTML = `${resultArr}`
}