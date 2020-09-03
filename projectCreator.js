var newtask;
var newproject;

var columnid = 0;
var colums = new Array();
var spacebetween = 200;

class task {
    constructor(name, id, color, order) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.order = order;
        this.pos = 0;
        this.element = document.body;
    }

    updatepos() {
        
        this.element = this.order;


        this.pos = spacebetween * this.order;

    }

    make() {
        var div = document.createElement('div');
        div.className = 'dragable';
        div.id = columnid;
        columnid += 1;
        div.style.backgroundColor = "#7495AB";
        this.element = div;
        div.innerHTML = "New Project ";
        var input = document.createElement('input');
        input.type = "text";
        input.name = "projectName";
        input.value = "Name";
        var input2 = document.createElement('input');
        input2.type = "text";
        input2.name = "description";
        input2.value = "Description";
        var btn = document.createElement('button')
        btn.type = "button";
        btn.value = "submit";
        btn.innerHTML = "Submit";

        if ($(".dragable")[0]) {
            div.className = 'dragable';
           

        } else {

        }
        if ($('[className="dragable"]').length > 1) {
            div.className = 'dragable';
            div.style.backgroundColor = "#7495AB";
        } else {

        }

        div.appendChild(btn);
        div.appendChild(input);
        div.appendChild(input2);
        PList.appendChild(div);
        
        $(function () {
            $(".dragable").draggable();
        });

        this.updatepos();
    }
}

window.onload = function () {
    document.getElementById("block").onclick = function () {
        colums.push(new task("Kim", 1, "Blå", columnid));
        colums[columnid].make();
        
    }
}