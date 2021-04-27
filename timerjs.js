const container=document.querySelector('.counter');
const buttonDiv=document.querySelector('.buttons');
const secInput=document.getElementById('seconds');

var seconds;
var remseconds;
var minuts;
var toCount=false;

remove("reset");

function toSubmit(){
    display('start');
    remove('seconds');
    remove('ok');
    remove("reset");
    seconds=Number(secInput.value)
    counting();
}

function display(e){
    document.getElementById(e).style.display='inline';
}

function remove(e){
    document.getElementById(e).style.display='none';
}

function check(stat){
    toCount=stat.value;
    if(stat.id == "start"){
        display("stop");                             
        remove("start");    
        remove("reset")
    }
    else if(stat.id == "stop"){
        display("continue");
        remove("stop");
        remove("reset")
    }
    else{
        display("stop");
        remove("continue");
        remove("reset");
    }
}

function count(){
    if (seconds > 0){
        if(toCount == true){
            seconds--;
            remseconds=seconds % 60;
            minuts=--;
            minutes=minuts % 60;
            hours=Math.floor(minutes / 60);
            
            if(hours < 10){
                hours = "0" + hours;
            }
    
            if(minuts < 10){
                minuts = "0" + minuts;
            }

            if(remseconds < 10){
               remseconds = "0" + remseconds;
            }

            container.innerHTML=hours+":" + minuts+":" + remseconds;
        }
    }
    else{
        container.innerHTML="DONE!";
        remove("stop");
        display("reset");
        var myMusic= document.getElementById("music");
        myMusic.play();
    }
}


function counting(){
   remseconds=seconds % 60;
   minuts=--;
   minutes=minuts % 60;
   hours=Math.floor(minutes / 60);
    
    if(hours < 10){
        hours = "0" + hours;
    }
    
    if(minuts < 10){
        minuts = "0" + minuts;
    }

    if(remseconds < 10){
        remseconds = "0" + remseconds;
    }


    container.innerHTML=hours+":" + minuts+":" + remseconds;
    setInterval(count, 1000);
}


