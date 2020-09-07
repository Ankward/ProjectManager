var newtask;

var columnid = 0;
var taskid = 0;
var colums = new Array();
var tasks = new Array();
var spacebetween = 200;


class category {
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
        this.id = columnid;
        //colums.push(columnid);
        columnid += 1;
        this.element = div;
        var imageholder = document.createElement('div');
        imageholder.className = 'imageholder';
        var image = document.createElement('img');
        image.src = "miniplus.png";
        image.className = 'addtask';

        imageholder.onclick = function () {
            //div.appendChild(createtask);
            var temp = new task("", "", this.id);
            console.log(this.id);
            temp.make(columnid -1);
            tasks.push(temp);
            
        }



        if ($(".dragable")[0]) {
            div.className = 'dragable';
            

        } else {

        }
        if ($('[className="dragable"]').length > 1) {
            div.className = 'dragable';
        } else {

        }


        if ($(".taskstyle")[0]) {
            createtask.className = 'taskstyle';
            

        } else {

        }
        if ($('[className="taskstyle"]').length > 1) {
            createtask.className = 'taskstyle';
        } else {

        }

        
        imageholder.appendChild(image);
        div.appendChild(imageholder);
        document.getElementById("block").appendChild(div);
        //$('#' + createtask.id).css('down', (20 + createtask.id*300) + 'px');
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

class task {
    constructor(name, color, category) {
        this.name = name;
        this.color = color;
        this.category = category;
        this.element = document.body;
    }
    

    updatepos() {

        this.element = this.order;


        this.pos = spacebetween * this.order;

    }

    make(parentId) {


        var div = document.createElement('div');
        div.className = 'taskstyle';
        this.element = div;
        console.log(parentId);
        document.getElementById(parentId).appendChild(this.element);


        
        //imageholder.appendChild(image);
        //div.appendChild(imageholder);
        //document.getElementById("block").appendChild(div);
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
    load();

    document.getElementById("block2").onclick = function () {
        colums.push(new task("", 1, "", columnid));
        colums[columnid].make();
        
        insertColumn("", "", columnid);
    }
}


async function load(){
    var retVal = await loadObjects();
    for(var i = 0; i < retVal.length; i++){
        var tempObject = retVal[i]; 
        console.log(tempObject["memberId"] + " 1 " + tempObject["color"] + " " + tempObject["categoryId"]);
        colums.push(new task(tempObject["memberId"], 1, tempObject["color"], tempObject["categoryId"]-1));
        colums[(tempObject["categoryId"]-1)].make();
    }
}