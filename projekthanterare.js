var newtask;

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
        //colums.push(columnid);
        columnid += 1;
        this.element = div;
        var imageholder = document.createElement('div');
        imageholder.className = 'imageholder';
        var image = document.createElement('img');
        image.src = "miniplus.png";
        image.className = 'addtask';


        if ($(".dragable")[0]) {
            div.className = 'dragable';
            

        } else {

        }
        if ($('[className="dragable"]').length > 1) {
            div.className = 'dragable';
        } else {

        }


        
        document.getElementById("block").appendChild(div);
       // $('#' + div.id).css('left', (20 + div.id * 300) + 'px');
        
//drabable disabled $(function () {  $(".dragable").draggable();  });

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
    document.getElementById("block2").onclick = function () {
        colums.push(new task("Kim", 1, "Blå", columnid));
        colums[columnid].make();


    }
}