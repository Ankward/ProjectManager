// Make connection

var socket = io.connect('http://localhost:3000');

function testfunc(){
    var test = socket.emit("GET_DATA");
    var returnVal = socket.on("GET_DATA_RETURN", ret => {
        console.log(ret);
        document.body.innerHTML = ret;
    });
}