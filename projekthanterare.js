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
        
        if ($(".a")[0]){
            div.className = 'b';
            div.style.backgroundColor = "green";
        } else {
            
        }
        if ($(".b")[0]){
            div.className = 'c';
            div.style.backgroundColor = "yellow";
        } else {
            
        }
       
        document.body.appendChild(div);

        
    }
}

    
window.onload = function () {
    document.getElementById("block").onclick = function () {
        newtask = new task("Kim", 1, "Blå");
        newtask.make();

    }
}
