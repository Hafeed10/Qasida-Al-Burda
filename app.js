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

    // let button1 = document.getElementById("Chapters_1")
    // button1.click(function(){
    //     Chapters_1;
    // })
    // function functionName(){
    //     window.open("");
    //     }
   
      
//   $(window).on('load',function(){
// 	setTimeout(function(){ // allowing 3 secs to fade out loader
// 	$('.preloader').fadeOut('slow');
//     $(".loader").style.display = "none"
// 	},1500);
// });

// Params
