// Make connection

var socket = io.connect('http://localhost:3000');

function testfunc() {

    socket.emit("GET_DATA");
    socket.on("GET_DATA_RETURN", ret => {
        document.getElementById('text').innerHTML = ret;
    });


    socket.emit("INSERT_VALUE");


}


async function loadObjects() {
    let promise = new Promise(data => {
        socket.emit("GET_DATA");
        socket.on("GET_DATA_RETURN", ret => {
            data(ret);
            //console.log(ret);
        });
    })

    return promise = await promise;
}

function insertColumn(name, color, id) {
    console.log(name + color + id);
    socket.emit("INSERT_NEW_COLUMN", name, color, id);

}
async function newProject(projectName, description) {
    console.log(projectName + " " + description);


    socket.emit("GET_DATA_RAND");
    socket.on("GET_DATA_RAND_RETURN", ret => {
        while (true) {
            var joinCode = randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            var check = false;
            for (var i = 0; i < ret.length; i++) {
                if (joinCode == ret[i].joinCode) {
                    check = true;
                }
                
            }
            if (check == false){
                console.log("no matching join codes");
                break;
            }
            else{
                console.log("retrying");
            }
        } 
        socket.emit("INSERT_NEW_PROJECT", projectName, description, joinCode);
    });
}

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}