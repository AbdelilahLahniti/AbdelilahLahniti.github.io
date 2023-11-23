$(document).ready(function(){

   $('.menu').click(function(){
      $('.navlist').toggleClass('mobileMenu');
      $('.menu3').toggleClass('hide')
      $('.menu2').toggleClass('retate')
      $('.menu1').toggleClass('retate2')
   })
   $('.navlist li').click(function(){
      $('.navlist').toggleClass('mobileMenu');
      $('.menu3').toggleClass('hide')
      $('.menu2').toggleClass('retate')
      $('.menu1').toggleClass('retate2')
   })

   
}); 

// ------------------scroll active----------------
$(document).ready(function () {
   
   

    // Add active class to the current link when scrolling
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        // Assign active class to nav links while scrolling
        $('section').each(function (i) {
            if ($(this).position().top <= scrollDistance) {
                $('.navlist a.active').removeClass('active');
                $('.navlist a').eq(i).addClass('active');
            }
        });
    }).scroll();
});

// --------------------Animation----------------
ScrollReveal({
   reset:true,
   distance:'80px',
   duration:2000,
   delay:200
 });

 ScrollReveal().reveal('.contentHome , .heading , .contact h3, .descriptionContact',{origin:'top'});
 ScrollReveal().reveal('.homeImage , .service , form ',{origin:'bottom'});
 ScrollReveal().reveal('.contentHome h1 ,.contentHome .cv , .aboutImg , .service h3 , .service .cv , .project2',{origin:'left', distance:'200px',});
 ScrollReveal().reveal('.aboutContent , .project1 , .contactInfo',{origin:'right'});
 ScrollReveal().reveal(' .project1',{origin:'right', distance:'300px'});
 ScrollReveal().reveal('.project2',{origin:'left', distance:'300px'});


// ---------------------spicialty animating-------------

const typed = new Typed('.specialty',{
   strings : ['Web developer' , 'Graphic Designer'],
   typeSpeed:100,
   backSpeed:100,
   backDelay:1000,
   loop:true
})
const typeds = new Typed('.specialtis',{
   strings : ['Web developer' , 'Graphic Designer'],
   typeSpeed:100,
   backSpeed:100,
   backDelay:1000,
   loop:true
})


// -------------------loading screen-------------
document.addEventListener("DOMContentLoaded", function() {
   // Simulate content loading (replace this with your actual content loading logic)
   setTimeout(function() {
     document.getElementById("loader").style.display = "none";
   }, 500);
});

//---------------- cv download ----------

document.getElementById('cv').addEventListener('click', function () {
   // Replace 'your_pdf_file.pdf' with the actual PDF file URL or path
   var pdfUrl = './documents/myCV-v7.pdf'

   // Update the download link's href and simulate a click
   var downloadLink = document.getElementById('cv');
   downloadLink.href = pdfUrl;
   downloadLink.click();
 });

