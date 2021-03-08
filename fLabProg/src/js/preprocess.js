document.getElementById("myBtn").addEventListener("click", function() {
  let boof = ["sfesr"]
  let reader = new FileReader();
  reader.addEventListener('load', function() {
    document.getElementById('file').innerText = this.result;
  });
  reader.readAsText(document.querySelector('input').files[0]);
    reader.onload = function() {
      boof = reader.result.split("\n")
      let mainArr = [];
      for (let i in boof){
        let t = boof[i].split(", ")
        t[3]= t[3].split(";")[0]
        let data = [];
        data.id = t[0];
        data.readyTime = Number(t[1])
        data.workTime = Number(t[2])
        data.prior = Number(t[3])
        mainArr.push(data);
        }
        console.log(mainArr)
    };
    reader.onerror = function() {
      console.log(reader.error);
      return 1
    };
});