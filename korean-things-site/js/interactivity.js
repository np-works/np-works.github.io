function openFunction(){
    document.getElementById("menu").style.width="300px";
    document.getElementById("mainbox").style.marginLeft="300px";
    document.getElementById("mainbox").innerHTML="Click on Cross Element and Close Menu";
    document.getElementById("main").style.marginLeft="300px";
   }
  function closeFunction(){
   document.getElementById("menu").style.width="0px";
   document.getElementById("mainbox").style.marginLeft="0px";
   document.getElementById("mainbox").innerHTML="&#9776; Open";
   document.getElementById("main").style.margin="0px";
  }