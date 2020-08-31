var newtask;
var newproject;

class task {
    constructor(name, id, color) {
        this.name = name;
        this.id = id;
        this.color = color;
    }

    make() {
        var div = document.createElement('div');
        div.style.height = "200px";
        div.style.width = "200px";
        div.style.backgroundColor = "blue";
        div.style.marginLeft = "50px";
        div.style.marginTop = "50px";
        div.style.cssFloat = "left";

        var label = document.createElement('label');
        label.title = "projectName";
        label.style.backgroundColor = "black";
        "Project name: "

        var input = document.createElement('input');
        input.type = "text";
        input.name = "projectName";
        input.id = "projectname";

        console.log(document.body.appendChild(div));
        console.log(document.body.appendChild(label));
        console.log(document.body.appendChild(input));
    }
}

window.onload = function () {
    document.getElementById("block").onclick = function () {
        newtask = new task("Kim", 1, "Blå");
        newtask.make();
    }
}