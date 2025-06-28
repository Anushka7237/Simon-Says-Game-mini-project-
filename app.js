let gameseq=[];
let userseq=[];
let btns=["yellow","red","green","blue"];
let started=false;
let level=0;
let count=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
        if(started==false)
        {
             started=true;
            levelup();
        }
});
function gameflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}
function levelup()
{
    userseq=[];
    level++;
    if(count<level){
        count=level;
    }
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}
function checkans(idx)
{
    if(userseq[idx]==gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup,1000); 
        }
    }
    else
    {
        h2.innerHTML=`GAME OVER!! Your score was <b>${level}</b><br> Maximum score was <b>${count}</b> <br>press any key to restart..`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="black";
        },150);
        reset();
    }
}
function btnpress()
{
    let btn=this;
    userflash(btn); 
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1); 
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn)
{
    btn.addEventListener("click",btnpress);
}
function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0; 
}