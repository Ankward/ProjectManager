var newtask;
var newproject;

class task {
    constructor(name, id, color) {
        this.name = name;
        this.id = id;
        this.color = color;
    }

    make1() {
        var div = document.createElement('div');
        div.style.height = "200px";
        div.style.width = "200px";
        div.style.backgroundColor = "gray";
        div.style.marginLeft = "50px";
        div.style.marginTop = "50px";
        div.style.cssFloat = "left";
        div.innerHTML = "New Project";
        div.id = "info";
        var input = document.createElement('input');
        input.type = "text";
        input.name = "projectName";
        input.value = "Name";
        var input2 = document.createElement('input');
        input2.type = "text";
        input2.name = "description";
        input2.value = "Description";
        div.appendChild(input);
        div.appendChild(input2);
        PList.appendChild(div);
    }
}

window.onload = function () {
    document.getElementById("block").onclick = function () {
        newtask = new task("Kim", 1, "Blå");
        newtask.make1();
        
    }
}