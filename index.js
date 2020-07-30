// here Javascript starts.
// variable declarations.
var hamburger = document.querySelector('.bars-icon');
var navbar = document.querySelector('.nav-bar');
var iconclasses = ['fas fa-bars',"fas fa-times","fas fa-moon","fas fa-sun"];
var icon = document.querySelector('#hamburger');
var darkIcon = document.querySelector('#dark');
var body = document.querySelector('body');
var navLink = document.querySelector('a');
var p = document.querySelector('p');
var title = document.querySelector('#title');
var header = document.querySelector('header');

function navigate(){
    if (icon.className = iconclasses[0]){
        navbar.style.display='block';
        icon.setAttribute("class", "fas fa-times");
    }
    

    else{
        document.write('something went wrong');
    }
}
function response(){
    if (icon.className = iconclasses[1]){
        icon.addEventListener('click',function(){
            icon.setAttribute("class", "fas fa-bars");
            navbar.style.display='none';
        });
    }
}


