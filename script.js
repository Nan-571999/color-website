function viewMenu(){
    document.getElementsByClassName("menu")[0].style.visibility = "visible";
    document.getElementsByClassName("menus")[0].classList.remove("fa-bars");
    document.getElementsByClassName("menus")[0].classList.add("fa-xmark");
}
function hiddenMenu(){
    document.getElementsByClassName("menu")[0].style.visibility = "hidden";
    document.getElementsByClassName("menus")[0].classList.add("fa-bars");
    document.getElementsByClassName("menus")[0].classList.remove("fa-xmark");
}


function view_hiddenMenu(){
    if(document.getElementsByClassName("menus")[0].classList.contains("fa-bars"))
    {
        viewMenu();
    }
    else
    {
        hiddenMenu();
    }
}

