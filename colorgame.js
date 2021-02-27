var numsquares=6;
var colors = genraterandomcolors(numsquares);
var square=document.querySelectorAll(".square");
var pickedcolor= pickcolor(); 
var colordisplay=document.querySelector("#colordisplay");
var messagedis=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");


easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numsquares=3;
    colors=genraterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent= pickcolor();
    for(var i = 0 ; i < square.length ; i++){
        if(colors[i]){
            square[i].style.backgroundColor=colors[i];
    }
    else{
        square[i].style.display="none";
    }
}
});
hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numsquares=6;
    colors=genraterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent= pickcolor();
    for(var i=0;i<square.length;i++){
    square[i].style.backgroundColor=colors[i];
    square[i].style.display="block";
    }
});


resetbutton.addEventListener("click",function(){
    //generate all new colors
    colors = genraterandomcolors(numsquares);
    //pick a new random color
    pickedcolor= pickcolor();
    //change the colors of squares
    colordisplay.textContent= pickedcolor;
    this.textContent="New colors";
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor= colors[i];
    }
    h1.style.backgroundColor= "#290149" ;
    messagedis.textContent="";
});


colordisplay.textContent= pickedcolor;

for(var i=0;i<square.length;i++){
    square[i].style.backgroundColor= colors[i];

    square[i].addEventListener("click",function(){
        var clickedcolor = this.style.backgroundColor;
        if(clickedcolor === pickedcolor){
            messagedis.textContent= "There You Gooo!"
            allchange(clickedcolor);
            h1.style.backgroundColor= clickedcolor;
            resetbutton.textContent="Play again?";

        }
        else{
            this.style.background = "#232323";
            messagedis.textContent= "OOPS"
        }
    });
}

function allchange(color){
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor= color;
    }
}

function pickcolor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genraterandomcolors(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randoncolor());
    }
    return arr;
}

function randoncolor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}