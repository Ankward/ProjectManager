// Make connection

var socket = io.connect('http://localhost:3000');

function testfunc(){

    socket.emit("GET_DATA");
    socket.on("GET_DATA_RETURN", ret => {
        document.getElementById('text').innerHTML = ret;
    });


    socket.emit("INSERT_VALUE");


}

