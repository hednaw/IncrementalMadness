

var clicks = 0;
var clicksupone = 1;
var uponeprice = 50;

var version = 'pre-alpha 0.4';

var uptwoprice = 10;
var upthreeprice = 8000;
var clicksupthree = 0;
var cpr = 0;
var uptwoon = false;
var x = 8;
var uptwointerval = 2000;
document.getElementById("score").innerHTML = clicks;
    document.getElementById("upgrade1").innerHTML = clicksupone;
    document.getElementById("uponeprice").innerHTML = uponeprice;
    document.getElementById("upgrade2").innerHTML = cpr;
    document.getElementById("version").innerHTML = version;
    document.getElementById("upgrade3").inneHTML = clicksupthree;
    document.getElementById("upthreeprice").innerHTML = upthreeprice;
    
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
        cpr++
        document.getElementById("score").innerHTML = clicks;
    document.getElementById("upgrade1").innerHTML = clicksupone;
    document.getElementById("uponeprice").innerHTML = uponeprice;
    document.getElementById("upgrade2").innerHTML = cpr;
    document.getElementById("uptwoprice").innerHTML = uptwoprice;
    document.getElementById("cpr").innerHTML = cpr;
    document.getElementById("uptwoon").innerHTML = uptwoon;
              clicks = clicks - uptwoprice;
    }
    else
    {
        cpr++
    }
    uptwoprice = uptwoprice * x;
    click =- uptwoprice;
    document.getElementById("cpr").innerHTML = cpr;
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

var IntervalOne = setInterval(byteworkers, uptwointerval);

function byteworkers () {
   if (uptwoon == true)
   {
             clicks = clicks + cpr;
   }
   document.getElementById("score").innerHTML = clicks;
    document.getElementById("upgrade1").innerHTML = clicksupone;
    document.getElementById("uponeprice").innerHTML = uponeprice;
    document.getElementById("upgrade2").innerHTML = cpr;
    document.getElementById("uptwoprice").innerHTML = uptwoprice;
    document.getElementById("cpr").innerHTML = cpr;
    document.getElementById("uptwoon").innerHTML = uptwoon;
    
}
function Clickupthree(){
   if (clicks >= upthreeprice)
   {
      clicksupthree = clicksupthree + 1;
      clicks = clicks - upthreeprice;
      uptwointerval = uptwointerval - 100;
    document.getElementById("upgrade3").innerHTML = clicksupthree;
    document.getElementById("debug").innerHTML = uptwointerval;
    window.clearInterval(IntervalOne);
    var IntervalOne = setInterval(byteworkers, uptwointerval);
   }
}

if (uptwointerval == 100)
{
   document.getElementById("Button3").disabled = true;
}


function Money()
{
   clicks = clicks + 10000000000;
}