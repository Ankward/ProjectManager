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
        this.id = columnid;

        this.element = document.createElement('li');
        this.element.className = 'dragable';
        this.element.id = this.id;
        //colums.push(columnid);
        var imageholder = document.createElement('div');
        imageholder.className = 'imageholder';
        imageholder.id = columnid;
        var image = document.createElement('img');
        image.src = "miniplus.png";
        image.className = 'addtask';


        imageholder.onclick = function () {
            //div.appendChild(createtask);
            var temp = new task("", "", imageholder.id);
            temp.make(imageholder.id);
            tasks.push(temp);

        }

        columnid += 1;

        if ($(".dragable")[0]) {
            this.element.className = 'dragable';
        }

        if ($('[className="dragable"]').length > 1) {
            this.element.className = 'dragable';
        }



        imageholder.appendChild(image);
        this.element.appendChild(imageholder);
        document.getElementById("block").appendChild(this.element);

        $(function () {
            $("#block").sortable({
                start: function (event, ui) {
                    var start_pos = ui.item.index();
                    ui.item.data('start_pos', start_pos);
                },
                update: function (event, ui) {
                    var index = 0;
                    $(".dragable").each(function () {
                        this.id = index;
                        index++;
                    });

                }
            });

        });
        $('#block').append(this.element);

        $(".dragable").sortable({
            connectWith: ".dragable"
        }).disableSelection();


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
        document.getElementById(parentId).appendChild(this.element);



        //imageholder.appendChild(image);
        //div.appendChild(imageholder);
        //document.getElementById("block").appendChild(div);
        // $('#' + div.id).css('left', (20 + div.id * 300) + 'px');

        //drabable disabled $(function () {  $(".dragable").draggable();  });

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
        colums.push(new category("", 1, "", columnid));
        colums[columnid].make();

        //insertColumn("", "", columnid);
    }
}


async function load() {
    var retVal = await loadObjects();
    for (var i = 0; i < retVal.length; i++) {
        var tempObject = retVal[i];
        //console.log(tempObject["memberId"] + " 1 " + tempObject["color"] + " " + tempObject["categoryId"]);
        colums.push(new category(tempObject["memberId"], 1, tempObject["color"], tempObject["categoryId"] - 1));
        colums[(tempObject["categoryId"] - 1)].make();
    }
}