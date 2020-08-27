var newtask;

class task {
    constructor(name, id, color) {
        this.name = name;
        this.id = id;
        this.color = color;
    }

    make() {
        var div = document.createElement('div');
        div.style.height = "100px";
        div.style.backgroundColor = "black";
        


        document.body.appendChild(div);
    }
}

window.onload = function () {
    document.getElementById("block").onclick = function () {
        newtask = new task("Kim", 1, "Blå");
        newtask.make();

    }
}