var clicks = 0;
var clicksupone = 1;
var uponeprice = 50;


var uptwoprice = 600;
var cpr = 0;
var uptwoon = false;
var x = 8;
    document.getElementById("score").innerHTML = clicks;
    document.getElementById("upgrade1").innerHTML = clicksupone;
    document.getElementById("uponeprice").innerHTML = uponeprice;
    document.getElementById("upgrade2").innerHTML = cpr;
    document.getElementById("uptwoprice").innerHTML = uptwoprice;
    document.getElementById("clickingarea").onclick =
function Click()
{
    if(clicksupone == 1){
        clicks++
    document.getElementById("score").innerHTML = clicks;
    }
    else
    {
        clicks = clicks + clicksupone;
        document.getElementById("score").innerHTML = clicks;
        
    } 
}


function Clickupone()
{
    if (clicks >= uponeprice)
    {
            clicksupone++;
    document.getElementById("upgrade1").innerHTML = clicksupone;
    clicks = clicks - uponeprice;
    document.getElementById("score").innerHTML = clicks;
    uponeprice = uponeprice * x;
     document.getElementById("uponeprice").innerHTML = uponeprice;
    }


}

function Clickuptwo()
{
   if (clicks >= uptwoprice)
   {
    if (uptwoon == false)
    {
        uptwoon = true;
    }
    else
    {
        cpr++
    }
    
    click =- uptwoprice;
    document.getElementById("upgrade2").innerHTML = cpr;
    document.getElementById("uptwoprice").innerHTML = uptwoprice;
    
   }
}



document.body.onkeyup = function(e){
    if(e.keyCode == 32){
          if(clicksupone == 1){
        clicks++
    document.getElementById("score").innerHTML = clicks;
    }
    else
    {
        clicks = clicks + clicksupone;
        document.getElementById("score").innerHTML = clicks;
        
    } 
    }
}