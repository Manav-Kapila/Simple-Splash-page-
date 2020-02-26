function dropdownMenu() {
    'use strict';
    
    var x = document.getElementById("dropdownClick");
    if ( x.className === "topnav")
    {
        x.className += " responsive"
    /* ***** change class from topnav to topnav.responsive  *****  */  
    }
    else 
    {
        x.className = "topnav";
    }
}