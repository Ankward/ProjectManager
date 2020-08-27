// document.getElementById("dot").onclick = function () {
    var ok = true;

     if (ok === true) {
          var div = document.createElement('div');
           
          div.className = 'test';       
            //div.style.backgroundColor = "black";

       document.getElementsByTagName('body')[0].appendChild(div);
    }
};
//*

document.getElementById("dot").onclick = function () {

    var ok = true;

    if (ok === true) {
      var div = document.createElement('test');
      div.style.backgroundColor = "black";
      div.style.position = "absolute";
      div.style.left = "50px";
      div.style.top = "50px";

      document.getElementsByTagName('body')[0].appendChild(div); // add it to any dom element you want
   }
};