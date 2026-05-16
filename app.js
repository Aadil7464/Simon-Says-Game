//video 2
let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple", "green"];  // button flash ho to koi bhi random class choose ho jay

let started=false;        //user ko btayga kya game start ho gya h false means abhi game start nhi hua
let level=0;              // not start then level is 0

let h2=document.querySelector("h2");

document.querySelector("#start-btn").addEventListener("click", function () {   //jese hi keyboard se koi key press ho game start ho jay
    // console.log("game is started")              // sirf check krne k liye ki event trigger hua ya nhi
    if(started==false){                            // agr game start nhi hua to value false rhegi
        console.log("game is started");            // sirf jab value false ho tab hi msg aay game is started
        started=true;                             // valeu update ho jay
     
        levelup();                                // level up ko call kro jese hi game start ho

    }
})

function levelup(){
    userSeq=[];
    level++;                                    // jese hi level up ko call kiye jay level ki value update ho jay
    h2.innerText=`Level ${level}`;              //h2 ki value update ho jay

    let randIndx=Math.floor(Math.random()*4);  // koi bhhi ke color choose krna 0 se 3 tak ki range se btns array se
    let randomColor=btns[randIndx];

    let randbtn=document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameFlash(randbtn);                // jese hi level up ho then button flash ho jay
}


function gameFlash(btn){
    btn.classList.add("flash");    /* css me ek flash class bna kr add krna taki jab btn press ho to background color kuch 
                                       time k liye change ho jay*/

    setTimeout(function (){
        btn.classList.remove("flash");  //jese hi button press ho flash class remove ho jay
    },250);
}

//video 3
function checkAns(idx){
    // console.log("current level :",level);

    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same value");  // only check
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        //h2.innerText=`Game Over! Your score was<b>${level}</b> <br> Press any key to start`;// ye wrror show krega                                              kiyuki innneText me hum tag nhi de skte h

        h2.innerHTML=`Game Over! Your score was<b>${level}</b> <br> Press any key to start`;
        //document.querySelector("body").Style.backgroundColor="red";
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white";
        },150)
        reset();
    }
}


function btnPressed(){
    // console.log(this); // konsi key press hui
   let btn=this;
   gameFlash(btn);

   userColor=btn.getAttribute("id");
//    console.log(userColor);   // only checking use ne kya color enter kiya h
 userSeq.push(userColor);
 checkAns(userSeq.length-1 );
}


// yha hum apne sare button ko acces krenge
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){ 
    btn.addEventListener("click",btnPressed);
}

//video 4
function reset(){
    started=false;
    gameSeq=[];
    userSeql=[];
    level=0;
}


