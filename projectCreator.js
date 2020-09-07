var newtask;
var newproject;

var columnid = 0;
var colums = new Array();
var spacebetween = 200;

class project {
    constructor(name, id, date, ) {
        this.name = name;
        this.id = id;
        this.date = date;
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
        this.element = div;
        div.innerHTML = "New Project ";

        var input = document.createElement('input');
        input.type = "text";
        input.name = "projectName";
        input.placeholder = "Name";
        input.className = 'input';

        var input2 = document.createElement('input');
        input2.type = "text";
        input2.name = "description";
        input2.placeholder = "Description";
        input2.className = 'input';

        var btn = document.createElement('button')
        btn.type = "submit";
        btn.value = "submit";
        btn.innerHTML = "Submit";

        if ($(".dragable")[0]) {
            div.className = 'dragable';
           

        } else {

        }
        if ($('[className="dragable"]').length > 1) {
            div.className = 'dragable';
        } else {

        }

        div.appendChild(btn);
        div.appendChild(input);
        div.appendChild(input2);
        document.getElementById("block").appendChild(div);
        
        $( function() {
            $( "#block" ).sortable();
            $( "#block" ).disableSelection();
          } );
        
        this.updatepos();
    }
        
    remove() {
        colums.splice(this.order, 1);
        $("#" + this.order).remove();


        for (var i = 0; i < colums.length; i++) {
            if (colums[i].order > this.order) {
                document.getElementById(colums[i].order).id = (colums[i].order - 1);
                colums[i].order -= 1;
                colums[i].updatepos();
            }
        }
    }
}

window.onload = function () {
    document.getElementById("dot").onclick = function () {
        colums.push(new project("Kim", 1, "Blå", columnid));
        colums[columnid].make();
        
    }
}