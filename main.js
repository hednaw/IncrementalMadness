

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

if (typeof(Storage) == "undefined") {
   alert("Your browser does not support local storage");
   
}

document.getElementById("score").innerHTML = clicks;
    document.getElementById("upgrade1").innerHTML = clicksupone;
    document.getElementById("uponeprice").innerHTML = uponeprice;
    document.getElementById("upgrade2").innerHTML = cpr;
    document.getElementById("version").innerHTML = version;
   document.getElementById("uptwoprice").innerHTML = uptwoprice;
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
          document.getElementById("uptwoprice").innerHTML = uptwoprice;
              clicks = clicks - uptwoprice;
          uptwoprice = uptwoprice * x;
    document.getElementById("upgrade2").innerHTML = cpr;
    document.getElementById("score").innerHTML = clicks;
    if (uptwoon == false)
    {
        uptwoon = true;
        cpr++
        document.getElementById("score").innerHTML = clicks;
    document.getElementById("upgrade2").innerHTML = cpr;
    document.getElementById("uptwoprice").innerHTML = uptwoprice;
     
    document.getElementById("uptwoon").innerHTML = uptwoon;
    }
    else
    {
        cpr++
              document.getElementById("score").innerHTML = clicks;
    document.getElementById("upgrade2").innerHTML = cpr;
    document.getElementById("uptwoprice").innerHTML = uptwoprice;
     
    document.getElementById("uptwoon").innerHTML = uptwoon;
        uptwoprice = uptwoprice * x;
    }
    uptwoprice = uptwoprice * x;
     
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
     
    document.getElementById("uptwoon").innerHTML = uptwoon;
    
}
function Clickupthree(){
   if (clicks >= upthreeprice)
   {
      if (uptwointerval > 0)
      {
         clicks = clicks + upthreeprice;
      }
      clicksupthree = clicksupthree + 1;
      clicks = clicks - upthreeprice;
                 upthreeprice = upthreeprice * x;
      uptwointerval = uptwointerval - 10;
    document.getElementById("upgrade3").innerHTML = clicksupthree;
    window.clearInterval(IntervalOne);
    var IntervalOne = setInterval(byteworkers, uptwointerval);
     document.getElementById("interval").innerHTML = uptwointerval;
         document.getElementById("upthreeprice").innerHTML = upthreeprice;

   }
   
   function save()
   {
      localStorage.setItem("clicks", clicks);
      localStorage.setItem("upgrade1", clicksupone);
      localStorage.setItem("upgrade2", cpr);
      localStorage.setItem("uponeprice", uponeprice);
      localStorage.setItem("uptwoprice", uptwoprice);
      localStorage.setItem("upthreeprice", upthreeprice);
      localStorage.setItem("uptwointerval", uptwointerval);
      localStorage.setItem("uptwoon", uptwoon);
      
   }
   
   function load()
   {
      clicks = localStorage.getItem("clicks");
      
   }
}
