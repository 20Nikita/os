// срабатывает по нажатию кнопки myBtn 
document.getElementById("myBtn").addEventListener("click", function() {
  // создать файловую переменную
  let reader = new FileReader();      

  // загрузить текст из первого загруженного пользователем файла в переменную reader
  reader.addEventListener('load', function() {
    document.getElementById('file').innerText = this.result;
  });
  reader.readAsText(document.querySelector('input').files[0]);

  // срабатывает после загрузки файла
    reader.onload = function() {
      // разбить текст в файле на масив строк
      boof = reader.result.split("\n")
      let mainArr = [];               // нада сделать глобальной переменной
      // пройтись по каждой строке
      for (let i in boof){
        
        let t = boof[i].split(", ")   // разбить строку на подстроки
        t[3]= t[3].split(";")[0]      // удалить символ ;
        let data = [];                // создать бач
        data.id = t[0];               // добавить в него id
        data.readyTime = Number(t[1]) // добавить в него время подачи заявки
        data.workTime = Number(t[2])  // добавить в него время работы
        data.prior = Number(t[3])     // добавить в него приоритет
        mainArr.push(data);           // загрузить элемент бача в массив
        }
    };
    // не получилось прочитать файл
    reader.onerror = function() {
      console.log(reader.error);
      return 1
    };
});