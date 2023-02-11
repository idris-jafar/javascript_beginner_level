document.addEventListener("DOMContentLoaded", (e)=>{

// Abi birinci function yaradaq. Sira ile
// Umumiyyetle Local storage ucun

let storageClass = new Idris();

// html components
let addBtn = document.getElementById("todoAdd");
let todoInput = document.getElementById("todoInput");

addBtn.addEventListener("click", addTodo);

function addTodo(e) {

  e.preventDefault();

  let newdata = todoInput.value;
  var existArray = [];

  if (storageClass.keyLocalIsExist("data") === false) {
    storageClass.setLocalValue("data", existArray);
  }

  existArray = storageClass.getLocalValue("data");

  existArray.push(newdata);

  storageClass.setLocalValue("data", existArray);

}
});
