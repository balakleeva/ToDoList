const todoArray = [
    {
        id: 1,
        text: "First Todo",
        done: false
    }, {
        id: 2,
        text: "Second Todo",
        done: true
    }
]

var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var doneTasksBtn = document.querySelector(".done");
var allTasksBtn = document.querySelector(".all");
var tasks = document.getElementsByTagName("LI");


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
	var container = document.querySelector(".todos");
	container.classList.add('doneContainer');
});


allTasksBtn.addEventListener("click", function () {
   var all = document.querySelector(".todos");
   all.classList.remove('doneContainer');
});


function loadToDo() {
    if (localStorage.getItem("todoList")){
        ul.innerHTML = localStorage.getItem("todoList");
    }
}

loadToDo();