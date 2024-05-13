 function headerNav() {


    document.getElementById("headNav").innerHTML = "<header>" + 
    "<h3>Angeline Gidaga</h3>" +
    "<h4> Portfolio </h4>" +
    "<nav>" + 
    "<ul>"+
    "<li><a href=..\\index.html>Home</a></li>" +
    "<li><a href=about.html>About</a></li>" +
    "<li><a href=resume.html>Resume</a></li>" +
    "<li><a href=work.html>Work</a></li>" +
    "<li><a href=contact.html> Contact</a></li>" + 
    "</ul>" +
    "</nav>"+
    "</header>";

 }


 function headInfo() {

    document.getElementById("headInfo").innerHTML = "<title>Angeline Gidaga Portfolio</title>" +
    "<link rel=stylesheet href=styling\\styles.css/>" +
    "<script src=functions.js></script>"
 }

 function footer() {

    document.getElementById("foot").innerHTML = "<tr>" +
    "<footer>" +
        "<p> Created by Angeline Gidaga 2024 </p>" +
    "</footer>" +
    "</tr>"
 }