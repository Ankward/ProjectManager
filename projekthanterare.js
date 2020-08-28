var newtask;

class task {
    constructor(name, id, color) {
        this.name = name;
        this.id = id;
        this.color = color;
    }
 
    make() {
        var div = document.createElement('div');
        div.className = 'a';
        div.style.backgroundColor = "red";


        document.body.appendChild(div);
    }
}

window.onload = function () {
    document.getElementById("block").onclick = function () {
        newtask = new task("Kim", 1, "Blå");
        newtask.make();

    }
}
