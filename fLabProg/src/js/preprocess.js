
export function readFile(input) {

    let reader = new FileReader();
  
    reader.readAsText(input);
  
    reader.onload = function() {
      console.log(reader.result);
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
  
  }