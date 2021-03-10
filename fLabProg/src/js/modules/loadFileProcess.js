export const loadFileProcess = async () => {

 return new Promise((resolve, reject) => {
   let reader = new FileReader();  // создать файловую переменную
   let loadData = [];

   reader.readAsText(document.querySelector('.upload-area').files[0]);

   // не получилось прочитать файл
   reader.onerror = () => {
     console.log(reader.error);
     return 1
   };

   // срабатывает после загрузки файла
   reader.onload = () => {
     // разбить текст в файле на масив строк
     let boof = reader.result.split("\n");
     // пройтись по каждой строке
     for (let i = 0; i < boof.length; i++) {
       let data = [];                         // создать бач
       let t = boof[i].split(", ")   // разбить строку на подстроки
       t[3] = t[3].split(";")[0]     // удалить символ ;
       data.id = Number(t[0]);                       // добавить в него id
       data.readyTime = Number(t[1]);                 // добавить в него время подачи заявки
       data.workTime = Number(t[2]);                  // добавить в него время работы
       data.prior = Number(t[3]);                    // добавить в него приоритет
       loadData.push(data);                   // загрузить элемент бача в массив
     }
     resolve(loadData);
   };
 })
}