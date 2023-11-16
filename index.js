let userName = document.querySelector("#username");
let addUser = document.querySelector("#addUser");
let btnTxt = addUser.innerText;
let msgBox = document.querySelector("#msg");
let records = document.querySelector("#records");
let editId = null;
let showMsgTag;
let toggleInputs = document.querySelector("#toggleInputs");

let todoLists = [];
let searchBox = document.querySelector("#search");
let txtInputs = document.querySelector(".txtInputs");



let todos = localStorage.getItem("todoLists");
if (todos) {
  todoLists = JSON.parse(todos);
}



toggleInputs.addEventListener("click", () => {
  txtInputs.style.display = "flex";
  toggleInputs.style.display = "none";
});

addUser.addEventListener("click", () => {
  const val = userName.value;
  if (val !== "" && val.length>1) {
    if (editId != null) {
      // updating existing task
      const todoObj = { taskName: val } || [];
      todoLists.splice(editId, 1, todoObj);
      editId = null;
      addUser.innerText = btnTxt;
      addUser.style.backgroundColor = "#0dcaf0";
      showMsg("List Updated Succefully", "bgGreen");
    } else {
      // adding new task
      const todoObj = { taskName: val } || [];
      todoLists.unshift(todoObj);
      showMsg("Task added Succefully", "bgGreen");
    }
    localStorage.setItem("todoLists", JSON.stringify(todoLists));
    userName.value = "";
    displayTodos();
    txtInputs.style.display = "none";
    toggleInputs.style.display = "block";
  } else {
    showMsg("Can not blank & should be more then 2 character", "bgRed");
  }
});

const displayTodos = () => {
  let trHtml = "";
  if (todoLists != null) {
    todoLists.forEach((todoList, id) => {
      editId = id + 1;
      trHtml += `<tr>
        <th scope="row">${editId}</th>
        <td>${todoList.taskName}</td>
        <td>
        <i class="btn text-white fa fa-edit btn-info mx-2" onclick="editRow(${id})"></i>
        <i class="btn btn-danger text-white fa fa-trash" onclick="deleteRow(${id})"></i>
        </td>
        </tr>`;
    });
    records.innerHTML = trHtml;
    editId = null;
  }
};

displayTodos();

// Edit Functionality
const editRow = (id) => {
  editId = id;
  userName.value = todoLists[id].taskName;
  addUser.innerText = "Update Task";
  addUser.style.backgroundColor = "green";
  txtInputs.style.display = "flex";
  toggleInputs.style.display = "none";
};

// Delete Functionality
const deleteRow = (id) => {
  todoLists.splice(id, 1);
  localStorage.setItem("todoLists", JSON.stringify(todoLists));
  displayTodos();
  showMsg("Task deleted Succefully", "bgRed");
};
msgBox.innerHTML = "";

const showMsg = (msg, bgColor) => {
  msgBox.innerHTML = `
  <div class="${bgColor}"><h2>${msg}</h2></div>
  `;
  setTimeout(() => {
    msgBox.innerHTML = "";
  }, 1500);
};

// Search Functionality 
searchBox.addEventListener("keyup", (event) => {
  let tableTr = document.querySelectorAll("#records tr");
  let searchTxt = event.target.value.toLowerCase();
  console.log(searchTxt);

  records.innerHTML = "";

  tableTr.forEach((tr, id) => {
    let td = tr.querySelectorAll("td");
    if (td[0].innerText.toLowerCase().indexOf(searchTxt) > -1) {
      records.appendChild(tr);
    }
  });
});
