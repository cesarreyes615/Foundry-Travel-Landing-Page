window.onscroll = function(){
    if(window.pageYOffset >= window.innerHeight){
        document.querySelector(".navbar").style.color = "black";
        document.querySelector(".navbar").style.backgroundColor = "white";
        var navLinks = document.querySelectorAll('.nav-links a');
        for(var i = 0; i < navLinks.length; i++){
            navLinks[i].style.color = "black";
        }
        var buttonLines = document.querySelectorAll('.button-line');
        for(var i = 0; i < buttonLines.length; i++){
            buttonLines[i].style.stroke = "black";
        }
    }

    else{
        document.querySelector(".navbar").style.color = "white";
        document.querySelector(".navbar").style.backgroundColor = "rgba(255,255,255,0)";
        var navLinks = document.querySelectorAll('.nav-links a');
        for(var i = 0; i < navLinks.length; i++){
            navLinks[i].style.color = "white";
        }
        var buttonLines = document.querySelectorAll('.button-line');
        for(var i = 0; i < buttonLines.length; i++){
            buttonLines[i].style.stroke = "white";
        }
    }
}
closedMenu = true;
function toggleMenu(){
    if(closedMenu){
        closedMenu = false;
        document.querySelector("#smaller-screen-menu").style.display = "block";
    }

    else{
        closedMenu = true;
        document.querySelector("#smaller-screen-menu").style.display = "none";
    }
}
document.querySelector(".open-nav-button").addEventListener('click',toggleMenu);