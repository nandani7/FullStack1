var todoTextInput = document.querySelector("input");
var addBtn = document.getElementById("addBtn");
var todoList = document.querySelector(".todo-list");

addBtn.onclick = add;
todoList.onclick = checkdelete;

function add(e) {
    e.preventDefault();
    if (todoTextInput.value == "") {
        alert("Please Enter Something!");
    } else {
        var newDiv = document.createElement("div");
        newDiv.classList.add("todo-list-item");

        var newLi = document.createElement("li");
        newLi.innerHTML = todoTextInput.value;
        newDiv.appendChild(newLi);

        var completeButton = document.createElement("button");
        completeButton.classList.add("complete");
        completeButton.innerHTML = '<i class="fa fa-check"></i>';
        newDiv.appendChild(completeButton);

        var deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
        newDiv.appendChild(deleteButton);

        todoList.appendChild(newDiv);

        todoTextInput.value = "";
    }
}

function checkdelete(e) {
    var item = e.target;
    if (item.classList[0] === "delete") {
        var parent = item.parentElement;
        parent.remove();
    }

    if (item.classList[0] === "complete") {
        var parent = item.parentElement;
        parent.classList.toggle("checked")
    }
}