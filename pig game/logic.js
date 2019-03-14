var roundscore,dice,activePlayer,scores,gamePlaying;
var diceDOM=document.querySelector(".dice");
  init();  

document.querySelector(".btn-roll").addEventListener("click",btn);
document.querySelector(".btn-hold").addEventListener("click",hold);
document.querySelector(".btn-new").addEventListener("click",init);

function btn()
{
    if(gamePlaying)
    {
        dice=Math.floor(Math.random()*6)+1;
        diceDOM.style.display="block";
        diceDOM.src='dice-'+dice+'.png';
        if(dice!==1)
        {
            //add score
            roundscore+=dice;
            document.querySelector("#current-"+activePlayer).innerHTML=roundscore; 
        }
        else
        {
            nextPlayer();
        }
    }
}

function hold()
{
    if(gamePlaying)
    {
        scores[activePlayer]+=roundscore;
        document.getElementById("score-"+activePlayer).innerText=scores[activePlayer]; 
        if(scores[activePlayer]>=10)
        {
            document.querySelector("#name-"+activePlayer).innerHTML='Winner!';
            document.querySelector(".dice").style.display='none';
            document.querySelector(".player-"+activePlayer+"-panel").classList.add('winner');
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');
            gamePlaying=false;
        }
        else
        {
            nextPlayer();
        }
    } 
}



function nextPlayer()
{
     //next  player
     activePlayer=1-activePlayer;
     roundscore=0;
     diceDOM.style.display='none';
     document.getElementById("current-0").innerText=0;
     document.getElementById("current-1").innerText=0;
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
}


function init()
{
    roundscore=0;
    activePlayer=0;    
    gamePlaying=true;
    scores=[0,0];
    document.querySelector(".dice").style.display="none";
    document.getElementById("score-0").innerHTML=0;
    document.getElementById("score-1").innerHTML=0;
    document.getElementById("current-0").innerHTML=0;
    document.getElementById("current-1").innerHTML=0;
    document.getElementById("name-0").innerHTML='Player 1';
    document.getElementById("name-1").innerText='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}