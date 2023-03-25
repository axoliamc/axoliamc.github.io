document.getElementById("axolohi").style = "top: -15px; left: -15px; rotate: 135deg;"
window.onload = anim404();

function anim404(){
    var pos = Math.floor(Math.random() * 4)
    if (pos === 0){
        pos1();
    } else if(pos === 1){
        pos2();
    } else if(pos === 2){
        pos3();
    } else if(pos === 3){
        pos4();
    }
}

function pos1(){
    document.getElementById("axolohi").style = "top: -15px; left: -15px; rotate: 135deg;"
    setTimeout(function(){
        anim404();
    },1500);
}
function pos2(){
    document.getElementById("axolohi").style = "bottom: -15px; left: -15px; rotate: 45deg;"
    setTimeout(function(){
        anim404();
    },1500);
}
function pos3(){
    document.getElementById("axolohi").style = "bottom: -15px; right: -15px; rotate: -45deg;"
    setTimeout(function(){
        anim404();
    },1500);
}
function pos4(){
    document.getElementById("axolohi").style = "top: -15px; right: -15px; rotate: -135deg;"
    setTimeout(function(){
        anim404();
    },1500);
}