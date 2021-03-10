export const loadFileProcess = async () => {        // функция асинхронная

 return new Promise((resolve, reject) => {
   let reader = new FileReader();                   // создаем файловую переменную
   let loadData = [];

   reader.readAsText(document.querySelector('.upload-area').files[0]); // считываем данные из файла асинхронно

   reader.onerror = () => {                         // не удалось загрузить файл
     reject(reader.error);
   };

   reader.onload = () => {                          // ждем, пока файл загрузится
     let boof = reader.result.split("\n");          // разбиваем текст в файле на масив строк
     for (let i = 0; i < boof.length; i++) {        // пройтись по каждой строке
       let data = [];                               // создать бач
       let t = boof[i].split(", ")         // разбить строку на подстроки
       t[3] = t[3].split(";")[0]           // удалить символ ;
       data.id = Number(t[0]);                      // добавить в него id
       data.readyTime = Number(t[1]);               // добавить в него время подачи заявки
       data.workTime = Number(t[2]);                // добавить в него время работы
       data.prior = Number(t[3]);                   // добавить в него приоритет
       loadData.push(data);                         // загрузить элемент бача в массив
     }
     resolve(loadData);                             //возвращаем данные из промиса
   };
 })
}