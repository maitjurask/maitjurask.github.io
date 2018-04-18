window.onscroll = function() {myFunction()};


var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
	if (window.scrollY >= sticky) {
		document.body.style.paddingTop = navbar.offsetHeight + 'px';
		navbar.classList.add("sticky");
	} else {
		document.body.style.paddingTop = 0;
		navbar.classList.remove("sticky");
	}
}