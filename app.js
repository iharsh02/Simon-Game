

let gameSeq=[];
let userSeq = [];

let btns = ["red","yellow","green","blue"]
let started = false;
let level = 0 ;

let h3 = document.querySelector("h3")

// logic behind to start the game 
document.addEventListener("keypress",function(){

    if ( started == false){
        console.log (" Game has been started ");
        started = true ;

        levelUp();
    }
});


// function for the flash thingy 
function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

// when user press the btn 
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

// level ups 

function levelUp(){
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    gameFlash(randBtn);
}

// checking if user press the same button as per the game rules 

function checkAns(){    
    let idx = level-1;
    if (userSeq[idx]===gameSeq[idx]) {
            levelUp();
    }else{
        h3.innerHTML = ` Game Over! <b>Your Score ${level}</b> Press any key to start`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(() => {  
            document.querySelector("body").style.backgroundColor = "white"

        },150);
        reset();
    }
}

// button press mechanism 

function btnPress(){
    let btn = this ;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns();

}


let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

//  rest the game when game over 

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0 ;
}


