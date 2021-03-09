export const loadFileProcess = () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, i) => {
    let uploadBtn = cards[i].querySelector(".btn--upload");
    // срабатывает по нажатию кнопки myBtn
    uploadBtn.addEventListener("click", function() {
      // создать файловую переменную
      let reader = new FileReader();
      console.log(reader)

      // загрузить текст из первого загруженного пользователем файла в переменную reader
      reader.addEventListener('load', function() {
        card.querySelector('.file').innerText = this.result;
      });
      reader.readAsText(cards[i].querySelector('input').files[0]);


      // срабатывает после загрузки файла
      reader.onload = function() {
        let mainArr = [];
        // разбить текст в файле на масив строк
         let boof = reader.result.split("\n");
        console.log(boof)
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

        return mainArr;
      };
      // не получилось прочитать файл
      reader.onerror = function() {
        console.log(reader.error);
        return 1
      };
    });
  })
}