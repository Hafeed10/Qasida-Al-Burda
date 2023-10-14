let header = document.querySelector('header');
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    // When the page has fully loaded
    loader.style.display = "none"; // Hide the loading container
        setTimeout.show();
    },1000);

   
 
//   $(window).on('load',function(){
// 	setTimeout(function(){ // allowing 3 secs to fade out loader
// 	$('.preloader').fadeOut('slow');
//     $(".loader").style.display = "none"
// 	},1500);
// });