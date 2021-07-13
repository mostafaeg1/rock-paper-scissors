let computer_score=0;
let player_score=0;

var btns=document.getElementsByClassName("icons");
for(let i=0;i<btns.length;i++)
{
    btns[i].addEventListener("click",(e) => {
        if(computer_score!=5 && player_score!=5)
        {
            playgame(e.target.id);
        }
    })
}

function playgame(player)
{
    let random = Math.floor(Math.random() * 3);
    var computer;
    switch(random)
    {
        case 0:
            computer="rock";
            break;
        case 1:
            computer="paper";
            break;
        case 2:
            computer="scissors"; 
            break;       
    }
    let img1=document.getElementById("computer-icon");             
    img1.src=`images/${computer}.jpg`;
    img1.style.visibility="visible";
    let img2=document.getElementById("player-icon");
    img2.src=`images/${player}.jpg`;
    img2.style.visibility="visible";

    let result=get_result(player,computer); 
    if(result==="computer")
    {
        computer_score++;
    }
    if(result==="player")
    {
        player_score++;
    }
    updateScore();
}

function get_result(player,computer)
{
    if(player==="rock")
    {
        if(computer==="rock")
        {
            return "draw" ;
        }
        if(computer==="paper")
        {
            return "computer" ;
        }
        if(computer==="scissors")
        {
            return "player" ; 
        }
    }
    if(player==="paper")
    {
        if(computer==="rock")
        {
            return "player" ;
        }
        if(computer==="paper")
        {
            return "draw" ;
        }
        if(computer==="scissors")
        {
            return "computer" ;
        }
    }
    if(player==="scissors")
    {
        if(computer==="rock")
        {
            return "computer" ;
        }
        if(computer==="paper")
        {
            return "player" ;
        }
        if(computer==="scissors")
        {
           return "draw" ;
        }
    }
}

function updateScore()
{
    let p1=document.getElementById("player-result");
    p1.innerHTML=`player: ${player_score}`;
    let p2=document.getElementById("computer-result");
    p2.innerHTML=`computer: ${computer_score}`;

    let result=document.getElementById("result");

    if(player_score===5 || computer_score ===5)
    {
        if(player_score===5)
        {
            result.innerHTML="You Won!";
        }
        if(computer_score===5)
        {
            result.innerHTML="You lost!";
        }
        result.style.visibility="visible"


    let btn=document.getElementById("btn");
    btn.style.visibility="visible";
    }
    

}

document.getElementById("btn").addEventListener("click", (e) => {
    if(computer_score===5||player_score===5)
    {
        reset();
        e.target.style.visibility="hidden";
    }
})

function reset()
{
    computer_score=0;
    player_score=0;
    document.getElementById("result").style.visibility="hidden";
    document.getElementById("player-result").innerHTML="player: 0";
    document.getElementById("computer-result").innerHTML="computer: 0";
    document.getElementById("computer-icon").style.visibility="hidden";
    document.getElementById("player-icon").style.visibility="hidden";
}


