window.onscroll = function() {myFunction()};

var nav = document.querySelector("nav ul");
var navbar = document.querySelector("nav");
var stick = nav.offsetTop;
var wsuNav = document.querySelector(".wsuNav")

function myFunction() {
  if (window.pageYOffset >= stick) {
    navbar.classList.add("sticky")
//      wsuNav.classList.add("sticky2")
  } else {
//    wsuNav.classList.add("sticky2")
    navbar.classList.remove("sticky");
  }
}



var cTxt = document.getElementById("change-text");

var text_arr = ['Electric Engineers', 'Mechanical Engineers', 'Warriors'];
var t = -1;
var text = '';
var msg = cTxt.innerHTML;
var mode = 'write'
var delay = 1000;
var timeout = window.setTimeout(tick,delay); 

function updateTxt(txt) {
    cTxt.innerHTML = txt;
}

function tick() {
    
    if(cTxt.innerHTML.length == 0) {
        t++;
        text = text_arr[t];
        message = '';
        mode = 'write';
    }
    
    switch(mode){
        case 'write':
            console.log(t)
            msg += text.slice(0,1);
            text = text.substr(1);
            
            updateTxt(msg);
            
            if(text.length === 0 & t === (text_arr.length - 1)) {
                window.clearTimeout(timeout);
                return;
            }
            
            if(text.length == 0) {
                mode = 'delete';
                delay = 1500;
            } else {
                delay = 32 + Math.round(Math.random() * 40);
            }
            
            if(t === 2){
                console.log(t)
                cTxt.classList.add("warriors")
            }
            
            break;
            
        case 'delete' :
            msg = msg.slice(0,-1);
            updateTxt(msg);
            
            if(msg.length == 0) {
                mode = 'write';
                delay = 1500;
            } else {
                delay = 32 + Math.round(Math.random() * 100);
            }
            break;
    }
    
    timeout = window.setTimeout(tick,delay);
}

//console.log($(window).scrollTop());

//$(window).on("scroll", function(){
//    if($(window).scrollTop()) {
//        $("nav").css("position", "fixed");
//    }
//    if($(window).scrollTop()) {
//        $("nav").css("position", "fixed");
//    }
//})
