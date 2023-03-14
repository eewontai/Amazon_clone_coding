const sidebar = document.getElementById("sidebar");
const all = document.getElementById("all");
const x = document.getElementById("x");
const body = document.body;


function toggleSidebar(){
    var sidebar = document.getElementById("sidebar");
    var body = document.body;
    if(sidebar.className === "sidebar") {
        sidebar.className = "sidebar visible";
        sidebar.style.visibility = 'visible';

        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
        return;
    }
    if(sidebar.className === "sidebar visible") {
        sidebar.className = "sidebar";
        sidebar.style.visibility = "hidden";

        document.body.style.height = "100%";
        document.body.style.overflow = "visible";
        return;
    }
}

all.addEventListener("click", toggleSidebar);
x.addEventListener("click", toggleSidebar);


// sidebar overlay opacity - animation
// sidebar opening animation
// --> learn new stuff

// moving images home screen
// X mark right of sidebar

// device compatibility
// look good on smartphones and tablets etc