var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var doneTasksBtn = document.querySelector(".done");
var allTasksBtn = document.querySelector(".all");


input.addEventListener("keypress", function(keyPressed){
    if(keyPressed.which === 13){
        var li = document.createElement("li");

        var newTodo = this.value;
        this.value = " " ;

        ul.appendChild(li).append(newTodo);
        localStorage.setItem("todoList", ul.innerHTML );

    }

});


ul.addEventListener("click", function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    },false
);


saveBtn.addEventListener("click", function (ev) {
    if (!input.value) return;
    var new_li = document.createElement("li");
    new_li.innerText = input.value;
    ul.appendChild(new_li);
    input.value = "";
    localStorage.setItem("todoList", ul.innerHTML );
});


clearBtn.addEventListener('click', function () {
   ul.innerHTML = "";
   localStorage.removeItem("todoList");
});


doneTasksBtn.addEventListener("click", function() {
	var done = document.getElementsByClassName("checked");
	ul.append(done[0]);
});


allTasksBtn.addEventListener("click", function () {
   localStorage.setItem("todoList");
})

function loadToDo() {
    if (localStorage.getItem("todoList")){
        ul.innerHTML = localStorage.getItem("todoList");
    }
}

loadToDo();