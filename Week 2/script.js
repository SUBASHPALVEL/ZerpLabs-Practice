function toggleNav() {
    var sidebar = document.getElementById("mySidebar");
    var content = document.getElementById("main");

    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
        sidebar.style.width = "250px";
        content.style.marginLeft = "250px";
    } else {
        sidebar.style.width = "0";
        content.style.marginLeft = "0";
    }

    $('.btn').toggleClass("click");
    $('.sidebar').toggleClass("show");
}



