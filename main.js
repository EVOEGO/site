let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

function facebook() {
    window.open("https://www.facebook.com");
}
function snapchat() {
    alert("Go to my contact me page");
}
function linkedin() {
    window.open("https://www.linkedin.com/in/izaac-crooke-213220b3/");
}
function instagram(){
    window.open("https://www.instagram.com/izaac_crooke/");
}

function aboutpage() {
    document.location.href = "about.html";
}
