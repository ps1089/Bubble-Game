// static varialbes
var timer = 60;
var score = 0;
var hitNo = 0;
var flag = 0;


// Selection part
document.querySelector("#b1").addEventListener("click", function()
{
    updateflag(0);
    bubbleGenerator();
    timerUpdation();
    
});
document.querySelector("#b2").addEventListener("click",function()
{
    updateflag(1);
    bubbleGenerator();
    timerUpdation();
});
 document.querySelector("#b3").addEventListener("click",function()
{
    updateflag(2);
    bubbleGenerator();
    timerUpdation();
});

// Update flag
function updateflag(i)
{
    flag = i;
}

// Adding bubbles using JS
function bubbleGenerator()
{
    newHitVal();
    document.querySelector('#selection').style.display = 'none';
    document.querySelector("#panel").style.display = "block";
    var n ;
    if(flag == 2)
        n = 126;
    else if (flag == 1) 
        n = 108;  
    else 
        n =  72;
    var temp = "";
    for(var i = 1 ; i <= n; i++)
    {
       // Getting random nos using below code
        temp += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector('#p-btm').innerHTML = temp;
    
}

// Hit Value Generator
function newHitVal()
{
    hitNo = Math.floor(Math.random() * 10);
    document.querySelector("#hit-val").textContent = hitNo;
}

// Timer update
function timerUpdation()
{
    var timer_interval = setInterval(
    function()
    {
        if(timer > 0)
        {
            timer--;
            document.querySelector("#timer-val").textContent = timer;
        }
        else
        {
            clearInterval(timer_interval);
            document.querySelector("#p-btm").style.display = "none";
            document.querySelector("#end-game").style.display = "flex";
            document.querySelector("#final-score").textContent+=String(score);
            
        }
    },1000);
}

// Update Score
function scoreUpdate()
{
    score += 10;
    document.querySelector('#score-val').textContent = score;
}

// Event Listener for bubbles
// Using Event Listener on the parent of bubbles , adding event listener on all bubbles not feasible.

document.querySelector("#p-btm").addEventListener("click",function(dets)
{
    var clickednum = Number(dets.target.textContent);
    if(clickednum == hitNo)
    {
        scoreUpdate();
        bubbleGenerator();
    }
    else
    {
        dets.target.style.animationName = "bubble-change";
    }
});

// Additional task : animate the bubbles to red color for 1 sec when wrong value pressed. 



