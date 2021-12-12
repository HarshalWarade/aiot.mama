// Javascript to toogle menu 
let navLinks = document.getElementById('navLinks');
function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}

// Javascript to update the views.
updateVisitCount();
let counter = document.querySelector(".count");
function updateVisitCount(){
    fetch("https://api.countapi.xyz/update/aiot/website/?amount=1")
    .then(res => res.json())
    .then(res => {
        counter.innerHTML = res.value;
    });
}


function runner(){
    scrollBy(0, 4424.800048828125);
}